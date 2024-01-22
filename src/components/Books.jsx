import Input from "./Input";
import Container from "./Container";
import Book from "./Book";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import { useCallback } from "react";
import BackButton from "./BackButton";

function Books() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");


  // calling debounce function
  const debouncedValue = useDebounce(search, 600);

  // api call

  const fetchData = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);

      const { data } = await axios.get(
        `https://api.freeapi.app/api/v1/public/books?page=1&limit=100&query=${debouncedValue}`
      );
      setBooks(data.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [debouncedValue]);

  useEffect(() => {
    fetchData();
  }, [debouncedValue, fetchData]);

  return (
    <div className="w-full min-h-screen p-8">
      <BackButton navigateToUrl={"/"} />
      <header className="text-4xl font-bold text-center selection:bg-slate-950">
        Search your favourite books
      </header>

      <div className="flex justify-center items-center gap-5 ">
        <Input search={search} setSearch={setSearch} />
        <button className="btn btn-md btn-success" onClick={fetchData}>
          search
        </button>
      </div>

      <Container className=" h-[80vh] overflow-y-auto">
        {loading && (
          <span className="loading loading-infinity loading-lg"></span>
        )}
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Something went wrong</span>
          </div>
        )}

        {!loading &&
          !error &&
          books.map((book) => (
            <div key={book.id}>
              <Book book={book} />
            </div>
          ))}

        {!loading && !error && books.length === 0 && (
          <div role="alert" className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Sorry! Not Available</span>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Books;
