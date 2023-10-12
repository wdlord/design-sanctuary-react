import "./ProjectPreviews.css";
import MainLayout from "/src/common/MainLayout";
import ProjectCard from "../common/ProjectCard";
import Modal from "../common/Modal";
import { useState } from "react";

function MechanicalDesignPage() {
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
          <h1>Mechanical Design Samples</h1>
          <p className="project-overview">
            Examples of mechanical design projects completed by The Design
            Sanctuary.
          </p>
        </div>

        <div className="project-grid">
          {/* Row 1 */}
          <ProjectCard
            image="/src/assets/mechanical-design-images/syringe_printer.jpg"
            caption="Syringe printer for medical company."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/plate_handler.jpg"
            caption="PLC controlled plate handler used on assembly line."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/stick_sponge.jpg"
            caption="Stick insertion into sponges for medical company."
            setModalObj={setModalObj}
          />

          {/* Row 2 */}
          <ProjectCard
            image="/src/assets/mechanical-design-images/termination.jpg"
            caption="Capacitor termination machine."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/grease_disp.jpg"
            caption="Depositing silicone grease onto a plunger and recepticle for medical instrument company."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/cap_tester.jpg"
            caption="Capacitor testing machine."
            setModalObj={setModalObj}
          />

          {/* Row 3 */}
          <ProjectCard
            image="/src/assets/mechanical-design-images/vision_inspec.jpg"
            caption="Capacitor vision inspection machine."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/cap_tester2.jpg"
            caption="High-speed capacitor testing machine."
            setModalObj={setModalObj}
          />

          <ProjectCard
            image="/src/assets/mechanical-design-images/FLow_Tester_Large.jpg"
            caption="10 station variable pitch flow tester for irrigation tubing."
            setModalObj={setModalObj}
          />
        </div>
      </MainLayout>
    </>
  );
}

export default MechanicalDesignPage;
