import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { schemaLogin } from '../utils/validation/validate';
import React, { useEffect, useState, useCallback } from 'react';
import { login } from '../services/Auth/auth';
import { loginInputItems } from '../utils/constants/constants';
import { User } from '../interfaces/user';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const LoginForm: React.FC = React.memo(() => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<{ email: string; password: string }>({
        resolver: yupResolver(schemaLogin),
    });
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const loginMutation = useMutation<User, Error, { email: string; password: string }>({
        mutationFn: login,
        onSuccess: (data: User) => {
            localStorage.setItem('id', data.id?.toString() || '');
            if (rememberMe) {
                localStorage.setItem('email', data.email || '');
                localStorage.setItem('password', data.password || '');
            }
            toast.success("Login successful!");
            setTimeout(() => {
                navigate('/pages/dashboard');
            }, 5000);
        },
        onError: (error: Error) => {
            console.error('Login error', error);
            toast.error("Login failed! Please check your credentials."); 
        },
    });

    const onSubmit = useCallback((data: { email: string; password: string }) => {
        loginMutation.mutate(data);
    }, [loginMutation]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if (email) {
            setValue('email', email);
        }
        if (password) {
            setValue('password', password);
        }
    }, [setValue]); // Thêm setValue vào phụ thuộc

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setRememberMe(checked);
        
        if (!checked) {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            setValue('email', '');
            setValue('password', '');
        }
    };

    return (
        <>
            <form className='w-[22rem]' onSubmit={handleSubmit(onSubmit)}>
                <p className='text-welcomeText text-2rem font-bold'>Welcome Back</p>
                <span className='text-primaryTextColor text-0.875rem font-bold'>Enter your email and password to sign in</span>
                {loginInputItems.map((input) => (
                    <div key={input.name} className='flex flex-col mt-[1.4rem]'>
                        <label htmlFor={input.name} className='text-0.875rem'>{input.label}</label>
                        <Controller 
                            name={input.name}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <input 
                                    className='text-0.875rem mt-[0.3rem]' 
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
                ))}
                <div className="flex items-center mt-[1rem] mb-[1rem]">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} className="sr-only" />
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
                    sign in
                </button>
                {loginMutation.isError && <p style={{ color: 'red' }}>Error during login: {loginMutation.error.message}</p>}
                <span className='mt-[1rem] w-full flex justify-center text-0.875rem text-primaryTextColor'>Don't have an account? <a href="/signup" className='text-welcomeText font-bold'>Sign up</a></span>
            </form>
            <ToastContainer />
        </>
    );
});

export default LoginForm;