import { useState } from "react";
import Footer from "../components/Footer";

export default function PageTwo({ nextPage, setData }) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    email: "",
  });
  return (
    <>
      <h2>Registration</h2>
      <span style={{ fontStyle: "italic" }}>Please fill up your details</span>
      <Input
        label={"Name"}
        type={"text"}
        field={"name"}
        setFormData={setFormData}
      />
      <Input label={"Birthday"} type={"date"} setFormData={setFormData} 
        field={"date"}
        />
      <Input label={"Email"} type={"email"} setFormData={setFormData} 
        field={"email"}
        />
      <button
        style={{ borderRadius: "16px" }}
        onClick={() => {
          setData((prev) => ({ ...prev, ...formData }));
          nextPage();
        }}
      >
        Continue
      </button>
      <Footer />
    </>
  );
}

function Input({ label, type, field, setFormData }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFormData((prev) => ({ ...prev, [field]: newValue }));
    setError(newValue.trim() === ""); // Show error if empty
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <span>{label}</span>
      <input type={type} className="text-input" value={value} onChange={handleChange} />
      {error && <span style={{ color: "red" }}>*Please enter a valid {label}</span>}
    </div>
  );
}
