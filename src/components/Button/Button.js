import React from "react";

function Button({ children, className }) {
    return (
        <button className={`rounded-3xl py-[10px] px-[26px] font-bold text-sm ${className}`}>
            {children}
        </button>
    );
}

export default Button;
