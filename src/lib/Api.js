import axios from "axios";
import "regenerator-runtime/runtime.js";

export const getAlbums = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsById = async (id) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/" + id
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumsPhotosId = async (id) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAlbum = async (album) => {
  try {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/albums/" + album.id,
      JSON.stringify(album)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAlbum = async (album) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/albums/",
      JSON.stringify(album)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAlbum = async (id) => {
  const response = await axios.delete(
    "https://jsonplaceholder.typicode.com/albums/" + id
  );

  return response.data;
};
