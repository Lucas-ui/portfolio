import React, { useEffect } from "react";
function Formations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("onScroll");
        } else {
          entry.target.classList.remove("onScroll");
        }
      });
    });

    document.querySelectorAll(".visible-content").forEach((elem) => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section id="container-formations">
        <div className="visible-content">
          <div className="formations-content">
            <p>Formations</p>
            <p>2022 - 2024</p>
            <p>BTS SIO option SLAM</p>
            <p>Godefroy de Bouilllon, Clermont-Ferrand</p>
            <p>2020 - 2022</p>
            <p>DUT GEA</p>
            <p>IUT Jean Monnet, Saint-Etienne</p>
            <p>2019 - 2020</p>
            <p>Lycée l'Astrée, Boën-sur-Lignon</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formations;
