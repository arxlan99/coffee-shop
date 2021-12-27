import "./Card.css";

interface Props {
  imageSource: string;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src={props.imageSource} alt="" />
    </div>
  );
};

export default Card;
