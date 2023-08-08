import { useContext, useEffect, useState } from "react";
import { LeftNav, SearchResultVideoCard } from "./";
import { Context } from "../context/contextApi";
import { fetchData } from "../utils/api";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchVideos();
    }, [searchQuery]);
    const fetchSearchVideos = () => {
        setLoading(true);
        fetchData(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res.contents);
            setLoading(false);
        });
    };
    return (
        <div className="h-[calc(100%-64px)] flex text-white">
            <LeftNav />

            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-4 p-5 ml-20">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
