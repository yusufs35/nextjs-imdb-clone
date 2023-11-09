import Results from "@/components/results";
import { config } from "@/helpers/config";
import React from "react";



const wait = async (sec = 5) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

const HomePage = async ({ searchParams }) => {
  await wait()
  const genre = searchParams.genre || "fetchTrending";
  let endpoint =
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";
  endpoint += `?api_key=${config.apiKey}&language=en-US&page=1`;


  const res = await fetch(`${config.apiURL}/${endpoint}`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <div>
      <Results results={movies} />
    </div>
  );
};

export default HomePage;
