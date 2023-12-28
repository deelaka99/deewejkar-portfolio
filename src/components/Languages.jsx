import React, { useEffect, useState } from "react";
import HTML from "../assets/langauges/html.png";
import CSS from "../assets/langauges/css.png";
import JS from "../assets/langauges/js.png";
import PHP from "../assets/langauges/php.png";
import BS from "../assets/langauges/bootstrap.png";
import TWCSS from "../assets/langauges/tailwind.png";
import RJS from "../assets/langauges/reactjs.png";
import Laraval from "../assets/langauges/laraval.png";
import Node from "../assets/langauges/nodejs.png";
import MSQL from "../assets/langauges/mysql.png";
import Mongo from "../assets/langauges/mongodb.png";
import Java from "../assets/langauges/java.png";
import Python from "../assets/langauges/bootstrap.png";
import Csharp from "../assets/langauges/c sharp.png";
import C from "../assets/langauges/c.png";
import Android from "../assets/langauges/android.png";
import RN from "../assets/langauges/rn.png";
import Figma from "../assets/langauges/figma.png";
import Firebase from "../assets/langauges/firebase.png";
import "../styles/Languages.css";

function Languages() {
  const imageData = [
    {
      ImageNo: "1",
      ImageName: "HTML",
      ImageSrc: HTML,
    },
    {
      ImageNo: "2",
      ImageName: "CSS",
      ImageSrc: CSS,
    },
    {
      ImageNo: "3",
      ImageName: "JavaScript",
      ImageSrc: JS,
    },
    {
      ImageNo: "4",
      ImageName: "PHP",
      ImageSrc: PHP,
    },
    {
      ImageNo: "5",
      ImageName: "Bootstrap",
      ImageSrc: BS,
    },
    {
      ImageNo: "6",
      ImageName: "TailwindCSS",
      ImageSrc: TWCSS,
    },
    {
      ImageNo: "7",
      ImageName: "ReactJS",
      ImageSrc: RJS,
    },
    {
      ImageNo: "8",
      ImageName: "Laravel",
      ImageSrc: Laraval,
    },
    {
      ImageNo: "9",
      ImageName: "NodeJS",
      ImageSrc: Node,
    },
    {
      ImageNo: "10",
      ImageName: "MySQL",
      ImageSrc: MSQL,
    },
    {
      ImageNo: "11",
      ImageName: "MongoDB",
      ImageSrc: Mongo,
    },
    {
      ImageNo: "12",
      ImageName: "Java",
      ImageSrc: Java,
    },
    {
      ImageNo: "13",
      ImageName: "Python",
      ImageSrc: Python,
    },
    {
      ImageNo: "14",
      ImageName: "C#",
      ImageSrc: Csharp,
    },
    {
      ImageNo: "15",
      ImageName: "C",
      ImageSrc: C,
    },
    {
      ImageNo: "16",
      ImageName: "Android Native (Java)",
      ImageSrc: Android,
    },
    {
      ImageNo: "17",
      ImageName: "ReactNative",
      ImageSrc: RN,
    },
    {
      ImageNo: "18",
      ImageName: "Figma",
      ImageSrc: Figma,
    },
    {
      ImageNo: "19",
      ImageName: "Firebase",
      ImageSrc: Firebase,
    },
  ];
  // Duplicate the imageData array to create an infinite loop
  const extendedImageData = [...imageData, ...imageData];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Logic to transition to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 3000); // Change 3000 to the desired interval in milliseconds

    return () => clearInterval(interval);
  }, [currentImageIndex, imageData.length]);

  return (
    <div>
      <h4 style={{textAlign:'center'}}>Languages, Frameworks & Tools</h4>
      <div className="slideshow-container">
        <div
          className="slide-container"
          style={{
            transform: `translateX(${-currentImageIndex * 110}px)`, // Adjust the value based on image width and margin
          }}
        >
          {extendedImageData.map((language, index) => (
            <div
              key={index}
              className={`${index === currentImageIndex ? "active" : ""}`}
            >
              <div className="slide">
                <img
                  className="languageImage"
                  src={language.ImageSrc}
                  alt={language.ImageName}
                />
              </div>
              <p style={{ textAlign: "center", fontSize: "12px",fontWeight:'bold' }}>
                {language.ImageName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Languages;
