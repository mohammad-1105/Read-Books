import { useEffect } from "react";
import Container from "./Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { PiNotebook } from "react-icons/pi";
import { BiHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

function BookDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();

  console.log(book);

  // api call
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const { data } = await axios.get(
          `https://api.freeapi.app/api/v1/public/books/${id}`
        );
        setBook(data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className="p-7 w-full min-h-screen">
      {loading && (
        <Container>
          {" "}
          <span className="loading loading-infinity loading-lg"></span>
        </Container>
      )}
      {error && (
        <Container>
          (
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
          )
        </Container>
      )}

      {!loading && !error && (
        <div>
          <div className="w-full p-6 mx-auto flex ">
            <div className="w-[100vw] sm:w-[70vw]">
              <div className="flex sm:flex-col flex-row items-start gap-2 justify-start">
                <img
                  className="sm:hidden block w-24"
                  src={book.volumeInfo?.imageLinks?.smallThumbnail}
                  alt=""
                />
                <div className="font-semibold sm:text-5xl text-2xl">
                  <h1 className="">{book?.volumeInfo?.title}:</h1>
                  <h1 className="">{book?.volumeInfo?.subtitle}</h1>
                </div>
              </div>
              <div className="my-5">
                <div>
                  {book.volumeInfo?.authors?.map((author) => (
                    <span
                      className="text-md text-blue-500 font-semibold"
                      key={author}
                    >
                      {author} &nbsp;
                    </span>
                  ))}
                </div>
                <div className="flex flex-row gap-2 font-mono text-xs text-gray-400">
                  <span>{book.volumeInfo?.publishedDate} .</span>
                  <span>{book.volumeInfo?.publisher}</span>
                </div>
              </div>

              <div className="font-semibold text-sm flex gap-6 sm:gap-12 my-3 items-center">
                <span className="flex justify-center items-center flex-col ">
                  <span className="flex items-center">
                    <span>{book.volumeInfo?.ratingsCount}</span>
                    <span>
                      {" "}
                      <CiStar />
                    </span>
                  </span>
                  <span>review</span>
                </span>
                <span className="flex justify-center items-center flex-col ">
                  <PiNotebook />
                  <span>eBook</span>
                </span>
                <span className="flex justify-center items-center flex-col gap-0 ">
                  <span>{book.volumeInfo?.pageCount}</span>
                  <span className=" -mt-1">pages</span>
                </span>
                <span className="flex justify-center items-center flex-col ">
                  <BiHomeHeart />
                  <span>eligible</span>
                </span>
              </div>

              <div>
                <Link
                  to={book?.saleInfo?.buyLink}
                  className="bg-blue-600 font-semibold rounded-md px-12 py-2 hover:bg-blue-500 text-white"
                >
                  &#8377; {book.saleInfo?.listPrice?.amount} Ebook
                </Link>
              </div>
            </div>
            <div className="w-[20vw] sm:block hidden">
              <img
                className="w-60"
                src={book.volumeInfo?.imageLinks?.thumbnail}
                alt="Book"
              />
            </div>
          </div>

          <div className="p-6 mt-16">
            <h1 className="font-bold text-2xl">About this Book</h1>

            <div className="mt-5">
              <p>{book.volumeInfo?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
