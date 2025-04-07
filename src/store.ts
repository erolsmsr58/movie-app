import { create } from "zustand";
import MovieService from "./services/MovieService";

interface SearchStore {
    query: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    results: any[];
    loading: boolean;
    setQuery: (query: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setResults: (results: any[]) => void;
    setLoading: (loading: boolean) => void;
    fetchMovies: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    query: "",
    results: [],
    loading: false,
    setQuery: (query) => set({ query }),
    setResults: (results) => set({ results }),
    setLoading: (loading) => set({ loading }),
    fetchMovies: async (query: string) => {
        set({ loading: true });
        const movies = await MovieService.searchMovies(query);
        set({ results: movies.slice(0, 5), loading: false });
    }
}));
