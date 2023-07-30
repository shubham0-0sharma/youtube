import { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/api";
const contents = {
    contents: [
        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ABCNews",

                    channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",

                    title: "ABC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "At least a dozen people on the ground sustained injuries, including several firefighters, pedestrians and construction workers, ...",

                isLiveNow: false,

                lengthSeconds: 126,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/TlXW7N_TtzQ/mqdefault_6s.webp?du=3000&sqp=CIjolaYG&rs=AOn4CLCjUtED_JXUfXzEwhUkd0-3q-1-8g",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 days ago",

                stats: { views: 56114 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/TlXW7N_TtzQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgrqoygKnrtxQ6HXzHaNYRbFOLFg",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/TlXW7N_TtzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAhPuZjDIyjHJ_GaGIgX48dQGgXg",

                        width: 720,
                    },
                ],

                title: "New details emerge after partial crane collapse in New York City injures at least 12 l GMA",

                videoId: "TlXW7N_TtzQ",
            },
        },
        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@CNN",

                    channelId: "UCupvZG-5ko_eiXAupbDfxWw",

                    title: "CNN",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "Five people were injured as a result of a crane collapse Wednesday morning in New York City, according to a source with the ...",

                isLiveNow: false,

                lengthSeconds: 657,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/zjrv8SICyy4/mqdefault_6s.webp?du=3000&sqp=CJ7nlaYG&rs=AOn4CLA1dkpIcTvUASoLlYQc2B08G_XRJA",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 102822 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/zjrv8SICyy4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCthxzxqJAXNdaHpKaxXKAz68xXcA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/zjrv8SICyy4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQY_Oh0NmSB_7zlM8QLHuqcd5mzA",

                        width: 720,
                    },
                ],

                title: "Dramatic video shows moment crane collapses onto New York street",

                videoId: "zjrv8SICyy4",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/V9B2EHvVtGVDMHuc7xrlZywjThO9noSeuMNm-VixCY3Hxmz04NrS1WBGx3Ss5aF7Rwze6jMMR34=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@FOX32Chicago",

                    channelId: "UCFmofUYwZd1Ibf_O3PF71jg",

                    title: "FOX 32 Chicago",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "The charges keep on coming for Former President Trump. He was charged with three felonies in the Mar-a-Lago classified ...",

                isLiveNow: false,

                lengthSeconds: 109,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/3SLMZhAaXQc/mqdefault_6s.webp?du=3000&sqp=CML8laYG&rs=AOn4CLA1588KR7e6fr79xOlcc2n4L37ryQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 48075 },

                thumbnails: [
                    {
                        height: 270,

                        url: "https://i.ytimg.com/vi/3SLMZhAaXQc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgSmsxTSDh2RB3JTnADLkN1xTtbQ",

                        width: 480,
                    },
                ],

                title: "Former President Trump facing 3 new charges in Mar-a-Lago case",

                videoId: "3SLMZhAaXQc",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ABCNews",

                    channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",

                    title: "ABC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "The new charges include additional counts of willful retention of national defense information and obstruction of justice.",

                isLiveNow: false,

                lengthSeconds: 192,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/9MR7NdLTg7w/mqdefault_6s.webp?du=3000&sqp=CITclaYG&rs=AOn4CLCyGxtFu7MH213aGvQ_z8ncetWdCg",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 61647 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/9MR7NdLTg7w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8iiTylzEaVyhqotR-efdRCpSXLg",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/9MR7NdLTg7w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALflfBXzHVWGYuyMrSsxN9Y0R1VA",

                        width: 720,
                    },
                ],

                title: "Trump facing new charges in classified documents case",

                videoId: "9MR7NdLTg7w",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaSzWSS7kZV2OBRNCIyvLEvEUAIUQO4mfsg7-VSnQes=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@NBCNews",

                    channelId: "UCeY0bbntWzzVIaj2z3QigXg",

                    title: "NBC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "Video shows the moment a New York City building crane collapsed after catching fire. Multiple people, including a firefighter, were ...",

                isLiveNow: false,

                lengthSeconds: 69,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/pnmNMbneUDk/mqdefault_6s.webp?du=3000&sqp=CNf5laYG&rs=AOn4CLDGWoxX7kLG0jUQYxCTUKeXmRohKg",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 143052 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/pnmNMbneUDk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW-re8WC-yp9K23U-Ooeec2nmtLQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/pnmNMbneUDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfHgNnp6iybBqB9exUqzKLquW5zw",

                        width: 720,
                    },
                ],

                title: "WATCH: Video shows moment NYC crane collapses",

                videoId: "pnmNMbneUDk",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ABCNews",

                    channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",

                    title: "ABC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "Senate Minority Leader Mitch McConnell appeared to freeze mid-sentence during a press conference on Capitol Hill, just two ...",

                isLiveNow: false,

                lengthSeconds: 159,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/NXAj6kSJb2E/mqdefault_6s.webp?du=3000&sqp=CMHDlaYG&rs=AOn4CLCP68pFTVdVlQ391zf3A3dcmrZfVw",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 days ago",

                stats: { views: 112330 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/NXAj6kSJb2E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU2Kguyb6-PS5Ihzr0K1ggoyqQoQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/NXAj6kSJb2E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXLJfslok_L1p-RVE0w6-XGBGfaA",

                        width: 720,
                    },
                ],

                title: "Mitch McConnell faces new questions about his health after freezing mid-sentence at press conference",

                videoId: "NXAj6kSJb2E",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@msnbc",

                    channelId: "UCaXkIU1QidjPwiAYu6GcHjg",

                    title: "MSNBC",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "As Gov. Ron DeSantis continues to defend his state's Black history guidelines, which includes teaching the “benefit” of slavery, the ...",

                isLiveNow: false,

                lengthSeconds: 204,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/cm0aTtFoDAU/mqdefault_6s.webp?du=3000&sqp=CInwlaYG&rs=AOn4CLBLzeXxmlE2vX_ZmY1mL2zdFG1ldw",

                        width: 320,
                    },
                ],

                publishedTimeText: "17 hours ago",

                stats: { views: 64356 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/cm0aTtFoDAU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC4by1Z_EaiJjW4D37kY2Vq_UCYQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/cm0aTtFoDAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-4QEeT1j8ytSuNgnLDYLvly-cpw",

                        width: 720,
                    },
                ],

                title: "Sen. Tim Scott criticizes Gov. DeSantis’s new Black history curriculum",

                videoId: "cm0aTtFoDAU",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/R-Iwp_fcYXBvhfCw6zf8blC7vJ3yDdsPIjhAp6Mbp_O5clvT3XswqVzMDfFkZotJihM6-2kTuQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@CBSMornings",

                    channelId: "UC-SJ6nODDmufqBzPBwCvYvQ",

                    title: "CBS Mornings",
                },

                badges: ["New"],

                descriptionSnippet:
                    "Federal prosecutors with special counsel Jack Smith's office have added new charges against former President Donald Trump in ...",

                isLiveNow: false,

                lengthSeconds: 217,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/q9ZjXm0qyRY/mqdefault_6s.webp?du=3000&sqp=CMTVlaYG&rs=AOn4CLBrNX_Ah9OLo_u1ktju7uZH85euMQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 46552 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/q9ZjXm0qyRY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2DC0bD1SurV4EdXb790QJPpctCw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/q9ZjXm0qyRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPnwa077HMhSmJp7ekK10YB3OGlA",

                        width: 720,
                    },
                ],

                title: "Trump hit with new charges as special counsel expands Mar-a-Lago documents case",

                videoId: "q9ZjXm0qyRY",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@msnbc",

                    channelId: "UCaXkIU1QidjPwiAYu6GcHjg",

                    title: "MSNBC",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "In Special Counsel Jack Smith's superseding indictment, a low-level Mar-a-Lago employee referred to former President Donald ...",

                isLiveNow: false,

                lengthSeconds: 394,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/F8eX7fHDYe4/mqdefault_6s.webp?du=3000&sqp=CNTplaYG&rs=AOn4CLCgNOim62MOgTQ-Y4O99JTmer5TCA",

                        width: 320,
                    },
                ],

                publishedTimeText: "4 hours ago",

                stats: { views: 151898 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/F8eX7fHDYe4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHy2-a6Q5Iwt-vvPqJGerOGUwlWQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/F8eX7fHDYe4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPLxhSEyuHp8TnA39qS24Ogwflbg",

                        width: 720,
                    },
                ],

                title: "Trump sounds like mob boss in Special Counsel's new obstruction charges in classified documents case",

                videoId: "F8eX7fHDYe4",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ9Ro_zeUKqNJBuRWj6mSvS_EpentO5Mkx_OvuJEns=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@abc7NY",

                    channelId: "UCrlIS7z20CnVaCrMvdkig_g",

                    title: "Eyewitness News ABC7NY",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "A large crane caught fire and partially collapsed Wednesday morning on 10th Avenue in Manhattan.",

                isLiveNow: false,

                lengthSeconds: 29,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/BTw-K8S5exQ/mqdefault_6s.webp?du=3000&sqp=CIDmlaYG&rs=AOn4CLDdugQs8EcvvDh-3xiNaHVJ3vENMQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 43853 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/BTw-K8S5exQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9KzmNUytOlHoicZ4pZVo8Hvur2Q",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/BTw-K8S5exQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7WMiPOY-WLW_7nHzorkBvujllvA",

                        width: 720,
                    },
                ],

                title: "Burning crane collapses from New York City high-rise building",

                videoId: "BTw-K8S5exQ",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/sS_9MFDVB3tamJI0De53xyGcMV6pat4Sww7IJU1nBxZ35wCVobV1WUOyLF4MfYHln_MW4Kb5T1Y=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@NewOrleansSaints",

                    channelId: "UCwuddf1JrodMlc5fYpVlrQA",

                    title: "New Orleans Saints",
                },

                badges: ["New"],

                descriptionSnippet:
                    "New Orleans Saints tight end Jimmy Graham's post-practice interview from Saints Training Camp 2023 at the Ochsner Sports ...",

                isLiveNow: false,

                lengthSeconds: 1063,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/ECk3XHYD8ts/mqdefault_6s.webp?du=3000&sqp=CPvhlaYG&rs=AOn4CLDr9-_oTQuwrmdfTfN9belM7gb2oA",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 hours ago",

                stats: { views: 2603 },

                thumbnails: [
                    {
                        height: 270,

                        url: "https://i.ytimg.com/vi/ECk3XHYD8ts/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRAh8Y8l25pgmsFdFRGT2UGSgkwg",

                        width: 480,
                    },
                ],

                title: "Jimmy Graham talks Saints return, return to city of New Orleans | Saints Training Camp 2023",

                videoId: "ECk3XHYD8ts",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQJTbE8If3xNGUsOzdgSp3zSF2ofQJp-JvcYxNMsw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@PeppaPigOfficial",

                    channelId: "UCAOtE1V7Ots4DjM8JLlrYgg",

                    title: "Peppa Pig - Official Channel",
                },

                badges: [],

                descriptionSnippet:
                    "Life as a little one is a journey of constant discovery, and full of exciting new experiences. So, join Peppa Pig and all her family ...",

                isLiveNow: false,

                lengthSeconds: 7273,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/RQYkTIfCQ-M/mqdefault_6s.webp?du=3000&sqp=CN3ylaYG&rs=AOn4CLCe96x56Anu_lApRQVLE3M5N8Rxzg",

                        width: 320,
                    },
                ],

                publishedTimeText: "7 days ago",

                stats: { views: 416581 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/RQYkTIfCQ-M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKC8eslqRPcVYvkdVDnunOgu6b0A",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/RQYkTIfCQ-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWF8yucsgsx6Gg7F3-ZDO24pTn-w",

                        width: 720,
                    },
                ],

                title: "Peppa Pig Tales 🏄‍♀️ Water Sports Adventure! 🌊 BRAND NEW Peppa Pig Episodes",

                videoId: "RQYkTIfCQ-M",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQJTbE8If3xNGUsOzdgSp3zSF2ofQJp-JvcYxNMsw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@PeppaPigOfficial",

                    channelId: "UCAOtE1V7Ots4DjM8JLlrYgg",

                    title: "Peppa Pig - Official Channel",
                },

                badges: [],

                descriptionSnippet:
                    "Life as a little one is a journey of constant discovery, and full of exciting new experiences. So, join Peppa Pig and all her family ...",

                isLiveNow: false,

                lengthSeconds: 7243,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/lAzEAd5E1d0/mqdefault_6s.webp?du=3000&sqp=CL7slaYG&rs=AOn4CLCApPm8qzE-kdrO7tUYZtO_Q1Tzig",

                        width: 320,
                    },
                ],

                publishedTimeText: "8 days ago",

                stats: { views: 983888 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/lAzEAd5E1d0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLiMeFdaKuB6KdyFbaHXck1tybmA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/lAzEAd5E1d0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiTRrdSukjvvJLlSZnrUD_t8nrgw",

                        width: 720,
                    },
                ],

                title: "Peppa Pig Tales 🍖 Buffet on A Boat 🛳 BRAND NEW Peppa Pig Episodes",

                videoId: "lAzEAd5E1d0",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@HYBELABELS",

                    channelId: "UC3IZKseVpdzPSBaWxBxundA",

                    title: "HYBE LABELS",
                },

                badges: ["4K", "CC"],

                descriptionSnippet:
                    "NewJeans (뉴진스) 'New Jeans' Official MV Producer: MIN HEE JIN Music Video Director: Youngeum Lee THE POWERPUFF ...",

                isLiveNow: false,

                lengthSeconds: 211,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/kcelgrGY1h8/mqdefault_6s.webp?du=3000&sqp=CNrklaYG&rs=AOn4CLDP45UU2G0UlVFUqzXv1YHDpUYxuw",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 weeks ago",

                stats: { views: 14207467 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAscTTeoGjtCSJAzNC47sLBK10eyQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0fvkqG9puCo0K_u3fIXozoO8Btg",

                        width: 720,
                    },
                ],

                title: "NewJeans (뉴진스) 'New Jeans' Official MV",

                videoId: "kcelgrGY1h8",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@HYBELABELS",

                    channelId: "UC3IZKseVpdzPSBaWxBxundA",

                    title: "HYBE LABELS",
                },

                badges: ["CC"],

                descriptionSnippet:
                    "NewJeans (뉴진스) 'ETA' Official MV Producer: MIN HEE JIN Music Video Director: Wooseok Shin In collaboration with Apple, this ...",

                isLiveNow: false,

                lengthSeconds: 217,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/jOTfBlKSQYY/mqdefault_6s.webp?du=3000&sqp=CMjilaYG&rs=AOn4CLDNab9wG0-hzDsbogOR9Jv4unVflA",

                        width: 320,
                    },
                ],

                publishedTimeText: "8 days ago",

                stats: { views: 14917832 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/jOTfBlKSQYY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwbe1ngm5SLnEfX0iciol9sKtVRw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/jOTfBlKSQYY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7CXd2PYfucvE0TEbowCVKr8L0BA",

                        width: 720,
                    },
                ],

                title: "NewJeans (뉴진스) 'ETA' Official MV",

                videoId: "jOTfBlKSQYY",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/sS_9MFDVB3tamJI0De53xyGcMV6pat4Sww7IJU1nBxZ35wCVobV1WUOyLF4MfYHln_MW4Kb5T1Y=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@NewOrleansSaints",

                    channelId: "UCwuddf1JrodMlc5fYpVlrQA",

                    title: "New Orleans Saints",
                },

                badges: ["New"],

                descriptionSnippet:
                    "New Orleans Saints head coach Dennis Allen and various Saints players' post-practice interviews at Saints Training Camp ...",

                isLiveNow: false,

                lengthSeconds: 4348,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/ERErt605fEI/mqdefault_6s.webp?du=3000&sqp=CJ7dlaYG&rs=AOn4CLArWosk1jpSorwt7gVZzysrVOT24g",

                        width: 320,
                    },
                ],

                publishedTimeText: "Streamed 3 hours ago",

                stats: { views: 3060 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/ERErt605fEI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtrUCPJesjch4nVi51wW8R_uQBzw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/ERErt605fEI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU-63Dj3nADCbkPKd8NzFxbDPu8g",

                        width: 720,
                    },
                ],

                title: "LIVE: Saints Training Camp 2023 Media Availability 7/29/23",

                videoId: "ERErt605fEI",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@HYBELABELS",

                    channelId: "UC3IZKseVpdzPSBaWxBxundA",

                    title: "HYBE LABELS",
                },

                badges: ["4K", "CC"],

                descriptionSnippet:
                    "NewJeans (뉴진스) 'Super Shy' Official MV Producer: MIN HEE JIN Music Video Director: Heewon Shin 0:00 Super Shy 1:44 Join ...",

                isLiveNow: false,

                lengthSeconds: 201,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/ArmDp-zijuc/mqdefault_6s.webp?du=3000&sqp=COj1laYG&rs=AOn4CLDSXkkdYyWqtMR8qpV6Spz84DB73w",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 weeks ago",

                stats: { views: 41400826 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEM94IxWekQBbD4awEKbgt3q11Sw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjDMMTXDVqDQ8j3VK0ywp2xRHPIQ",

                        width: 720,
                    },
                ],

                title: "NewJeans (뉴진스) 'Super Shy' Official MV",

                videoId: "ArmDp-zijuc",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@HYBELABELS",

                    channelId: "UC3IZKseVpdzPSBaWxBxundA",

                    title: "HYBE LABELS",
                },

                badges: ["New", "4K"],

                descriptionSnippet:
                    "NewJeans (뉴진스) 'ASAP' Official MV Producer: MIN HEE JIN Music Video Director: Jakyoung Kim © 2023 ADOR. All Rights ...",

                isLiveNow: false,

                lengthSeconds: 141,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/dJdqn5v4Dkw/mqdefault_6s.webp?du=3000&sqp=CITTlaYG&rs=AOn4CLCf7T0aAT_2rkkuJObMC53NN6Pwww",

                        width: 320,
                    },
                ],

                publishedTimeText: "4 days ago",

                stats: { views: 6277681 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/dJdqn5v4Dkw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1nOuUcb54J8fixWBlYpgsSzcR0g",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/dJdqn5v4Dkw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHU_X1NKYTUcGstIgbJzWjmc_93g",

                        width: 720,
                    },
                ],

                title: "NewJeans (뉴진스) 'ASAP' Official MV",

                videoId: "dJdqn5v4Dkw",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaT2Hgx7cT3RgylkVswiHuNPqjBdI6KVPtosb8U1eA=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@suntv",

                    channelId: "UCBnxEdpoZwstJqC1yZpOjRA",

                    title: "Sun TV",
                },

                badges: ["New", "4K"],

                descriptionSnippet:
                    'Watch the official lyric video of the third single "Jujubee" from the movie "Jailer". Starring Superstar Rajinikanth, Directed by ...',

                isLiveNow: false,

                lengthSeconds: 170,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/XZnuFdUPIzE/mqdefault_6s.webp?du=3000&sqp=COX0laYG&rs=AOn4CLCkSlw8c1ZhS82QrqjIUwA0qzX4xQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 4783187 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/XZnuFdUPIzE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7zb3Y7hr2VEmoGnuyZD6u0aZ6DA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/XZnuFdUPIzE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBft_5I0EIFiYk0cj6uV3O0iSLDYg",

                        width: 720,
                    },
                ],

                title: "JAILER - Jujubee Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Dhee",

                videoId: "XZnuFdUPIzE",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@msnbc",

                    channelId: "UCaXkIU1QidjPwiAYu6GcHjg",

                    title: "MSNBC",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "MSNBC's Alex Witt walks through what we know with Charles Coleman, former Brooklyn, New York prosecutor. » Subscribe to ...",

                isLiveNow: false,

                lengthSeconds: 156,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/O72ur6vI5-Y/mqdefault_6s.webp?du=3000&sqp=CJrRlaYG&rs=AOn4CLAponaP9emAn3Ceg8UYbXpy6078xg",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 hours ago",

                stats: { views: 7664 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/O72ur6vI5-Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNmpcT7uJF7Q6huE1Q_vNPi-2gOQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/O72ur6vI5-Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBl1fYsAOBM26564gMAkhUV2fsbtg",

                        width: 720,
                    },
                ],

                title: "A new take on the timeline in the Trump classified documents indictment",

                videoId: "O72ur6vI5-Y",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/nvTtRxqUEr5biFiY1cfv5YUXtgOYBIuwRxQzLZBVkwhRSHfbADxJpB6gMsGszFcAjxJWIBqLFA=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@GMA",

                    channelId: "UCH1oRy1dINbMVp3UFWrKP0w",

                    title: "Good Morning America",
                },

                badges: ["New"],

                descriptionSnippet:
                    "The North Carolina rollercoaster that was shut down after a parent noticed a crack in the ride's support beam has no timeline for ...",

                isLiveNow: false,

                lengthSeconds: 151,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/tG0azOwPpuw/mqdefault_6s.webp?du=3000&sqp=CMDylaYG&rs=AOn4CLBXFMaFxbniyqewyhobPA2Ix8nA_A",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 hour ago",

                stats: { views: 3814 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/tG0azOwPpuw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsV-ZfzB9iUP9vIZUUzR_aF-uMgg",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/tG0azOwPpuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCep9PpDyTqqidLKZqMPtV5nyNvjA",

                        width: 720,
                    },
                ],

                title: "Investigation finds new crack in NC rollercoaster | GMA",

                videoId: "tG0azOwPpuw",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/nvTtRxqUEr5biFiY1cfv5YUXtgOYBIuwRxQzLZBVkwhRSHfbADxJpB6gMsGszFcAjxJWIBqLFA=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@GMA",

                    channelId: "UCH1oRy1dINbMVp3UFWrKP0w",

                    title: "Good Morning America",
                },

                badges: [],

                descriptionSnippet:
                    "Tammy Nelson, a mom of 3, tells the story of why refused to give up her window seat for a middle seat for another mom to sit next ...",

                isLiveNow: false,

                lengthSeconds: 261,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/Hi3-tSN95EA/mqdefault_6s.webp?du=3000&sqp=CJDzlaYG&rs=AOn4CLDJfTA7IxxxTWdOlNDP3E5u5mtswQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "7 days ago",

                stats: { views: 2311477 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/Hi3-tSN95EA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpjTvq_n7ElP78Pc1U_OfZPUeUmA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/Hi3-tSN95EA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPsGgpi7uTGztT5H0IItoylkNsmA",

                        width: 720,
                    },
                ],

                title: "Woman goes viral after for refusing to switch seats with fellow mom on flight | GMA",

                videoId: "Hi3-tSN95EA",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/MUfxY9_UWbDCgmQREuRj9eutpIK-r7-0vznj-2aOYp-3lU_J6e3tj14lUG1MjlnJkE2Xz9Oa=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@MashaBearEN",

                    channelId: "UCu59yAFE8fM0sVNTipR4edw",

                    title: "Masha and The Bear",
                },

                badges: [],

                descriptionSnippet:
                    'Oh wow! Follow the link and download "Masha and the Bear for kids App" — https://onelink.to/mashauvk Masha and the Bear ...',

                isLiveNow: false,

                lengthSeconds: 1911,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/Ay0wxf_n5h8/mqdefault_6s.webp?du=3000&sqp=CN35laYG&rs=AOn4CLDe8pLGjbAo-H8r13H3pG3i9HvN3w",

                        width: 320,
                    },
                ],

                publishedTimeText: "8 days ago",

                stats: { views: 1830065 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/Ay0wxf_n5h8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgJF9qblRKuG8xj3HB41oHfP3z2w",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/Ay0wxf_n5h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIwi7Y7-gPLWhSB1m2AYW9t1doNQ",

                        width: 720,
                    },
                ],

                title: "Masha and the Bear 2023 ⚽ Kick, pass and run 🥅🏅 Best episodes cartoon collection 🎬",

                videoId: "Ay0wxf_n5h8",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaSzWSS7kZV2OBRNCIyvLEvEUAIUQO4mfsg7-VSnQes=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@NBCNews",

                    channelId: "UCeY0bbntWzzVIaj2z3QigXg",

                    title: "NBC News",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "Florida Governor DeSantis is facing mounting criticism over new public school standards in the state that teach “how slaves ...",

                isLiveNow: false,

                lengthSeconds: 149,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/8-wrAv4H3YQ/mqdefault_6s.webp?du=3000&sqp=CIz9laYG&rs=AOn4CLA-h093jlnxRaEXMb7RPZ1csJUOXA",

                        width: 320,
                    },
                ],

                publishedTimeText: "21 hours ago",

                stats: { views: 46179 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/8-wrAv4H3YQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA3XHe6f46fcz2ECaHqtsykqmVUQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/8-wrAv4H3YQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiqFebYwwD692pm0gLrdytOUt_4w",

                        width: 720,
                    },
                ],

                title: "DeSantis responds to backlash over new public school teaching standards",

                videoId: "8-wrAv4H3YQ",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaRxHYhVMhF_WBhDwNaU6dWMVwniHyZo7r3xYKJdmQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@CNBCtelevision",

                    channelId: "UCrp_UI8XtuYfpiqluWLD7Lw",

                    title: "CNBC Television",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "Jeremy Siegel, University of Pennsylvania's Wharton School professor of finance, joins 'Closing Bell' to discuss if there's enough ...",

                isLiveNow: false,

                lengthSeconds: 250,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/a4O0SUCwYcM/mqdefault_6s.webp?du=3000&sqp=CLG6laYG&rs=AOn4CLBFsr_mj7wSHGCRKEvkMt0scB0XTw",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 27934 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/a4O0SUCwYcM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAByJvqM_S1t1DUX71fpyJXA7c40Q",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/a4O0SUCwYcM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7_PU9X6Ga1kNLwZ4y2OBVPzOaUw",

                        width: 720,
                    },
                ],

                title: "Equity markets are headed to new highs, says Wharton's Jeremy Siegel",

                videoId: "a4O0SUCwYcM",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/g0qpbIJmCgUJ0j15aeXeIKSZOowNButKF8aqQ7lR4Ude0TBIofWFA9hu1M_HRXHTooyZBrhMa6U=s88-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [
                        {
                            text: "Official Artist Channel",
                            type: "OFFICIAL_ARTIST_CHANNEL",
                        },
                    ],

                    canonicalBaseUrl: null,

                    channelId: "UCSDvKdIQOwTfcyOimSi9oYA",

                    title: "Future",
                },

                badges: ["CC"],

                descriptionSnippet:
                    "Future - I'M DAT N**** (Official Music Video) PURPLE + BUTTERCREAM “I NEVER LIKED YOU” VINYL NOW AVAILABLE FOR ...",

                isLiveNow: false,

                lengthSeconds: 276,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/PqvN421JBdc/mqdefault_6s.webp?du=3000&sqp=CPjMlaYG&rs=AOn4CLDG8m-XwzwTt188kmwzS-6fjayo-w",

                        width: 320,
                    },
                ],

                publishedTimeText: "10 months ago",

                stats: { views: 25476632 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/PqvN421JBdc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpy49ReYtH5qECWSCBBf7lxJ-0Iw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/PqvN421JBdc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUDYSATqx-XuJdKDZ9BaiQ4I7SwA",

                        width: 720,
                    },
                ],

                title: "Future - I'M DAT N**** (Official Music Video)",

                videoId: "PqvN421JBdc",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/Qvx-FfV7n2AM38s_RFVbmHmBdy-mB2PsA3dfJ-qM4s2J_ENwmjDxUmQi-iO2EWuC1GMmBQCD8w=s88-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [
                        {
                            text: "Official Artist Channel",
                            type: "OFFICIAL_ARTIST_CHANNEL",
                        },
                    ],

                    canonicalBaseUrl: null,

                    channelId: "UCWICXNlSLc7eeNazpzUZcLg",

                    title: "NLE CHOPPA",
                },

                badges: ["4K"],

                descriptionSnippet:
                    "NLE Choppa- Stomp Em Out (Ft. @DukeDeuce) [Official Music Video] Stream Cottonwood 2 now: ...",

                isLiveNow: false,

                lengthSeconds: 179,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/Ykt3liIYs7A/mqdefault_6s.webp?du=3000&sqp=CIDNlaYG&rs=AOn4CLB_nJA3-Wq2aVPhgbceDZ74JqgLMw",

                        width: 320,
                    },
                ],

                publishedTimeText: "9 days ago",

                stats: { views: 373832 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/Ykt3liIYs7A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVxdvy7-yGSzGdIPlbyk8g0jciiQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/Ykt3liIYs7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3C73trjRTRtRsxUexy6x-OjH16Q",

                        width: 720,
                    },
                ],

                title: "NLE Choppa- Stomp Em Out (Ft. @DukeDeuce) [Official Music Video]",

                videoId: "Ykt3liIYs7A",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaTOW1xJWre86fCwse8DQMYRGGY71y4HQHstXzXNBA=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@BlueyOfficialChannel",

                    channelId: "UCVzLLZkDuFGAE2BGdBuBNBg",

                    title: "Bluey - Official Channel",
                },

                badges: [],

                descriptionSnippet:
                    "New Bluey episodes are arriving on Disney+... for real life! The Heelers are back for ten new adorable and exciting episodes that ...",

                isLiveNow: false,

                lengthSeconds: 64,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/xzbfPOs-Gys/mqdefault_6s.webp?du=3000&sqp=CITclaYG&rs=AOn4CLB4J70CzYDn-Ccs5XRW5xZx6GF_bw",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 month ago",

                stats: { views: 3805898 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/xzbfPOs-Gys/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvrJjBGyd9DUTVJnPnXCODjJijIA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/xzbfPOs-Gys/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvPbmsFA8Fao6QdOAH3P6ZHlQmXA",

                        width: 720,
                    },
                ],

                title: "All New Bluey! | Series 3 Trailer | Bluey",

                videoId: "xzbfPOs-Gys",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaSPh_N0c6SwrnkIVMeWJabaWp1fQLS8krR41ctfkw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@KidsDianaShow",

                    channelId: "UCk8GzjMOrta8yxDcKfylJYw",

                    title: "✿ Kids Diana Show",
                },

                badges: ["4K"],

                descriptionSnippet:
                    "Diana as Wednesday and other new stories for girls. Video compilation 00:00 Diana play Pink vs. Black Challenge with ...",

                isLiveNow: false,

                lengthSeconds: 1651,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/XH6aj5jZ8PI/mqdefault_6s.webp?du=3000&sqp=CKz9laYG&rs=AOn4CLAACUEKI5ZDBJA8OrZmANROk_XqjA",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 months ago",

                stats: { views: 16744105 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/XH6aj5jZ8PI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDghpO-AhW0yOzyHbmxDdXXHo9NsQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/XH6aj5jZ8PI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDe06DkmzdSaNZwDnSFD35WYRt1bw",

                        width: 720,
                    },
                ],

                title: "Diana as Wednesday and More New Stories For Girls",

                videoId: "XH6aj5jZ8PI",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/PemRqSo-qpcCAiHi7ryXYF8Z_0zgrl1EiFb-bEBd4TQ4v3gEm5FdW8JiE_n0Qkx61uPKjfV8Hfw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ZeeStudiosOfficial",

                    channelId: "UC3jMepkLKF8y4iiwWmAB3RA",

                    title: "Zee Studios",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "Apne parivaar aur desh ke liye, ek baar phir se Gadar machayega Tara Singh! On the occasion of #KargilVijayDiwas, ...",

                isLiveNow: false,

                lengthSeconds: 183,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/mljj92tRwlk/mqdefault_6s.webp?du=3000&sqp=CMD6laYG&rs=AOn4CLDTovkUoya_BXZ8l0Lj2p0zcWRB0g",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 55410077 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/mljj92tRwlk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqDDsDqDgCX1dh3OLogejH5pnhHA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/mljj92tRwlk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuDe2zmyTtu8i_p67B6CJ4CiB2eA",

                        width: 720,
                    },
                ],

                title: "#Gadar2 Official Trailer | 11th August | Sunny Deol | Ameesha Patel | Anil Sharma | Zee Studios",

                videoId: "mljj92tRwlk",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@msnbc",

                    channelId: "UCaXkIU1QidjPwiAYu6GcHjg",

                    title: "MSNBC",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "In Special Counsel Jack Smith's superseding indictment, a low-level Mar-a-Lago employee referred to former President Donald ...",

                isLiveNow: false,

                lengthSeconds: 394,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/F8eX7fHDYe4/mqdefault_6s.webp?du=3000&sqp=CNTplaYG&rs=AOn4CLCgNOim62MOgTQ-Y4O99JTmer5TCA",

                        width: 320,
                    },
                ],

                publishedTimeText: "4 hours ago",

                stats: { views: 151898 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/F8eX7fHDYe4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHy2-a6Q5Iwt-vvPqJGerOGUwlWQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/F8eX7fHDYe4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPLxhSEyuHp8TnA39qS24Ogwflbg",

                        width: 720,
                    },
                ],

                title: "Trump sounds like mob boss in Special Counsel's new obstruction charges in classified documents case",

                videoId: "F8eX7fHDYe4",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ABCNews",

                    channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",

                    title: "ABC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "The new charges include additional counts of willful retention of national defense information and obstruction of justice.",

                isLiveNow: false,

                lengthSeconds: 192,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/9MR7NdLTg7w/mqdefault_6s.webp?du=3000&sqp=CITclaYG&rs=AOn4CLCyGxtFu7MH213aGvQ_z8ncetWdCg",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 61647 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/9MR7NdLTg7w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8iiTylzEaVyhqotR-efdRCpSXLg",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/9MR7NdLTg7w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALflfBXzHVWGYuyMrSsxN9Y0R1VA",

                        width: 720,
                    },
                ],

                title: "Trump facing new charges in classified documents case",

                videoId: "9MR7NdLTg7w",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/POBEBuwrnjqmR0v_ooItFlXZvnxXaNk7zKddZUj2hMQeea_A0RX5GsYO3P7aRZpla3L2nMGH9A=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@nygiants",

                    channelId: "UCk2FqoG8dN5EAz5WU3A0D7A",

                    title: "New York Giants",
                },

                badges: ["New"],

                descriptionSnippet:
                    "Watch the best plays from Day 3 of training camp at the Quest Diagnostics Training Center. Presented by Ford Subscribe to the ...",

                isLiveNow: false,

                lengthSeconds: 120,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/2g8y7RW6U9Q/mqdefault_6s.webp?du=3000&sqp=CPjWlaYG&rs=AOn4CLCW0QdSKwh0v9P2uZjnRCGxKgcECw",

                        width: 320,
                    },
                ],

                publishedTimeText: "18 hours ago",

                stats: { views: 15415 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/2g8y7RW6U9Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCoZ16MABgqLLr95zsB6wsBHLvhA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/2g8y7RW6U9Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWVuDt5GVnxNktkPdj7E4DXN8O0w",

                        width: 720,
                    },
                ],

                title: "Training Camp Day 3 Practice Highlights & TOP PLAYS | New York Giants",

                videoId: "2g8y7RW6U9Q",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ9qNFYtTGmfB7qPGX0US4euRdepJ-aOiExnvD8=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@OutdoorsWithTheMorgans",

                    channelId: "UC4LeqcZZTIaVQYAuqJ6gzbg",

                    title: "Outdoors With The Morgans",
                },

                badges: ["New", "4K"],

                descriptionSnippet:
                    "Plans Changed! We Bought ANOTHER 1 Ton Pickup Truck, In this video we trade in our 2019 F150 aka Grocery Getter for a 2023 ...",

                isLiveNow: false,

                lengthSeconds: 1523,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/bFPudlytQEw/mqdefault_6s.webp?du=3000&sqp=CLzJlaYG&rs=AOn4CLAtv0bMZRdwynMTqTwenpfgjQG0rQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 days ago",

                stats: { views: 191927 },

                thumbnails: [
                    {
                        height: 270,

                        url: "https://i.ytimg.com/vi/bFPudlytQEw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjmUbg8Jeey0FP8pANk_nK0C0r9Q",

                        width: 480,
                    },
                ],

                title: "NEW TRUCK AGAIN?  SUPER DUTY DECISION! One of these must GO!",

                videoId: "bFPudlytQEw",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@SaregamaMusic",

                    channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",

                    title: "Saregama Music",
                },

                badges: ["New", "4K"],

                descriptionSnippet:
                    "Two hearts, one rhythm and a love that breaks all barriers. ❤️ #DhindhoraBajeRe OUT NOW! Credits: Music - Pritam Lyrics ...",

                isLiveNow: false,

                lengthSeconds: 207,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/rFOwpX7y-rw/mqdefault_6s.webp?du=3000&sqp=CPTLlaYG&rs=AOn4CLB7j91-fhjaGGmCsQJuD3p3jp4p_Q",

                        width: 320,
                    },
                ],

                publishedTimeText: "5 days ago",

                stats: { views: 8444387 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/rFOwpX7y-rw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSY5IxqQFJLtQURaWYsMtZXZSuEA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/rFOwpX7y-rw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzBsRtwp8C_-ZpCq0M_hb6fmsA2g",

                        width: 720,
                    },
                ],

                title: "Dhindhora Baje Re | Rocky Aur Rani Kii Prem Kahaani | Ranveer, Alia, Darshan, Bhoomi, Pritam,Amitabh",

                videoId: "rFOwpX7y-rw",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/sS_9MFDVB3tamJI0De53xyGcMV6pat4Sww7IJU1nBxZ35wCVobV1WUOyLF4MfYHln_MW4Kb5T1Y=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@NewOrleansSaints",

                    channelId: "UCwuddf1JrodMlc5fYpVlrQA",

                    title: "New Orleans Saints",
                },

                badges: ["New"],

                descriptionSnippet:
                    "New Orleans Saints cornerback Paulson Adebo talks about his offseason and his expectations for the Saints defense for the ...",

                isLiveNow: false,

                lengthSeconds: 181,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/CEjgw3hKLBE/mqdefault_6s.webp?du=3000&sqp=CIbMlaYG&rs=AOn4CLA4KOmgjWsje2cMbs210g4-F9YYkg",

                        width: 320,
                    },
                ],

                publishedTimeText: "9 hours ago",

                stats: { views: 662 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/CEjgw3hKLBE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZuBptkGwpLVyFXoEDCYM3wVPAzA",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/CEjgw3hKLBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7NDsG-S1ysedZ4PQewNEqWQ-vmQ",

                        width: 720,
                    },
                ],

                title: "Paulson Adebo on Expectations for Saints Defense in 2023 | New Orleans Saints",

                videoId: "CEjgw3hKLBE",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/P6SjTt-BXjTWeUcpBX-dDUcLhpCboucwr6PN0cpvR3Z7BNq7V0-CmUbVPjGbWyB33ZaO9APa=s88-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [
                        {
                            text: "Official Artist Channel",
                            type: "OFFICIAL_ARTIST_CHANNEL",
                        },
                    ],

                    canonicalBaseUrl: null,

                    channelId: "UCEzDdNqNkT-7rSfSGSr1hWg",

                    title: "Burna Boy",
                },

                badges: ["New"],

                descriptionSnippet:
                    "The official YouTube channel of Atlantic Records artist Burna Boy. Subscribe for the latest music videos, performances, and more.",

                isLiveNow: false,

                lengthSeconds: 71,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/hqZlIqEPrFo/mqdefault_6s.webp?du=3000&sqp=CIDflaYG&rs=AOn4CLDUjFq1YvGlOleOuqPTGV7ZTQPKyQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "1 day ago",

                stats: { views: 36652 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/hqZlIqEPrFo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRr9j0JorC-fzaqNjwjZQTiLUWgw",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/hqZlIqEPrFo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjURcvUusd_L8ee5XgTXIsR8SeVA",

                        width: 720,
                    },
                ],

                title: "New Burna Boy album 'I Told Them...' out Aug 25th!",

                videoId: "hqZlIqEPrFo",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@ABCNews",

                    channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",

                    title: "ABC News",
                },

                badges: ["New"],

                descriptionSnippet:
                    "Senate Minority Leader Mitch McConnell appeared to freeze mid-sentence during a press conference on Capitol Hill, just two ...",

                isLiveNow: false,

                lengthSeconds: 159,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/NXAj6kSJb2E/mqdefault_6s.webp?du=3000&sqp=CMHDlaYG&rs=AOn4CLCP68pFTVdVlQ391zf3A3dcmrZfVw",

                        width: 320,
                    },
                ],

                publishedTimeText: "2 days ago",

                stats: { views: 112330 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/NXAj6kSJb2E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU2Kguyb6-PS5Ihzr0K1ggoyqQoQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/NXAj6kSJb2E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXLJfslok_L1p-RVE0w6-XGBGfaA",

                        width: 720,
                    },
                ],

                title: "Mitch McConnell faces new questions about his health after freezing mid-sentence at press conference",

                videoId: "NXAj6kSJb2E",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ9Ro_zeUKqNJBuRWj6mSvS_EpentO5Mkx_OvuJEns=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@abc7NY",

                    channelId: "UCrlIS7z20CnVaCrMvdkig_g",

                    title: "Eyewitness News ABC7NY",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "A large crane caught fire and partially collapsed Wednesday morning on 10th Avenue in Manhattan.",

                isLiveNow: false,

                lengthSeconds: 29,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/BTw-K8S5exQ/mqdefault_6s.webp?du=3000&sqp=CIDmlaYG&rs=AOn4CLDdugQs8EcvvDh-3xiNaHVJ3vENMQ",

                        width: 320,
                    },
                ],

                publishedTimeText: "3 days ago",

                stats: { views: 43853 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/BTw-K8S5exQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9KzmNUytOlHoicZ4pZVo8Hvur2Q",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/BTw-K8S5exQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7WMiPOY-WLW_7nHzorkBvujllvA",

                        width: 720,
                    },
                ],

                title: "Burning crane collapses from New York City high-rise building",

                videoId: "BTw-K8S5exQ",
            },
        },

        {
            type: "video",

            video: {
                author: {
                    avatar: [
                        {
                            height: 68,

                            url: "https://yt3.ggpht.com/ytc/AOPolaQ8uaTVpg3DWixwdpU5tNjeoLxRs3COtslrrlS3wyw=s68-c-k-c0x00ffffff-no-rj",

                            width: 68,
                        },
                    ],

                    badges: [{ text: "Verified", type: "VERIFIED_CHANNEL" }],

                    canonicalBaseUrl: "/@msnbc",

                    channelId: "UCaXkIU1QidjPwiAYu6GcHjg",

                    title: "MSNBC",
                },

                badges: ["New", "CC"],

                descriptionSnippet:
                    "As Gov. Ron DeSantis continues to defend his state's Black history guidelines, which includes teaching the “benefit” of slavery, the ...",

                isLiveNow: false,

                lengthSeconds: 204,

                movingThumbnails: [
                    {
                        height: 180,

                        url: "https://i.ytimg.com/an_webp/cm0aTtFoDAU/mqdefault_6s.webp?du=3000&sqp=CInwlaYG&rs=AOn4CLBLzeXxmlE2vX_ZmY1mL2zdFG1ldw",

                        width: 320,
                    },
                ],

                publishedTimeText: "17 hours ago",

                stats: { views: 64356 },

                thumbnails: [
                    {
                        height: 202,

                        url: "https://i.ytimg.com/vi/cm0aTtFoDAU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC4by1Z_EaiJjW4D37kY2Vq_UCYQ",

                        width: 360,
                    },
                    {
                        height: 404,

                        url: "https://i.ytimg.com/vi/cm0aTtFoDAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-4QEeT1j8ytSuNgnLDYLvly-cpw",

                        width: 720,
                    },
                ],

                title: "Sen. Tim Scott criticizes Gov. DeSantis’s new Black history curriculum",

                videoId: "cm0aTtFoDAU",
            },
        },
    ],
};
// ! Creating and exporting the context so it can be used in useContext hook.
export const Context = createContext(null);

// * Creating a AppContext componet which will return and Context.provider with all the sate values in it and will use the fetch api method to modify the state and change it so that it can pass the updated state.
// ? it will by default recive the props.children element

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [searchResults, setSearchResults] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`).then((res) => {
            console.log("data", contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {children}
        </Context.Provider>
    );
};
