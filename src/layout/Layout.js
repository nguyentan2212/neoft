import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="flex flex-col max-w-screen min-h-screen">
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default Layout;
