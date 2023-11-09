import Results from "@/components/results";
import { config } from "@/helpers/config";
import React from "react";

const SearchPage = async ({ params }) => {
  const { q } = params;

  const res = await fetch(
    `${config.apiURL}/search/movie?api_key=${config.apiKey}&query=${q}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const movies = await res.json();

  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6" No results was found></h1>
      )}
      {movies && <Results results={movies.results} />}
    </div>
  );
};

export default SearchPage;
