import { useSelector } from "react-redux";
import { selectFavorites } from "../state/selectors/selectFavorites";

export default function Favoritos() {
    const favoritos = useSelector(selectFavorites);
    return (
        <section>
            <h1>Meus filmes favoritos</h1>
            <ul>
                {favoritos.map((movie) => (
                    <li>{movie.title}</li>
                ))}
            </ul>
        </section>
    );
};