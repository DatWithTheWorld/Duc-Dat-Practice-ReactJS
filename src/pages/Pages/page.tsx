import { Route, Routes } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Login from "../Login";
import Profile from "./profile";
import Header from "../../components/Header";

const Page: React.FC = () => {
    return (
        <div style={{backgroundColor: "#F8F9FA"}} className="w-screen h-screen p-[1.2rem] flex overflow-hidden">
            <MenuBar />
            <div className="w-full">
            <Header />
            <Routes>
                <Route path="/dashboard" element={<Login />} />
                <Route path="/drofile" element={<Profile />} />
            </Routes>
            </div>
        </div>
    )
};

export default Page;