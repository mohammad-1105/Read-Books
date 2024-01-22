import { useNavigate } from "react-router-dom";
import Theme from "./components/Theme";


function App() {
  const navigate = useNavigate();
  

  return (
    <>
      <Theme />
      <div className={` hero min-h-screen bg-base-200 z-0 `}>
        <div className={`sm:mt-2 text-center`}>
          <div className="">
            <h1 className="text-3xl sm:text-5xl font-bold w-[90vw] sm:w-[60vw] mx-auto  ">
              Elevate Your Reading with Our Smart Book Search!
            </h1>
            <p className="py-6 max-w-md text-center mx-auto px-2">
              Welcome to our sophisticated book search platform, where the joy
              of discovery meets the power of technology. Uncover an extensive
              collection of literary gems tailored to your preferences. Our
              intuitive interface makes finding your next favorite read a
              seamless and enjoyable experience. Elevate your reading journey as
              you explore genres, authors, and titles with the efficiency and
              ease of our smart book search system.
            </p>
            <button
              onClick={() => navigate("/books")}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
