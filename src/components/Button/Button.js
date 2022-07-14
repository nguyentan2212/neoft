import React from "react";

function Button({ children, className, prefix, suffix }) {
    return (
        <button
            className={`rounded-3xl py-[10px] px-[26px] max-w-max font-bold text-sm ${className}`}
        >
            <div className="flex flex-row justify-center items-center gap-[6px]">
                {prefix}
                {children}
                {suffix}
            </div>
        </button>
    );
}

export default Button;
