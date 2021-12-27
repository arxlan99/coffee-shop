import CardContainer from "../components/CardContainer";
import Header from "../components/Header";
import "./GiftCardsPage.css";

interface Props {}

const GiftCardPage = (props: Props) => {
  const cardArray = [
    {
      source: "/images/card-1.jpg",
    },
    {
      source: "/images/card-2.png",
    },
    {
      source: "/images/card-3.png",
    },
    {
      source: "/images/card-4.png",
    },
  ];

  const cardArray2 = [
    {
      source: "/images/card-5.png",
    },
    {
      source: "/images/card-6.png",
    },
    {
      source: "/images/card-2.png",
    },
    {
      source: "/images/card-7.png",
    },
  ];

  return (
    <div className="giftCardPage">
      <Header />
      <div className="giftCardPage-container">
        <CardContainer title="FEATURED" imageSources={cardArray} />
        <CardContainer title="NEW YEAR" imageSources={cardArray2} />
        <CardContainer title="HOLIDAY" imageSources={cardArray} />
        <CardContainer title="ENCOURAGEMENT" imageSources={cardArray2} />
      </div>
    </div>
  );
};

export default GiftCardPage;
