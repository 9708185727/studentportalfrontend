import { useState } from "react";

export default function BuyCourse() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");

  const courses = [
 
    { name: "Graphic Design (Photoshop)", price: "Rs.999" },
    { name: "UI/UX Certification", price: "Rs.999" },
  ];
  const Shift=[
    { name: "Online Class"},
    { name: "Physical Class" },
  ]

  const handleBuyNow = () => {
    alert(`Course: ${selectedCourse} | Payment: ${paymentMethod}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Buy Course</h2>
        
        {/* Course Selection */}
        <label className="block text-gray-700 font-medium mb-2">Select Course *</label>
        <select
          className="w-full border rounded-lg p-2 mb-4"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">-- Select Course --</option>
          {courses.map((course, index) => (
            <option key={index} value={course.name}>
              {course.name} {course.price && `(${course.price})`}
            </option>
          ))}
        </select>
        <label className="block text-gray-700 font-medium mb-2">Select Shift</label>
        <select
          className="w-full border rounded-lg p-2 mb-4"
          value={selectedShift}
          onChange={(e) => setSelectedShift(e.target.value)}
        >
          <option value="">-- Select shift --</option>
          {Shift.map((shift, index) => (
            <option key={index} value={shift.name}>
              {shift.name}
            </option>
          ))}
        </select>
        
        {/* Payment Method */}
        <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="Online Payment"
              checked={paymentMethod === "Online Payment"}
              onChange={() => setPaymentMethod("Online Payment")}
            />
            Online Payment
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="Fonepay"
              checked={paymentMethod === "Fonepay"}
              onChange={() => setPaymentMethod("Fonepay")}
            />
            Fonepay
          </label>
        </div>
        
        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={!selectedCourse}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
