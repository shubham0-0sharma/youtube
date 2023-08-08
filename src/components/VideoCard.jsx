import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video.videoId}`}>
            <div className=" relative h-72   w-[500px]  md:w-[310px] xl:w-[300px]  md:h-56 xl:h-44 rounded-xl overflow-hidden ">
                <img
                    className="h-full w-full object-cover"
                    src={video?.thumbnails?.[0]?.url}
                    alt=""
                />
                {video?.lengthSeconds}&&
                <VideoLength time={video?.lengthSeconds} />
            </div>
            <div className="flex text-white mt-3">
                <div className="flex items-start">
                    <div className=" flex h-9 w-9 overflow-hidden rounded-full">
                        <img
                            className="h-full w-full object-cover"
                            src={video?.author?.avatar[0]?.url}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-3 overflow-hidden">
                    <div>
                        <span className="text-sm font-bold line-clamp-2 overflow-hidden ">
                            {video?.title}
                        </span>
                        <span className="flex text-[12px] items-center font-semibold mt-2 text-white/[0.7]">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                        </span>
                        <div className="flex  text-[14px] font-light text-white/[0.7] ">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                0
                            )} views`}</span>
                            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
