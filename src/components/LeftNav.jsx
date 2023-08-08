import React, { useContext } from "react";

import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
const LeftNav = () => {
    const { selectedCategory, setSelectedCategory } = useContext(Context);
    const navigate = useNavigate();
    const handleCategoryClick = (name, type) => {
        switch (type) {
            case "home":
                return setSelectedCategory(name);

            case "category":
                return setSelectedCategory(name);

            case "menu":
                return false;

            default:
                break;
        }
    };

    return (
        <div className="bg-black/[0.95] h-full w-[100px] xl:w-[240px] p-3 transition-all overflow-y-hidden">
            <div className="flex flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    handleCategoryClick(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-white/[0.15] rounded-xl"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    <span className="px-2"> @ 2023 Google LCC</span>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;
