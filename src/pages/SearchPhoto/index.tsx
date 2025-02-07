import React, { useState, Fragment, useEffect } from "react";
import { useAllSearchPhotos } from "src/api/photos";
import useEvent from "src/shared/hooks/useEvent";
import {
  Button,
  Input,
  ScrollPaginationElement,
  Spinner,
} from "src/components";
import { Photo, PhotoSkeleton } from "./components";
import { SearchPhotoComp } from "./types";
import styles from "./styles";

const HEADER_HEIGHT_PX = 104;
const CONTENT_MARGIN_BOTTOM_PX = 90;
const COUNT_PHOTO_SKELETON = 10;

const SearchPhoto: SearchPhotoComp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const {
    query: {
      data: photosData,
      isLoading,
      isError,
      isFetchingNextPage,
      isRefetching,
      isFetching,
      hasNextPage,
      refetch,
      fetchNextPage,
    },
    resetInfiniteQueryPagination,
  } = useAllSearchPhotos({ query });

  const isEmptyContent = (
    (photosData && photosData.pages[0].results.length === 0) ||
    isError
  );

  const onScrollPagination = useEvent(() => {
    if ((!isLoading || !isFetchingNextPage) && hasNextPage) {
      fetchNextPage();
    }
  });

  const onClickSearch = useEvent(() => searchValue && setQuery(searchValue));

  const onSearch = useEvent(() => {
    if (!isFetching && !isRefetching) {
      resetInfiniteQueryPagination();
      refetch();
    }
  });

  useEffect(() => {
    if (query) {
      onSearch();
    }
  }, [query, onSearch]);

  return (
    <main css={styles.wrapper(CONTENT_MARGIN_BOTTOM_PX)}>
      <div css={styles.container()}>
        <div css={styles.searchWrapper(
          (!!(photosData && photosData.pages.length > 0) || isEmptyContent || isFetching),
          HEADER_HEIGHT_PX
        )}>
          <div css={styles.searchContainer()}>
            <Input
              type={"search"}
              value={searchValue}
              onChangeValue={setSearchValue}
              placeholder={"Телефоны, яблоки, груши..."}
              additionalCss={{
                container: styles.searchInputContainer(),
              }}
            />
            <Button onClick={onClickSearch}>
              {"Искать"}
            </Button>
          </div>
        </div>
        <div css={styles.contentWrapper(HEADER_HEIGHT_PX)}>
          {(
            photosData &&
            photosData.pages.length > 0 &&
            !isEmptyContent &&
            !isRefetching
          ) && (
            <ScrollPaginationElement onScrollEvent={onScrollPagination}>
              <div css={styles.contentContainer()}>
                {photosData.pages.map((el) => (
                  el.results.map(item => (
                    <Fragment key={item.id}>
                      <Photo imgUrls={item.urls} />
                    </Fragment>))
                ))}
                {isFetchingNextPage && (
                  new Array(COUNT_PHOTO_SKELETON).fill(null).map((_, index) => <PhotoSkeleton key={index} />)
                )}
              </div>
            </ScrollPaginationElement>
          )}
          {(
            isEmptyContent &&
            !isRefetching &&
            !isFetching
          ) && (
            <p css={styles.emptyResults()}>
              {"К сожалению, поиск не дал результатов"}
            </p>
          )}
          {(
            isRefetching ||
            (isFetching && !hasNextPage)
          ) && (
            <div css={styles.loaderContainer(HEADER_HEIGHT_PX, CONTENT_MARGIN_BOTTOM_PX)}>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchPhoto;
