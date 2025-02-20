import { useState } from "react";
import Footer from "../components/Footer";
const number = "173527250";
import mulahIcon from "../assets/mulah_icon.png";

export default function PageTwo({ nextPage, setData }) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    email: "",
  });
  const isFormValid = formData.name && formData.birthday && formData.email;
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-center">
        <img src={mulahIcon} alt="Icon" className="w-1/3" />
      </div>
      <h2>Registration</h2>
      <span style={{ fontStyle: "italic" }} className="text-start">Please fill up your details</span>
      <div className="flex flex-col gap-12">
        <Input
          label={"Name"}
          type={"text"}
          field={"name"}
          setFormData={setFormData}
          placeholder="Enter Name"
        />
        <Input
          label={"Birthday"}
          type={"date"}
          setFormData={setFormData}
          field={"date"}
        />
        <Input
          label={"Email"}
          type={"email"}
          setFormData={setFormData}
          field={"email"}
          placeholder={"Email Address"}
        />
      </div>
      <button
        style={{ borderRadius: "16px" }}
        onClick={() => {
          setData((prev) => ({ ...prev, ...formData }));
          nextPage();
        }}
        // disabled={!isFormValid}
      >
        Continue
      </button>
      <Footer />
    </div>
  );
}

function Input({ label, type, field, setFormData, placeholder }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFormData((prev) => ({ ...prev, [field]: newValue }));
    setError(newValue.trim() === ""); // Show error if empty
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <span>{label}</span>
      <input
      placeholder={placeholder}
        type={type}
        className="text-input"
        value={value}
        onChange={handleChange}
      />
      {error && (
        <span style={{ color: "red" }}>*Please enter a valid {label}</span>
      )}
    </div>
  );
}
