import MainLayout from "/src/common/MainLayout";
import "./AttributionPage.css";

function AttributionPage() {
  return (
    <>
      <MainLayout>
        <div className="overview">
          <h1>Copyright Attributions</h1>
          <p className="project-overview">
            Some icons and images are licensed under Creative Commons with
            attribution or similar licenses.
          </p>
        </div>

        <hr id="attr-hr" />

        <ul className="attributions">
          <li>
            Phone, Address, Email, and Hamburger Menu icons by{" "}
            <a
              href="https://www.iconfinder.com/search/icons?family=feather"
              target="_blank"
              rel="noreferrer"
            >
              Feather Icons
            </a>{" "}
            are licensed under{" "}
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC by 4.0
            </a>
            .
          </li>
          <li>
            &quot;Gray Metal Gear Lot&quot; by{" "}
            <a
              href="https://unsplash.com/photos/xRDuEeG1TVI"
              target="_blank"
              rel="noreferrer"
            >
              Jonathan Borba
            </a>{" "}
            is licensed under the{" "}
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash License
            </a>
            .
          </li>
          <li>
            Images used in characterization of Rodin&apos;s &quot;The
            Thinker&quot; are transformative and protected under{" "}
            <a
              href="https://www.copyright.gov/fair-use/#:~:text=Fair%20use%20is%20a%20legal,protected%20works%20in%20certain%20circumstances."
              target="_blank"
              rel="noreferrer"
            >
              Fair Use
            </a>
            .
          </li>
        </ul>
      </MainLayout>
    </>
  );
}

export default AttributionPage;
