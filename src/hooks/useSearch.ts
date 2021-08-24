import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const useSearch = (
  url: string,
  query: string,
  page: number,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchedItems: React.Dispatch<React.SetStateAction<never[]>>,
  year_start?: string,
  year_end?: string,
  media_type?: string
) => {
  const [error, setError] = useState(false);
  const { setSearching } = useAppContext();
  useEffect(() => {
    setSearchedItems([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, query]);
  useEffect(() => {
    if (!query) return;
    let cancel: Canceler;

    setSearching(true);

    (async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url,
          params: { q: query, page, year_start, year_end, media_type },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setSearchedItems(
          (prevState) =>
            [
              ...prevState,
              ...data?.collection?.items?.map((item: any) => ({
                collection: item.href,
                ...item?.data?.[0],
                ...item?.links?.[0],
              })),
            ] as never[]
        );
        setHasMore(data?.collection?.items?.length > 0);
      } catch (e) {
        if (axios.isCancel(e)) return;
        setError(true);
        setSearching(false);
        console.error(e);
      }
      setSearching(false);
    })();
    return () => cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query, url, year_start, year_end, media_type]);

  return { error };
};

export default useSearch;
