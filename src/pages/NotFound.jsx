import errorImg from "../documents/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="contaniner text-center">
      <img className="w-50" src={errorImg} alt="errorimg" />
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-4">
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
