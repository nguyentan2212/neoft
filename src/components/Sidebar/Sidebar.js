import React, {useState } from "react";
import { Icon } from "@iconify/react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
    const [isActive, setIsActive] = useState(0);
    
    return (
        <div className="px-[10px] py-11 w-[256px]">
            <p className="text-grey-dark font-light text-sm ml-8 mb-3">
                Manage listings
            </p>
            <div className="flex flex-col">
                <SidebarItem
                    icon={<Icon icon="ic:outline-timelapse" width="22" />}
                    title="Dashboard"
                    isActive
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-inbox" width="22" />}
                    title="Your Listings"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-bookmarks" width="22" />}
                    title="Favorites"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-group" width="22" />}
                    title="Following"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-credit-card" width="22" />}
                    title="Payouts"
                />
            </div>
            <p className="text-grey-dark font-light text-sm ml-8 mb-3 mt-[18px]">
                Profile settings
            </p>
            <div className="flex flex-col">
                <SidebarItem
                    icon={<Icon icon="ic:outline-account-circle" width="22" />}
                    title="Account Details"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-phonelink" width="22" />}
                    title="Security"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-qr-code" width="22" />}
                    title="Apps"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-notifications" width="22" />}
                    title="Notifications"
                />
                <SidebarItem
                    icon={<Icon icon="ic:outline-headset-mic" width="22" />}
                    title="Help Center"
                />
            </div>
        </div>
    );
}

export default Sidebar;
