import { useState } from "react";
import Footer from "../components/Footer";
import mulahIcon from "../assets/mulah_icon.png";

const options = ["+60", "+62", "+974", "+971"];
const correctNumber = "173527250"; // Preset correct number

export default function PageOne({ nextPage, setData }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCode, setSelectedCode] = useState(options[0]); // Default to first option
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (mobileNumber.trim() === correctNumber) {
      setData((prev) => ({ ...prev, mobileNumber: selectedCode + mobileNumber }));
      nextPage();
    } else {
      setError(true); // Show error if incorrect
    }
  };

  return (
    <>
      <div className="w-full flex justify-center pb-12">
        <img src={mulahIcon} alt="Icon" className="w-1/2" />
      </div>
      <h1 className="!w-2/3 text-start">Hello, Welcome!</h1>
      <span className="text-[#d58f49] font-bold text-start">
        Check Your Loyalty Points and Rewards
      </span>
      <div className="flex flex-row justify-between items-center">
        <select
          className="border-b border-amber-700 p-2"
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
            setError(false); // Reset error when user types
          }}
          type="tel"
          className="border-b border-amber-700 w-3/4 p-2"
          placeholder="Enter your mobile phone number"
        />
      </div>

      {error && <p className="text-red-500 mt-2">*Invalid mobile number</p>}

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 rounded bg-amber-700 text-white hover:bg-amber-800"
      >
        Check Loyalty Points
      </button>
      
      <Footer />
    </>
  );
}
