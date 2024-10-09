import { icLogoBlack, icLogoWhite } from "../assets/icons";
import { signUpBack } from "../assets/images";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm";

const SignUp: React.FC = () => {
    const theme = 'white';
    const st = "self-center";
    const logo = theme === 'white' ? icLogoWhite : icLogoBlack;
    return (
        <div style={{ padding: '20px' }} className="h-screen">
        <div className="relative flex h-full justify-center w-full" >
            <figure className="absolute h-[50%] w-full z-0 " style={{borderRadius:"40px"}}>
                <img src={signUpBack} className="w-full h-full " alt="" />
            </figure>
            <div className="relative z-10 w-[65%] flex flex-col justify-between ">
                <Nav style="" theme={theme} logo={logo}/> 
                <SignUpForm style={st} />
                <Footer />    
            </div>
        </div>
        </div>
    );
};

export default SignUp;