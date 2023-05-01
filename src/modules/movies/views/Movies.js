import { Movie } from "../components/movie/Movie";
import { useMovies } from "../hooks/useMovies";

export default function Movies() {  
  const movies = useMovies();
  return (
    <div className="container">
      <div className="row gy-5">
        {
          // Loop no conteúdo da variável de estado e exibe
          // os dados dentro do componente Movie
          movies.map((movie) => (
            <div key={movie.id} className="col-3">
              <Movie movie={movie} />
            </div>
          ))
        }
      </div>
    </div>
  );
};
