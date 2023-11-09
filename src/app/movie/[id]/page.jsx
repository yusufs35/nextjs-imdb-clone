import { config } from "@/helpers/config";
import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `${config.apiURL}/movie/${id}?api_key=${config.apiKey}`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const movie = await res.json();
  if (!movie) throw new Error("Movie not found");

  return movie;
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/w200${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="poster"
          className="rounded-lg basis-2/5"
          width={600}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner-sm.svg"
        />

        <div className="p-2  basis-3/5">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
