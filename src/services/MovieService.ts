import axios from "axios";

import { MovieDetails } from "../../typings/MovieDetails";
import { Movie } from "../../typings/Movie";
import { IMDB_API_URL } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query: string): Promise<Movie[]> => {
    const { data } = await axios.get(IMDB_API_URL, {
        params: {
            s: query,
            apikey: API_KEY
        }
    });

    return data.Search || [];
};

export const getMovieDetails = async (imdbID: string): Promise<MovieDetails> => {
    const { data } = await axios.get(IMDB_API_URL, {
        params: {
            i: imdbID,
            apikey: API_KEY
        }
    });

    return data;
};
