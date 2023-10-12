import "./ProjectPreviews.css";
import MainLayout from "/src/common/MainLayout";
import ProjectCard from "../common/ProjectCard";
import Modal from "../common/Modal";
import { useState } from "react";

function ModelsAndRendersPage() {
  const [modalObj, setModalObj] = useState({
    modalImage: "",
    modalCaption: "",
    scrollY: 0,
    open: false,
  });

  return (
    <>
      <MainLayout>
        <Modal modalObj={modalObj} setModalObj={setModalObj} />

        <div className="overview">
          <h1>Modeling and Photorealistic Images</h1>
          <p className="project-overview">
            Examples of 3D modeling and photo-realistic images.
          </p>
        </div>

        <div className="project-grid">
          {/* Row 1 */}
          <ProjectCard
            image="/src/assets/models-and-renders-images/assembly_machine2.jpg"
            caption="Proposal concept assembly machine modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/assembly_machine.jpg"
            caption="Proposal concept assembly machine modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/caliper.jpg"
            caption="Modeling and rendering exercise of a Digital Vernier Caliper modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          {/* Row 2 */}
          <ProjectCard
            image="/src/assets/models-and-renders-images/Plate_Loader.jpg"
            caption="Concept proposal of a Plate Loading Capacitor Tester modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/cart.jpg"
            caption="Modeling and rendering exercise of a cart modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/casio.jpg"
            caption="Modeling and rendering exercise of a solar powered calculator modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          {/* Row 3 */}
          <ProjectCard
            image="/src/assets/models-and-renders-images/Nuts_n_Bolts.jpg"
            caption="Modeling and rendering exercise of a Socket Headed Cap Screws modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/glass_mugs.jpg"
            caption="Modeling and rendering exercise of a glass mugs modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/models-and-renders-images/phone.jpg"
            caption="Modeling and rendering exercise of a cordless phone modeled and rendered in Lightwave©"
            setModalObj={setModalObj}
          />
        </div>
      </MainLayout>
    </>
  );
}

export default ModelsAndRendersPage;
