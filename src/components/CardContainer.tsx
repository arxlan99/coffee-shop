import Card from "./Card";
import "./CardContainer.css";

interface Props {
  title: string;
  imageSources: Array<{ source: string }>;
}

const CardContainer = (props: Props) => {
  return (
    <div className="cardContainer">
      <h4>{props.title}</h4>
      <div className="cardContainer-cards">
        <Card imageSource={props.imageSources[0].source} />
        <Card imageSource={props.imageSources[1].source} />
        <Card imageSource={props.imageSources[2].source} />
        <Card imageSource={props.imageSources[3].source} />
      </div>
    </div>
  );
};

export default CardContainer;
