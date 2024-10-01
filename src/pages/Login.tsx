
import { icLogoBlack, icLogoWhite } from "../assets/icons";
import { chackra } from "../assets/images";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const Login = () => {
    const theme = 'black';
    const logo = theme === 'black' ? icLogoBlack : icLogoWhite;
    return (
        <div className="relative flex justify-center ">
            <div className="w-[65%] h-screen py-6 z-10 flex flex-col justify-between">
                <Nav style="bg-bgNavBlack" theme={theme} logo={logo}/> 
                <Footer />    
            </div>
            <figure className="absolute right-0 z-0 w-[40%] max-lg:w-[55%] max-lg:bg-cover" >
                <img src={chackra} alt="" />
            </figure>
        </div>
    )
};

export default Login;