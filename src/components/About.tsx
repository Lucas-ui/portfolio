import React, { useEffect, useState } from 'react';
function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('onScroll');
        } else {
          entry.target.classList.remove('onScroll');
        }
      });
    });

    document.querySelectorAll('#container-about').forEach(elem => {
      observer.observe(elem);
    });

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut consequuntur,
              dolorem eius exercitationem fuga fugit minima necessitatibus nulla repudiandae ut voluptates
              voluptatibus! Aspernatur aut corporis distinctio ducimus eos est exercitationem expedita incidunt
              iusto maiores molestiae, nam pariatur, perspiciatis praesentium rem reprehenderit, sapiente similique
              sunt suscipit tenetur. Fuga, libero!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, doloribus earum in labore modi natus
              non perferendis
              quam similique soluta, totam velit vero voluptate. Accusantium doloremque earum quae quibusdam reiciendis?
            </p>
          </div>
          <div className="right-content-about">
            <div className="right-img">
              <img src="src/assets/image/logo-header-v4.png"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
