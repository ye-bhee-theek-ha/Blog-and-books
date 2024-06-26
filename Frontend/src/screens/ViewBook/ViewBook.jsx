import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pdfjs } from "react-pdf";
import PdfViewer from "../../components/PDFViewer/PDFViewer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SingleBook = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate(); 

  const id = useParams()

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bookDetails/${id}`);
    } catch (error) {
    }
  };

  return (
    <div className='mt-20 px-4 lg:px-24'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          {/* <img src={imageURL} alt={bookTitle} className='h-auto max-h-96 md:max-h-full rounded-lg shadow-lg' /> */}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-2">{bookTitle}</h2>
          <p className="text-lg text-gray-700 mb-4"><strong>Author:</strong> {authorName}</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Genre:</strong> {category}</p>
          <p className="text-lg text-gray-700 mb-4">{bookDescription}</p> */}
          <div className='my-10'>
            <button
              type="button"
              // onClick={()=>downloadPDF(bookPDF)}
              className='bg-blue-700 text-white font-semibold px-5 mx-2 py-2 rounded hover:bg-black transition duration-300'>
                Download PDF
            </button>
            <button
              type="button"
              onClick={()=>displayPDF()}
              className='bg-blue-700 text-white font-semibold px-5 mx-2 py-2 rounded hover:bg-black transition duration-300'>
                Read Book
            </button>
          </div>
        </div>
      </div>
      <div>
        <PdfViewer pdfFile={pdfFile}/>
      </div>
    </div>
  );
};

export default SingleBook;
