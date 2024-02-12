import React, { useEffect } from "react";
function About() {
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

    document.querySelectorAll(".title-about, .left-right").forEach((elem) => {
      observer.observe(elem);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section id="container-about">
        <div className="title-about">
          <p>À propos de moi</p>
        </div>
        <div className="left-right">
          <div className="left-content-about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              iusto! Reprehenderit, unde! Quas dolor dolorum ducimus! Deleniti
              ex fugiat quo. Pariatur dicta eaque, quibusdam tempore iste hic
              dolores earum et vero eius dolorem veniam cum, cumque facere
              asperiores quidem sapiente quas expedita! Eum, quidem velit. Error
              voluptates delectus sequi provident soluta nemo veritatis ut fugit
              omnis repudiandae quaerat incidunt, excepturi nulla at facilis
              hic! Tenetur, cupiditate optio vero voluptatum minus aliquid quam
              deserunt accusantium ducimus voluptate explicabo natus dolores
              corporis aspernatur ut quas illo quod dolorem mollitia ullam?
              Perferendis id velit quis? Odio deserunt similique ipsum, quaerat
              eius dicta commodi.
            </p>
          </div>
          <div className="right-content-about"></div>
        </div>
      </section>
    </>
  );
}

export default About;
