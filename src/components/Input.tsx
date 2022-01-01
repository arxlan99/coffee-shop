import "./Input.css";

interface Props {
  placeholder?: string;
  onChange?: (event: any) => void;
  type?: string;
  isEmpty?: boolean;
}

const Input = (props: Props) => {
  return (
    <div className="user-input-wrp">
      <br />
      <input
        type={props.type}
        className="inputText"
        required
        onChange={props.onChange}
      />
      {!props.isEmpty && (
        <span className="floating-label">{props.placeholder}</span>
      )}
    </div>
  );
};

export default Input;
