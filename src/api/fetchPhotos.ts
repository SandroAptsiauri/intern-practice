import $api from "../http";

export default async function fetchPhotos(searchTerm: string = "", pageParam:number = 1) {
  try {
    const endpoint = searchTerm ? "search/photos" : "photos";
    const params: Record<string, any> = {
      per_page: 20,
      order_by: "popular",
      query: searchTerm || undefined, 
      page: pageParam
    };

    const res = await $api.get(endpoint, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
      },
      params,
      withCredentials: false,
    });

    return searchTerm ? res.data.results : res.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}
