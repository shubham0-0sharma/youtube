import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },

  // ! extracting API key from env file
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};


export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    console.error(error);
  }
};
