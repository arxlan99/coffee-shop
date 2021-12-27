import "./Input.css";

interface Props {
  placeholder?: string;
  /*   type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; */
}

const Input = (props: Props) => {
  return (
    <div className="user-input-wrp">
      <br />
      <input type="text" className="inputText" required />
      <span className="floating-label">{props.placeholder}</span>
    </div>
  );
};

export default Input;
