export default function Logo() {
  return (
    <div className="flex justify-center h-16">
      <div className="flex items-center space-x-2">
        {" "}
        {/* space-x-2 adds horizontal spacing between children */}
        <span className="bg-indigo-600 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center">
          G
        </span>
        <span className="font-poppins font-bold text-indigo-600 text-s">
          GOODFOOD
        </span>
      </div>
    </div>
  );
}
