import React from "react";

const LeftNavMenuItem = ({ text, icon, action, className }) => {
    return (
        <div
            className={
                "flex cursor-pointer text-white h-10 px-3 mb-[8px] text-sm rounded-xl items-center justify-center xl:justify-start hover:bg-white/[0.15] " +
                className
            }
            onClick={action}
        >
            <span className="text-2xl mr-3 pr-2">{icon}</span>
            <span className="hidden xl:flex">{text}</span>
        </div>
    );
};

export default LeftNavMenuItem;
