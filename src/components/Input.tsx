import React from "react";

type Props = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<Props> = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: "100%", padding: 8, marginTop: 4, border: "1px solid #ccc" }} />
    </div>
  );
};

export default Input;
