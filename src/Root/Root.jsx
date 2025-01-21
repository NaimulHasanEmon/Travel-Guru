import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const Root = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;