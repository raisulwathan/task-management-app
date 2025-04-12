interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button = ({ text, onClick, style }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#336D82",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
