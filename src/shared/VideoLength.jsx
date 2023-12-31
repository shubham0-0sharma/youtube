import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoDuration = moment.duration(time, "seconds");
    const formattedDuration = moment
        .utc(videoDuration.asMilliseconds())
        .format("H:mm:ss");

    return (
        <span className="text-white/[0.8] bg-black text-xs rounded-md py-1 px-2 absolute bottom-2 right-2">
            {formattedDuration}
        </span>
    );
};

export default VideoLength;
