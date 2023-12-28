import React, { useEffect, useState } from "react";
import Sql from "../assets/certificates/sql.png";
import Spacehack from "../assets/certificates/spacehack.png";
import ReactCerti from "../assets/certificates/react.png";
import Python from "../assets/certificates/python.png";
import Mongo from "../assets/certificates/mongodb.png";
import JS from "../assets/certificates/js.png";
import Java from "../assets/certificates/java.png";
import Illusio from "../assets/certificates/illusio.png";
import Design from "../assets/certificates/design.png";
import CS from "../assets/certificates/cs.png";
import "../styles/Certification.css";

function Certifications() {
  const certificateData = [
    {
      id: "1",
      src: Sql,
    },
    {
      id: "2",
      src: Spacehack,
    },
    {
      id: "3",
      src: ReactCerti,
    },
    {
      id: "4",
      src: Python,
    },
    {
      id: "5",
      src: Mongo,
    },
    {
      id: "6",
      src: JS,
    },
    {
      id: "7",
      src: Java,
    },
    {
      id: "8",
      src: CS,
    },
    {
      id: "9",
      src: Illusio,
    },
    {
      id: "10",
      src: Design,
    },
  ];

  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next certificate every 3 seconds
    const interval = setInterval(() => {
      setCurrentCertificateIndex(
        (prevIndex) => (prevIndex + 1) % certificateData.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [certificateData.length]);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="left-side">
          <p>
            <span style={{ fontStyle: "italic" }}>
              "A person who never made a mistake never tried anything new."
            </span>
            <br />
            <span style={{ fontWeight: "500", fontSize: "medium" }}>
              - Albert Einstein -
            </span>
          </p>
        </div>
        <div className="right-side">
          <div className="certificate">
            <h1>Certificates</h1>
            {certificateData.map((certificate, index) =>
              index === currentCertificateIndex ? (
                <img
                  className={index === currentCertificateIndex ? "active" : ""}
                  key={index}
                  src={certificate.src}
                  alt="certificate"
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className="subContainer1">
        <div className="top-side">
          <div className="certificate">
            <h1>Certificates</h1>
            {certificateData.map((certificate, index) =>
              index === currentCertificateIndex ? (
                <img
                  className={index === currentCertificateIndex ? "active" : ""}
                  key={index}
                  src={certificate.src}
                  alt="certificate"
                />
              ) : null
            )}
          </div>
        </div>
        <div className="bottom-side">
          <p>
            <span style={{ fontStyle: "italic" }}>
              "A person who never made a mistake never tried anything new."
            </span>
            <br />
            <span style={{ fontWeight: "500", fontSize: "medium" }}>
              - Albert Einstein -
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
