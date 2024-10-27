import { Route, Routes } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Profile from "./profile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Billing from "./billing";

const Page: React.FC = () => {
    return (
        <div style={{backgroundColor: "#F8F9FA"}} className="w-screen h-screen p-[1.2rem] flex overflow-hidden">
            <MenuBar />
            <div className="w-[100%] relative flex flex-col justify-between p-2">
            <Header />
            <Routes>
                <Route path="/dashboard" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/billing" element={<Billing />} />
            </Routes>
            <Footer />
            </div>
        </div>
    )
};

export default Page;