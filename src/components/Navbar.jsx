function Navbar() {
  return (
    <div className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Welcome-Back
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 ">Admin</span>

        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
          A
        </div>
      </div>

    </div>
  );
}

export default Navbar;