import { useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {useMutation } from '@tanstack/react-query';
import { schemaLogin } from '../utils/validation/validate';
import { useEffect, useState } from 'react';
import { login } from '../services/Auth/auth';
import { loginInputItems } from '../utils/constants/constants';
import { User } from '../interfaces/user';
const LoginForm: React.FC = () => {
    const {control, handleSubmit, formState: {errors}, setValue} = useForm<{email:string; password: string}>({
        resolver: yupResolver(schemaLogin),
    });
    const [isChecked, setIsChecked] = useState(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const loginMutation = useMutation<User, Error, {email: string; password: string}>({
        mutationFn: login,
        onSuccess: (data: User) => {
            if (rememberMe) {
                localStorage.setItem('email', data.email || '');
                localStorage.setItem('password', data.password || '');
                console.log('Login success', data);
            }
        },

        onError: (error: Error) => {
            console.error('Login error', error);
        },
    });

    const onSubmit = (data : {email: string; password: string}) => {
        loginMutation.mutate(data);
    };
    useEffect(()=>{
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if(email){
            setValue('email', email);
        }
        if(password){
            setValue('password', password);
        }
    }, [setValue]);
    return (
        <form className='w-[50%]' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-welcomeText text-2rem font-bold'>Welcome Back</p>
            <span className='text-primaryTextColor text-0.875rem font-bold'>Enter your email and password to sign in</span>
            {
                loginInputItems.map((input) => (
                    <div key={input.name} className='flex flex-col mt-[1.4rem]'>
                        <label htmlFor={input.name} className='text-0.875rem'>{input.label}</label>
                        <Controller 
                        name={input.name}
                        control={control}
                        defaultValue=""
                        render={({field}) => <input className='text-0.875rem mt-[0.3rem]' style={{borderRadius: '15px', border: '1px solid #E2E8F0', padding: '0.7rem 1.5rem'}} {...field} id={input.name} type={input.type} placeholder={input.placeholder}></input>}
                        />
                        {errors[input.name] && <p className='text-0.75rem' style={{color: 'red'}}>{errors[input.name]?.message}</p>}
                    </div>
                ))
                
            }
            <div className="flex items-center mt-[1rem] mb-[1rem]">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={(e) => {setRememberMe(e.target.checked); setIsChecked(prev => !prev)} }className="sr-only" />
                <div className={`w-9 h-5  ${isChecked ? 'bg-welcomeText' : 'bg-gray-200'} rounded-full shadow-inner`}></div>
                <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                        isChecked ? 'translate-x-4' : 'translate-x-1'
                    }`}
                ></div>
            </label>
            <span className="ml-2 text-0.75rem">Remember Me</span>
        </div>
            <button type="submit" className='w-full uppercase p-[0.5rem] bg-welcomeText text-white text-0.625rem fontb' style={{borderRadius:'0.7rem'}}>
            <a href="">sign in</a>
      </button>
      {loginMutation.isError && <p style={{ color: 'red' }}>Error during login: {loginMutation.error.message}</p>}
            <span className=' mt-[1rem] w-full flex justify-center text-0.875rem text-primaryTextColor'>Don't have an accout? <a href="/signup" className='text-welcomeText font-bold'>Sign up</a></span>
        </form>
    );
}

export default LoginForm;