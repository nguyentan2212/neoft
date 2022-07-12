import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Input from "../Input";
import Button from "../Button";
import IconButton from "../IconButton";

const logo = require("../../assets/imgs/logo.png");
const user = require("../../assets/imgs/user.png");

const links = [
    {
        title: "Explore",
        url: "/",
    },
    {
        title: "Stats",
        url: "/",
    },
    {
        title: "Drops",
        url: "/",
    },
    {
        title: "Activity",
        url: "/",
    },
];
function Header() {
    const [active, setActive] = useState(0);
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <header className="px-8 pt-5 pb-6 flex flex-row shadow">
            <img
                className="rounded-full max-h-[40px]"
                src={logo}
                alt="logo"
                height={40}
                width={40}
            />
            <Input
                className="ml-2 bg-grey w-[520px]"
                placeholder="Search items, collections, and accounts"
                prefix={
                    <Icon icon="material-symbols:search-rounded" width="20" />
                }
            />
            <div className="w-min ml-auto justify-end flex flex-row gap-5 items-center font-bold text-base text-grey-dark">
                {links &&
                    links.map((link, idx) => (
                        <Link
                            className={`nav-link ${active === idx && "text-black"}`}
                            to={link.url}
                            key={idx}
                        >
                            {link.title}
                        </Link>
                    ))}
            </div>
            <Button className="ml-9 btn-filled hover:btn-filled-resting">Create</Button>
            <IconButton
                icon={
                    <Icon
                        icon="material-symbols:account-balance-wallet-outline"
                        width="18"
                    />
                }
                className="bg-white mx-2 btn-outline-resting hover:btn-outline"
            />
            {authenticated ? (<img
                className="rounded-full"
                src={user}
                alt="user"
                height={40}
                width={40}
            />) : (<Button className="btn-outline-resting hover:btn-outline">Sign In</Button>)}
        </header>
    );
}

export default Header;
