import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const api = {
  getAllAlbums: async () => {
    let response = await http.get("/albums");
    return response.data; // .data da a resposta da requisição ja convertido
  },
  getAlbum: async (id: string) => {
    let response = await http.get(`/albums/${id}`);
    return response.data;
  },
  getPhotosOfAlbum: async (id: string) => {
    let response = await http.get(`/albums/${id}/photos`);
    return response.data;
  },
  getPhoto: async (id: string) => {
    let response = await http.get(`/photos/${id}`);
    return response.data;
  },
};
