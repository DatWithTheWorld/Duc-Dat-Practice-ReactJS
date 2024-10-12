import { Route, Routes } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Login from "../Login";

const Page: React.FC = () => {
    return (
        <div style={{backgroundColor: "#F8F9FA"}} className="w-screen h-screen p-[1.2rem] flex overflow-hidden">
            <MenuBar />
            <div className="w-full">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
            </div>
        </div>
    )
};

export default Page;