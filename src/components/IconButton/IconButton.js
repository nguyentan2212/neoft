import React from "react";

function IconButton({ icon, className }) {
    return <button className={`rounded-full p-3 ${className}`}>{icon}</button>;
}

export default IconButton;
