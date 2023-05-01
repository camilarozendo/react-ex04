import React from "react";
import { createBrowserRouter } from "react-router-dom";

/** Components */
import { App } from "../../App";

/** Views */
const Movies = React.lazy(() => import(/* webpackChunkName: 'Movies' */ "../movies/views/Movies"));
const MovieDetail = React.lazy(() => import(/* webpackChunkName: 'MovieDetail' */ "..//movies/views/MovieDetails"));
const Favoritos = React.lazy(() => import(/* webpackChunkName: 'Favoritos' */ "../favorites/views/Favoritos"));

export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Movies />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
        },
        {
          path: "/favoritos",
          element: <Favoritos />,
        }
      ],
    },
  ]);