import { http } from "../../config/http"

export class MoviesService {
    static getMovies() {
        return http.get("movie/popular");
    }

    static getMovieDetail(id) {
        return http.get(`movie/${id}`);
    }
}