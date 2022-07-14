import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Input from "../Input";
import IconButton from "../IconButton";
import Button from "../Button";

function FooterBar() {
    return (
        <div className="flex flex-row justify-between py-16 px-20 bg-grey border-b-2 border-grey-light">
            <div className="flex flex-col">
                <p className="font-bold text-base">Subscribe to updates</p>
                <Input
                    placeholder="Enter your e-mail"
                    suffix={
                        <Icon icon="ic:outline-local-post-office" width="18" />
                    }
                    className="h-12 w-[300px] mt-6 border-grey-light border-[1px]"
                />
                <p className="font-bold text-base mt-14">Follow us</p>
                <div className="flex flex-row gap-2">
                    <IconButton
                        className="hover:btn-filled-resting text-[#1778F2] hover:text-[#1778F2]"
                        icon={<Icon icon="bxl:facebook" width="16" />}
                    />
                    <IconButton
                        className="hover:btn-filled-resting"
                        icon={<Icon icon="logos:slack-icon" width="16" />}
                    />
                    <IconButton
                        className="hover:btn-filled-resting"
                        icon={<Icon icon="logos:twitter" width="16" />}
                    />
                    <IconButton
                        className="hover:btn-filled-resting text-[#EA0010] hover:text-[#EA0010]"
                        icon={<Icon icon="bxl:pinterest-alt" width="16" />}
                    />
                    <IconButton
                        className="hover:btn-filled-resting text-[#017EB2] hover:text-[#017EB2]"
                        icon={<Icon icon="bxl:linkedin" width="16" />}
                    />
                </div>
            </div>
            <div className="flex flex-row gap-24">
                <div className="flex flex-col gap-[14px]">
                    <p className="font-bold text-base">Marketplace</p>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Explore
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Help Center
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Become a Partner
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Platform Status
                    </Link>
                </div>

                <div className="flex flex-col gap-[14px]">
                    <p className="font-bold text-base">Community</p>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Profile
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Favorites
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Watchlist
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        My Collections
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Rankings
                    </Link>
                    <Link
                        to="/"
                        className="font-bold text-sm text-grey-dark hover:text-primary"
                    >
                        Activity
                    </Link>
                </div>

                <div className="flex flex-col gap-[14px]">
                    <p className="font-bold text-base">Region</p>
                    <p className="font-normal text-sm text-grey-dark w-[305px]">
                        The world’s first marketplace for collectibles and
                        non-fungible tokens NFTs where anything is possible and
                        all are welcome
                    </p>
                    <Button
                        suffix={
                            <Icon icon="ic:outline-expand-more" width="18" />
                        }
                        className="btn-outline-resting"
                    >
                        Currency - USD
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FooterBar;
