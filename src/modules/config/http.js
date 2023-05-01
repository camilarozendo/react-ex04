import axios from "axios";

export const http = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGNjNTQ4NTg0NzA4NGM4MjgzMTZhNjhhNWYzMjAxNyIsInN1YiI6IjYzM2I1Y2U4NmQwMDBjMDA3YWY5ZmI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CcAluTSFYUH_0kAFFKCO1NEh5uHBtCYN3IEozwR-OBM",
        "Content-Type": "application/json;charset=utf-8"
    }
});