import { useNavigate, Link } from "react-router-dom";

function Book({ book }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`book/${book.id}`)}
      className="card w-72 sm:w-96 bg-base-200 shadow-xl"
    >
      <figure className="px-10 pt-10 h-[200px] rounded-xl">
        <img
          src={book.volumeInfo.imageLinks?.smallThumbnail}
          alt="book"
          className="rounded-xl h-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo?.subtitle}</p>
        <div className="card-actions">
          <div>
            <Link
              to={book.saleInfo.buyLink}
              target="blank"
              className="btn btn-success"
            >
              Buy Now
            </Link>
          </div>
          <div>
            <Link
              to={book.volumeInfo.previewLink}
              target="blank"
              className="btn btn-neutral"
            >
              Get Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
