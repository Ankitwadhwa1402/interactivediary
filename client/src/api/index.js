import { axiosInstance } from "./Config";

const url = '/posts';

export const fetchPosts = () => axiosInstance.get(url);
export const createPost = (newPost) => axiosInstance.post(url, newPost);
export const likePost = (id) => axiosInstance.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axiosInstance.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axiosInstance.delete(`${url}/${id}`);
