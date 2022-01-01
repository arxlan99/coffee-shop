import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import "./GiftCardsPage.css";

interface Props {}

const GiftCardPage = (props: Props) => {
  const cardArray = [
    {
      source: "/images/card-1.jpg",
      id: "1",
    },
    {
      source: "/images/card-2.png",
      id: "2",
    },
    {
      source: "/images/card-3.png",
      id: "3",
    },
    {
      source: "/images/card-4.png",
      id: "4",
    },
    {
      source: "/images/card-7.png",
      id: "5",
    },
  ];

  const cardArray2 = [
    {
      source: "/images/card-5.png",
      id: "6",
    },
    {
      source: "/images/card-6.png",
      id: "7",
    },
    {
      source: "/images/card-2.png",
      id: "8",
    },
    {
      source: "/images/card-7.png",
      id: "9",
    },
  ];

  const cardArray3 = [
    {
      source: "/images/card-1.jpg",
      id: "10",
    },
    {
      source: "/images/card-2.png",
      id: "11",
    },
    {
      source: "/images/card-3.png",
      id: "12",
    },
    {
      source: "/images/card-4.png",
      id: "13",
    },
    {
      source: "/images/card-7.png",
      id: "15",
    },
  ];

  const cardArray4 = [
    {
      source: "/images/card-5.png",
      id: "16",
    },
    {
      source: "/images/card-6.png",
      id: "17",
    },
    {
      source: "/images/card-2.png",
      id: "18",
    },
    {
      source: "/images/card-7.png",
      id: "19",
    },
  ];

  return (
    <div className="giftCardPage">
      <Header />
      <div className="giftCardPage-container">
        <CardContainer title="FEATURED" imageSources={cardArray} />
        <CardContainer title="NEW YEAR" imageSources={cardArray2} />
        <CardContainer title="HOLIDAY" imageSources={cardArray3} />
        <CardContainer title="ENCOURAGEMENT" imageSources={cardArray4} />
      </div>
    </div>
  );
};

export default GiftCardPage;
