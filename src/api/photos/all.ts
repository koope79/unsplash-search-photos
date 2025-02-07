import axios from "axios";
import { useCallback, useMemo } from "react";
import { InfiniteData, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { PhotosDto } from "src/dto";

const CLIENT_ID = "Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";

export const allSearchPhotosRequest = async (
  pageParam: number,
  payload: {
    query: string
  },
  limit = 30,
) => {
  const params = new URLSearchParams();

  params.append("client_id", CLIENT_ID);
  params.append("query", payload.query);
  params.append("page", String(pageParam));
  params.append("per_page", String(limit));

  const { data } = await axios.get<{
    total: number
    total_pages: number
    results: PhotosDto[]
  }>(
    `${process.env.API_SEARCH_PHOTOS}/search/photos?${params}`,
  );

  return data;
};

export const useAllSearchPhotos = (payload: {
  query: string
}) => {
  const queryClient = useQueryClient();

  const queryKey = useMemo(() => ["Photos", "index"], []);

  const resetInfiniteQueryPagination = useCallback(() => {
    queryClient.setQueryData(queryKey, (oldData: undefined | InfiniteData<{
      total: number
      total_pages: number
      results: PhotosDto[]
    }>) => {
      if (!oldData) return undefined;

      return {
        ...oldData,
        pages: oldData.pages.slice(0, 1),
        pageParams: oldData.pageParams.slice(0, 1),
      };
    });
  }, [queryClient, queryKey]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => allSearchPhotosRequest(pageParam, payload),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.results.length === 0 || lastPage.total < 10) {
        return undefined;
      }

      return allPages.length + 1;
    },
    retry: 1,
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { query, resetInfiniteQueryPagination };
};
