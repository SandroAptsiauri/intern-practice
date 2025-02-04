import React, { useState } from "react";
import useFetchPhotos from "../hooks/queries/useFetchPhotos";
import PhotoList from "../components/photo/PhotoList";
import useDebounce from "../hooks/useDebounce";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  const { data: photos, isLoading, error } = useFetchPhotos(debouncedSearchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="ძებნა..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      {isLoading && <h1>Loading . . .</h1>}
      {error && <h2>{error.message}</h2>}

      <PhotoList photos={photos} />
    </div>
  );
};

export default HomePage;
