import "./SubmitButton.css";

interface Props {
  text: string;
  onClick?: () => void;
}

const SubmitButton = (props: Props) => {
  return (
    <div>
      <button className="submit-button">{props.text}</button>
    </div>
  );
};

export default SubmitButton;
