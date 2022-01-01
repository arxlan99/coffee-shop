import { useRef, useState } from "react";
import Card from "./Card";
import "./CardContainer.css";

interface Props {
  title: string;
  imageSources: Array<{ source: string; id: string }>;
}

const CardContainer = (props: Props) => {
  const cardsRef = useRef<any>(null);
  const arrowRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [direction, setDirection] = useState("right");
  let [slideCount, setSlideCount] = useState<number>(0);

  const slideHander = (direction: string) => {
    /*  if (window.innerWidth < 400) {
      if (direction === "left") {
        console.log("directionleft");
        cardsRef!!.current!!.style.transform = `translateX(0%)`;
        setSlideCount(++slideCount);

        if (slideCount === props.imageSources.length - 1) {
          setDirection("right");
          arrowRef.current.style.transform = "rotate(360deg)";
          arrowRef.current.style.transform = "translateY(-50%)";
          setSlideCount(0);
        }
        return;
      } else if (direction === "right") {
        cardsRef!!.current!!.style.transform = `translateX(-100%)`;
        setSlideCount(++slideCount);

        if (slideCount === props.imageSources.length - 1) {
          setDirection("left");
          arrowRef.current.style.transform = "rotate(180deg)";
          setSlideCount(0);
        }
        return;
      }
    } else {
      if (direction === "left") {
        cardsRef!!.current!!.style.transform = `translateX(0%)`;
        arrowRef.current.style.transform = "rotate(360deg)";
        arrowRef.current.style.transform = "translateY(-50%)";
        setDirection("right");
        return;
      } else if (direction === "right") {
        cardsRef!!.current!!.style.transform = `translateX(-100%)`;
        arrowRef.current.style.transform = "rotate(180deg)";
        setDirection("left");
        return;
      }
    } */
  };

  return (
    <div className="cardContainer" ref={containerRef}>
      <h4>{props.title}</h4>
      <div className="cardContainer-cards" ref={cardsRef}>
        {props.imageSources.map((image, index) => (
          <Card key={index} imageSource={image.source} id={image.id} />
        ))}
        <img
          className="cardContainer__arrowRight"
          src="/images/arrow-right.svg"
          width={35}
          alt=""
          onClick={() => slideHander(direction)}
          ref={arrowRef}
        />
      </div>
    </div>
  );
};

export default CardContainer;
