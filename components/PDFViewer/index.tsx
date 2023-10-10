import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import resume from '../../public/document.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     // 'pdfjs-dist/build/pdf.worker.min.js',
//     'pdfjs-dist/legacy/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const options = {
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

const handleOnloadFile = (e: any) => {
    console.log(e, '------>>')
}

const PDFViewer = () => (
    <Document  file={resume} onLoad={handleOnloadFile}>
        <Page />
    </Document>
)

export default PDFViewer