import { useState } from "react";
import Footer from "../components/Footer";

const options = ["+60", "+62", "+974", "+971"];

export default function PageOne({ nextPage, setData }) {
  const [mobileNumber, setMobileNumber] = useState("");
  return (
    <>
      <h1>Hello, Welcome !</h1>
      <span className="text-[#d58f49] font-bold">
        Check Your Loyalty Points and Rewards
      </span>
      <div className="flex flex-row justify-between">
        <select className="border-b border-amber-700 p-2">
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          type="tel"
          className="border-b border-amber-700 w-3/4"
          placeholder="Enter your mobile phone number"
        />
      </div>
      <button onClick={() => { setData(prev => ({ ...prev, mobileNumber })); nextPage(); }}>Check Loyalty Points</button>
      <Footer />
    </>
  );
}
