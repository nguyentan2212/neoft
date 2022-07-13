import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ icon, title, isActive }) {
    return (
        <Link
            to="/"
            className={`flex flex-row items-center py-[17px] px-[21px] text-sm font-bold hover:text-primary ${
                isActive ? "text-black bg-grey rounded-[28px]" : "text-grey-dark"
            }`}
        >
            {icon}
            <p className="ml-[14px]">{title}</p>
        </Link>
    );
}

export default SidebarItem;
