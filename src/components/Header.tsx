import React, {  useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { icBellmn, icPerson, icSettingmn } from "../assets/icons";

const SearchInput: React.FC<{ placeholder: string; onSearch: (search: string) => void }> = React.memo(({ placeholder, onSearch }) => {
    const { control, handleSubmit } = useForm<{ search: string }>();

    const onSubmit = (data: { search: string }) => {
        onSearch(data.search);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding:"0.5rem",borderRadius:'1rem', display: 'flex', alignItems: 'center',border: '1px solid #ccc', "backgroundColor": "white" , maxWidth: '14rem'}}>
            <FaSearch style={{ marginRight: '8px', color: '#888', fontSize: '15px' }} />
            <Controller
                name="search"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input
                        type="text"
                        placeholder={placeholder}
                        {...field}
                        style={{
                            backgroundColor: 'white',
                            borderLeft:"none",
                            flexGrow: 1,
                            outline: 'none',
                            fontSize: '0.75rem'
                        }}
                    />
                )}
            />
        </form>
    );
});

const Header: React.FC = () => {
    const location = useLocation();
    const pathWithoutLeadingSlash = location.pathname.slice(1);
    const pathSegments = pathWithoutLeadingSlash.split('/');

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const capitalizedSegments = pathSegments.map(segment => capitalizeFirstLetter(segment));
    const currentPage = capitalizeFirstLetter(pathSegments[pathSegments.length - 1]);

    const [placeholder] = useState("Type here ...");

    const handleSearch = (search: string) => {
        console.log('Searching for:', search);
    };

    return (
        <div className="flex justify-between z-20 relative" style={{padding: "0.8rem"}}>
            <div>
                <p className="text-0.75rem">
                    <span className="text-primaryTextColor">{capitalizedSegments[0]}</span> / <span>{capitalizedSegments[1]}</span>
                </p>
                <p className="text-0.875rem font-bold">{currentPage}</p>
            </div>
            <div className="flex gap-[0.7rem] items-center">
                <SearchInput placeholder={placeholder} onSearch={handleSearch} />
                <button className="flex items-center">
                    <figure>
                        <img src={icPerson} alt="signin" />
                    </figure>
                    <p className="text-0.75rem text-textBlur">Sign In</p>
                </button>
                <figure>
                    <img src={icSettingmn} alt="setting" />
                </figure>
                <figure>
                    <img src={icBellmn} alt="notification" />
                </figure>
            </div>
        </div>
    );
};

export default React.memo(Header);