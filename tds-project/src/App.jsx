import "./App.css";
import MainLayout from "./common/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <h1>Welcome to The Design Sanctuary</h1>
        <p>
          The Design Sanctuary provides design consulting services in the areas
          of Mechanical Machine Design, Drafting, Computer Modeling and
          Photo-Realistic Rendering to manufacturing companies from small
          entrepreneurs to large corporations.
        </p>
        <div id="p1-break"></div>

        <h2>Mechanical Design</h2>

        <div className="col-split">
          <p>
            With over 20 years experience in machine design, The Design
            Sanctuary can provide mechanical design services in all phases of
            machine development, from concept right the way through to machine
            production. With extensive experience in a broad range of industries
            from the electronic component industry, dealing with high speed
            electrical testing and vision inspection, to component assembly for
            the medical industry, The Design Sanctuary can provide unique
            solutions to wide range of projects. Using the latest 3D design
            tools The Design Sanctuary can provide fast and efficient mechanical
            design services with complete drawing and documentation packages.
          </p>

          <figure id="col-split-figure">
            <img src="/src/assets/solidworks-assembly.jpg" alt="" />
            <figcaption>Exploded SolidWorks Assembly</figcaption>
          </figure>
        </div>

        <h2>Computer Modeling and Photorealistic Rendering</h2>
        <p>
          A simple yet immensely effective method to improve marketing and
          communication is with a 3D photo-realistic images of a machine or
          product. Using the latest 3D tools The Design Sanctuary is able to
          produce eye-catching views of a customer&apos;s products which can be
          used in presentations or sales and marketing literature. This could be
          a completely new conceptual design or even an existing design which is
          not yet finished. Our extensive machine design experience is able to
          realistically fill in the blanks.
        </p>
      </MainLayout>
    </>
  );
}

export default App;
