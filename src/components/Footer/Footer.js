import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import FooterBar from "./FooterBar";
import IconButton from "../IconButton";

function Footer({ showFooterBar = true }) {
    return (
        <div>
            {showFooterBar && <FooterBar />}
            <div className="flex flex-row justify-between items-center px-8 bg-grey">
                <div className="flex flex-row gap-[22px]">
                    <Link className="font-bold text-xs" to="/">
                        Privacy Policy
                    </Link>
                    <Link className="font-bold text-xs" to="/">
                        License
                    </Link>
                    <Link className="font-bold text-xs" to="/">
                        API
                    </Link>
                    <Link className="font-medium text-xs" to="/">
                        © 2021 All rights reserved
                    </Link>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row items-center cursor-pointer gap-[6px]">
                        <p className="font-bold text-base">English</p>
                        <Icon className="font-normal text-lg" icon="ic:outline-public" width="18" />
                    </div>
                    <IconButton
                        icon={
                            <Icon icon="ic:outline-brightness-2" width="18" />
                        }
                        className="mx-[18px] my-5 btn-outline-resting hover:btn-outline dark:hidden"
                    />
                    <IconButton
                        icon={
                            <Icon icon="ic:outline-brightness-low" width="18" />
                        }
                        className="mx-[18px] my-5 btn-outline-resting hover:btn-outline hidden dark:block"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
