"use client";
import { Breeds } from "@/types/breed";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "./queryClient";

export const req = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const useDogs = () => {
  return useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
  });
};

const getDogs = async (): Promise<Breeds> => {
  const result = await req.get("/breeds/list/all");
  console.log(result.data);
  return result.data;
};

export const invalidateQuery = () => {
  queryClient.invalidateQueries({
    queryKey: ["randomImage"],
  });
};
