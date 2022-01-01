import { FormEvent } from "react";
import "./SubmitButton.css";

interface Props {
  text: string;
  onClick?: (e: any) => void;
}

const SubmitButton = (props: Props) => {
  return (
    <div>
      <button onClick={props.onClick} className="submit-button">
        {props.text}
      </button>
    </div>
  );
};

export default SubmitButton;
