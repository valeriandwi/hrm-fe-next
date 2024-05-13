import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Resume: React.FC = () => {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onNextPage = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const onPrevPage = () => {
    setPageNumber((prevState) => prevState - 1);
  };

  return (
    <div>
      <div className="flex justify-end space-x-2">
        {pageNumber !== 1 && (
          <Button icon={<LeftOutlined onClick={onPrevPage} />} />
        )}
        {pageNumber !== numPages && (
          <Button icon={<RightOutlined onClick={onNextPage} />} />
        )}
      </div>
      <div className="flex justify-center">
        <Document
          className={""}
          file={"../Personal Project.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          <Page pageNumber={pageNumber} height={900} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
