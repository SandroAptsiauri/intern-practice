import { useInfiniteQuery } from "@tanstack/react-query";
import fetchPhotos from "../../api/fetchPhotos";

const useFetchPhotos = (searchTerm: string,) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["photos", searchTerm],
    queryFn: ({ pageParam = 1 }) => fetchPhotos(searchTerm, pageParam), 
    initialPageParam: 1, 
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 20 ? allPages.length + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000, 
  });

  return {
    photos: data?.pages.flat() || [],
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useFetchPhotos;
