export default function PageThree({data}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
        <h1 className="!text-amber-600 text-3xl font-bold">MULAH</h1>
        <h2 className="text-gray-700 text-xl font-semibold mt-6">
          Your Details
        </h2>
        <div className="mt-6 w-full max-w-md text-gray-700">
          <p>
            <strong>Mobile Number:</strong> +60 {data.mobileNumber}
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
        <p className="mt-6 text-gray-500">
          Powered by <span className="text-blue-500">MulahRewards.com</span>
        </p>
      </div>
    </>
  );
}
