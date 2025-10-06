import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
export default function Mainlayout(){
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                <Outlet/>

            </main>
            <Subscribe />
            <Footer/>
        </div>
    )
}
