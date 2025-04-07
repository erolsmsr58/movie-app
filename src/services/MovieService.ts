import axios from "axios";

const API_KEY = "6c3a2d45";
const API_URL = "https://www.omdbapi.com/";

class MovieService {
    static async searchMovies(query: string) {
        if (!query.trim()) return [];

        try {
            const response = await axios.get(API_URL, {
                params: {
                    s: query,
                    apikey: API_KEY
                }
            });
            return response.data.Search || [];
        } catch (error) {
            console.error("Error fetching movies:", error);
            return [];
        }
    }
}

export default MovieService;
