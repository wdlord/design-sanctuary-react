/* eslint-disable react/prop-types */
function ProjectCard({ image, caption, setModalObj }) {
  return (
    <>
      <figure>
        <div className="project-image-container">
          <div
            className="hover-container"
            onClick={() => {
              setModalObj({
                modalImage: image,
                modalCaption: caption,
                scrollY: window.scrollY,
                open: true,
              });
            }}
          >
            <img src={image} alt="" className="project-image" />
            <img
              src="/src/assets/icons/zoom_in.svg"
              alt=""
              className="zoom-icon"
            />
          </div>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </>
  );
}

export default ProjectCard;
