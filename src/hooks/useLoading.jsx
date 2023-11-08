import { useEffect, useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 900);
  }, []);
  return isLoading;
};

export default useLoading;
