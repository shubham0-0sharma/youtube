import React, { useContext, useEffect } from "react";
import { LeftNav, VideoCard } from "./index";
import { Context } from "../context/contextApi";

const Feed = () => {
    const { loading, searchResults } = useContext(Context);
    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);
    console.log(searchResults);
    return (
        <div className="flex h-[calc(100%-64px)] ">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full bg-black/[0.95] overflow-y-auto custom-scrollbar scroll-m- ">
                <div
                    className="
            
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                    p-5

                    justify-items-center
                    lg:justify-items-start"
                >
                    {!loading &&
                        searchResults.map((item) => {
                            if (item?.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Feed;
