import { useState, useEffect, useCallback } from "react";
import { fetchRandomCat } from "../api/catApi";

export const useCatImage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(true);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);

  const getCat = useCallback(async () => {
    if (!enabled) return;

    try {
      const url = await fetchRandomCat();
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    }
  }, [enabled]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoRefresh && enabled) {
      interval = setInterval(getCat, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoRefresh, enabled, getCat]);

  return {
    imageUrl,
    enabled,
    autoRefresh,
    setEnabled,
    setAutoRefresh,
    getCat,
  };
};
