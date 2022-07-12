import React from "react";

function Input({ prefix, suffix, placeholder, className }) {
    return (
        <div className={`relative rounded-3xl ${className}`}>
            {prefix && (
                <span className="absolute inset-y-0 left-4 flex flex-col justify-center">
                    {prefix}
                </span>
            )}
            <input
                className="h-full w-full pl-12 rounded-3xl bg-transparent border-transparent focus:outline-primary"
                type="text"
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default Input;
