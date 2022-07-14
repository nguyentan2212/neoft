import React from "react";

function Input({ prefix, suffix, placeholder, className }) {
    return (
        <div className={`relative rounded-3xl ${className}`}>
            {prefix && (
                <span className="absolute inset-y-0 left-4 flex flex-col justify-center text-grey-dark">
                    {prefix}
                </span>
            )}
            <input
                className={`h-full w-full rounded-3xl px-5 bg-transparent border-transparent focus:outline-primary ${
                    prefix && "pl-12"
                } ${suffix && "pr-12"}`}
                type="text"
                placeholder={placeholder}
            ></input>
            {suffix && (
                <span className="absolute inset-y-0 right-4 flex flex-col justify-center text-grey-dark">
                    {suffix}
                </span>
            )}
        </div>
    );
}

export default Input;
