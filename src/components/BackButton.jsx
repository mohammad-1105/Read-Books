import { useNavigate } from "react-router-dom";

function BackButton({className ="",  navigateToUrl }) {
  const navigate = useNavigate();
  return (
    <button
      className={`btn btn-primary btn-sm fixed left-3 top-3 ${className}`}
      onClick={() => navigate(`${navigateToUrl}`)}
    >
      &lArr;
    </button>
  );
}

export default BackButton;
