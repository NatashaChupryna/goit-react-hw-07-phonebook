import { Ring, LoaderSpan } from "./Loader.styled";

export const Loader = () => {
    return (
        <Ring className="ring">Loading
        <LoaderSpan></LoaderSpan>
      </Ring>
    );
  };