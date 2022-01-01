import "./Card.css";
import { useNavigate } from "react-router-dom";
import CardDetailPage from "../pages/CardDetailPage";

interface Props {
  imageSource: string;
  id: string;
}

const Card = (props: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("clicked");
    navigate(`/gift-cards/${props.id}`);
  };

  return (
    <div className="card">
      <img
        src={props.imageSource}
        alt=""
        onClick={(event) => handleSubmit(event)}
      />
    </div>
  );
};

export default Card;
