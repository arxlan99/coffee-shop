import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import "./CardDetail.css";

interface Props {}

const CardDetailPage = (props: Props) => {
  const params = useParams();
  /* <h1>{params.id}</h1> */

  return (
    <div>
      <Header />
      <div className="cardDetail__containerLeft">
        <h3>{"<"} Gift Cards</h3>
        <h2>Create gift card</h2>
      </div>
      <div className="cardDetail__containerRight">
        <div>
          <div className="cardDetail__card">
            <img src="/images/card-1.jpg" alt="" />
          </div>
          <h4>GIFT AMOUNT</h4>
          <Input placeholder="Enter Price" />
          <h4>TO</h4>
          <Input placeholder="Recipient Name" />
          <Input placeholder="Recipient Email" />
          <h4>FROM</h4>
          <Input placeholder="Sender Name" />
          <Input placeholder="Sender Email" />
          <h4>MESSAGE</h4>
          <Input placeholder="Message" />
          <br />
          <br />
          <br />
          <div className="cardDetail__submitBtn">
            <SubmitButton text="Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
