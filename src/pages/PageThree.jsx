import Footer from "../components/Footer";

export default function PageThree({data}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="!text-amber-600 text-3xl font-bold">MULAH</h1>
        <h2 className="text-gray-700 text-xl font-semibold mt-6">
          Your Details
        </h2>
        <div className="mt-6 w-full max-w-md text-gray-700">
          <p>
            <strong>Mobile Number:</strong> {data.mobileNumber}
          </p>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Birthday:</strong> {data.birthday}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
        </div>
        <Footer/>
      </div>
    </>
  );
}
