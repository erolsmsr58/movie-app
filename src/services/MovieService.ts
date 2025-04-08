import axios from "axios";
import { IMDB_API_URL } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query: string) => {
    const { data } = await axios.get(IMDB_API_URL, {
        params: {
            s: query,
            apikey: API_KEY
        }
    });

    return data.Search || [];
};

export const getMovieDetails = async (imdbID: string) => {
    const { data } = await axios.get(IMDB_API_URL, {
        params: {
            i: imdbID,
            apikey: API_KEY
        }
    });

    return data;
};
