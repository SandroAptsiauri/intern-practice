import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../../api/fetchPhotos";
import { TPhoto } from "../../types/photo.type";

const useFetchPhotos = (searchTerm:string,) => {
  const result = useQuery<TPhoto[]>({
    queryKey: ["photos", searchTerm],
    queryFn: () => fetchPhotos(searchTerm),
    enabled:true
  });
  return result;
};
export default useFetchPhotos;
