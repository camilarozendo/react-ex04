import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovies() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getMovies().then(({ data }) => {
      // Armazena o resultado da requisição
      // em uma variável de estado do react
      setMovies(data.results);
    });
  }, []);

  return movies;
}