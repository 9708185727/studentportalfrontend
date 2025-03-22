import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const CertificateCard = () => {
  const certificateRef = useRef();
  
  const handlePrint = useReactToPrint({
    content:() => certificateRef.current,
  });

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Certificate of Completion</h2>
        
        {/* Certificate Preview */}
        <div ref={certificateRef} className="border p-6 rounded-lg bg-white shadow-md">
          <h3 className="text-xl font-bold">Certificate of Completion</h3>
          <p className="text-gray-700 mt-2">This is to certify that</p>
          <h2 className="text-2xl font-semibold mt-1">Raman Chuadhary</h2>
          <p className="text-gray-700 mt-2">has successfully completed the course</p>
          <h3 className="text-lg font-bold mt-1">MERN STACK</h3>
          <p className="text-gray-700 mt-2">on 2024</p>
          <div className="mt-4 text-sm text-gray-500">Authorized Signature</div>
        </div>
    
        <button
          onClick={handlePrint}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Print Certificate
        </button>
      </div>
    </div>
  )
}

export default CertificateCard
