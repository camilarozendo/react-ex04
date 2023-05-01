import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovie(id) {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        // Requisição utilizando o serviço criado dentro da pasta /api
        MoviesService.getMovieDetail(id).then(({ data }) => {
            setMovie(data);
        });
    }, [id]);

    return movie
}