import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - HOMEFOOD`;
  }, [title]);
};
export default useTitle;
