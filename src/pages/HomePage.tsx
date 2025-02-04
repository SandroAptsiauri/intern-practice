import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchPhotos from "../hooks/queries/useFetchPhotos";
import PhotoList from "../components/photo/PhotoList";

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTermFromUrl = searchParams.get("search") || "";

  const [inputValue, setInputValue] = useState(searchTermFromUrl);
  const [search, setSearch] = useState(searchTermFromUrl);
  const { data: photos, isLoading, error } = useFetchPhotos(search);

 
  const [history, setHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem("searchHistory") || "[]")
  );

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(inputValue);
      setSearchParams({ search: inputValue });


      if (inputValue.trim() && !history.includes(inputValue)) {
        const newHistory = [...history, inputValue];
        setHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, setSearchParams, history]);

  useEffect(() => {
    setInputValue(searchTermFromUrl);
    setSearch(searchTermFromUrl);
  }, [searchTermFromUrl]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {isLoading && <h1>Loading...</h1>}
      {error && <h2>{error.message}</h2>}
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomePage;
