import { useEffect } from "react";

interface Props {
  onContactMouseOver: () => void;
  onFormationsMouseOver: () => void;
  onProjetsMouseOver: () => void;
  onCompetencesMouseOver: () => void;
}

function Home({
  onContactMouseOver,
  onFormationsMouseOver,
  onProjetsMouseOver,
  onCompetencesMouseOver,
}: Props) {
  return (
    <>
      <div className="background-image">
        <div className="background">
          <img
            src="src/assets/image/background-image.png"
            draggable="false"
          ></img>
        </div>
        <div className="contact-pins">
          <img
            onMouseOver={onContactMouseOver}
            src="src/assets/image/icon-plus.png"
            draggable="false"
            alt="Contact"
          ></img>
        </div>
        <div className="formations-pins">
          <img
            onMouseOver={onFormationsMouseOver}
            src="src/assets/image/icon-plus.png"
            draggable="false"
            alt="Formations"
          ></img>
        </div>
        <div className="competences-pins">
          <img
            onMouseOver={onCompetencesMouseOver}
            src="src/assets/image/icon-plus.png"
            draggable="false"
            alt="Competences"
          ></img>
        </div>
        <div className="projets-pins">
          <img
            onMouseOver={onProjetsMouseOver}
            src="src/assets/image/icon-plus.png"
            draggable="false"
            alt="Projets"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Home;
