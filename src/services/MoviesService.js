import axios from "axios";

const request = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        api_key: "7bf87ba6b764dccc3b888fcf1277b239",
        language: `${navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage) || "en-US"}`
    }
})

export default request;