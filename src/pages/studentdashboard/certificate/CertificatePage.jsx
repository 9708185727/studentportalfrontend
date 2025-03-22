import CertificateCard from "../../../components/certificate/Certificate";



 function CertificatePage() {
  
  return (
    <div className="h-svh grid grid-cols-2 gap-2   bg-gray-100 p-4">
     <CertificateCard/>
     <CertificateCard/>
     <CertificateCard/>
    </div>
  );
}
export default CertificatePage