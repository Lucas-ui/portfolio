import "../assets/scss/header.scss";
import Pin from "./Pin";
import React, { useState } from "react";

interface LogoProps {
  className: string;
  left: string;
  top: string;
}

interface PinProps {
  title: string;
  content: string;
  className: string;
}

function Header() {
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHoveredLogoIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredLogoIndex(null);
  };

  const classNamePin = "pinContent";

  const logos: LogoProps[] = [
    { className: "pin1", left: "10%", top: "150px" },
    { className: "pin2", left: "80%", top: "50px" },
    { className: "pin3", left: "20%", top: "750px" },
    { className: "pin4", left: "75%", top: "800px" },
  ];

  const pins: PinProps[] = [
    {
      className: `formations ${classNamePin}`,
      title: "Formations",
      content:
        "Lorem caca dolor sit amet consectetur adipisicing elit. Unde incidunt aliquam recusandae? Maxime, commodi eos nostrum cum dolorum alias aliquam accusamus voluptates facilis vero magni culpa explicabo, perferendis sequi. Aliquid!",
    },
    {
      className: `competences ${classNamePin}`,
      title: "Compétences",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt aliquam recusandae? Maxime, commodi eos nostrum cum dolorum alias aliquam accusamus voluptates facilis vero magni culpa explicabo, perferendis sequi. Aliquid!",
    },
    {
      className: `projets ${classNamePin}`,
      title: "Projets",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt aliquam recusandae? Maxime, commodi eos nostrum cum dolorum alias aliquam accusamus voluptates facilis vero magni culpa explicabo, perferendis sequi. Aliquid!",
    },
    {
      className: `contact ${classNamePin}`,
      title: "Contact",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt aliquam recusandae? Maxime, commodi eos nostrum cum dolorum alias aliquam accusamus voluptates facilis vero magni culpa explicabo, perferendis sequi. Aliquid!",
    },
  ];

  return (
    <>
      <header>
        <ul>
          <li>
            <a href="#">Formations</a>
          </li>
          <li>
            <a href="#">Compétences</a>
          </li>
          <li>
            <a href="#">Projets</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <div className="background-content">
          <div className="background-image">
            <img
              src="src/assets/image/background-image.png"
              draggable="false"
            />
          </div>
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`pin-logo ${logo.className}`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              style={{ left: logo.left, top: logo.top }}
            >
              <img
                src="src/assets/image/icon-plus.png"
                alt={`Pin ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="pins-container">
          {pins.map((pin, index) => (
            <Pin
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              className={`${pin.className} ${
                hoveredLogoIndex === index ? "visible" : ""
              }`}
              title={pin.title}
              content={pin.content}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Header;
