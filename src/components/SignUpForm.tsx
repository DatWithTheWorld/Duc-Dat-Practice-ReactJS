import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { schemaSignup } from '../utils/validation/validate';
import React, { useEffect, useState, useCallback } from 'react';
import { register } from '../services/Auth/auth';
import { User } from '../interfaces/user';
import { signupInputItems, SignUpItem } from '../utils/constants/constants';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

interface signUpIP {
    style: string;
}

const SignUpForm: React.FC<signUpIP> = React.memo(({ style }) => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<{ name: string; email: string; password: string }>({
        resolver: yupResolver(schemaSignup),
    });
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const registerMutation = useMutation<User, Error, { name: string; email: string; password: string }>({
        mutationFn: register,
        onSuccess: (data: User) => {
            if (rememberMe) {
                localStorage.setItem('email', data.email || '');
                localStorage.setItem('password', data.password || '');
            }

            toast.success("Account created successfully!"); 
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        },
        onError: (error: Error) => {
            console.error('Registration error', error);
            toast.error("Error to create account!"); 
        },
    });

    const onSubmit = useCallback((data: { name: string; email: string; password: string }) => {
        registerMutation.mutate(data);
    }, [registerMutation]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if (email) {
            setValue('email', email);
        }
        if (password) {
            setValue('password', password);
        }
    }, [setValue]);

    return (
        <div className={`w-[27rem] flex flex-col ${style}`}>
            <p className='text-white text-center font-bold' style={{ fontSize: "2rem" }}>Welcome!</p>
            <p className='text-white w-[80%] self-center text-center text-0.875rem'>Use these awesome forms to login or create new account in your project for free</p>
            <form onSubmit={handleSubmit(onSubmit)} className='self-center flex flex-col bg-white mt-[1.5rem] w-[80%]' style={{ padding: "1.5rem", borderRadius: "1rem", boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)" }}>
                <div className='flex self-center gap-[0.2rem] flex-col justify-center w-[70%]'>
                    <p className='text-center' style={{ fontSize: "1rem", fontWeight: "bold" }}>Register with</p>
                    <div className='flex justify-around items-center'>
                        {
                            SignUpItem.map((item) => (
                                <figure key={item.atl} style={{ border: "1px solid #E2E8F0", padding: "0.2rem", borderRadius: "0.7rem" }}>
                                    <img src={item.image} alt={item.atl} />
                                </figure>
                            ))
                        }
                    </div>
                    <p className='text-center' style={{ color: "#A0AEC0", fontSize: "1rem", fontWeight: "bold" }}>or</p>
                </div>
                {
                    signupInputItems.map((input) => (
                        <div key={input.name} className='flex flex-col mt-[0.5rem]'>
                            <label htmlFor={input.name} className='text-0.875rem'>{input.label}</label>
                            <Controller
                                name={input.name}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        className='text-0.875rem mt-[0.2rem]'
                                        style={{ borderRadius: '15px', border: '1px solid #E2E8F0', padding: '0.7rem 1.5rem' }}
                                        {...field}
                                        id={input.name}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                )}
                            />
                            {errors[input.name] && <p className='text-0.75rem' style={{ color: 'red' }}>{errors[input.name]?.message}</p>}
                        </div>
                    ))
                }
                <div className="flex items-center mt-[0.5rem] mb-[0.5rem]">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="sr-only"
                        />
                        <div className={`w-9 h-5 ${rememberMe ? 'bg-welcomeText' : 'bg-gray-200'} rounded-full shadow-inner`}></div>
                        <div
                            className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                                rememberMe ? 'translate-x-4' : 'translate-x-1'
                            }`}
                        ></div>
                    </label>
                    <span className="ml-2 text-0.75rem">Remember Me</span>
                </div>
                <button type="submit" className='w-full uppercase p-[0.5rem] bg-welcomeText text-white text-0.625rem fontb' style={{ borderRadius: '0.7rem' }}>
                    sign up
                </button>
                {registerMutation.isError && <p style={{ color: 'red' }}>Error during registration: {registerMutation.error.message}</p>}
                <span className='mt-[1rem] w-full flex justify-center text-0.875rem text-primaryTextColor'>Already have an account? <a href="/login" className='text-welcomeText font-bold'>Sign in</a></span>
            </form>
            <ToastContainer />
        </div>
    );
});

export default SignUpForm;