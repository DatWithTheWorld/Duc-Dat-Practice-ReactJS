import React from 'react';

interface RememberMeCheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string; 
}

const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <div className="flex items-center mt-[0.5rem] mb-[0.5rem]">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="sr-only"
                />
                <div className={`w-9 h-5 ${checked ? 'bg-welcomeText' : 'bg-gray-200'} rounded-full shadow-inner`}></div>
                <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                        checked ? 'translate-x-4' : 'translate-x-1'
                    }`}
                ></div>
            </label>
            <span className="ml-2 text-0.75rem text-primaryTextColor">{label}</span>
        </div>
    );
};

export default RememberMeCheckbox;