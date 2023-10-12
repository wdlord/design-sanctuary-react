/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Modal.css";

function Modal({ modalObj, setModalObj }) {
  // When used as the onClick, it will not inherit onClick behavior from its parents.
  function cancelBubble(e) {
    e.stopPropagation();
  }

  // Freezes or release the background page.
  useEffect(() => {
    // Freeze.
    if (modalObj.open) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${modalObj.scrollY}px`;
    }
    // Release.
    else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(modalObj.scrollY || "0"));
    }
  }, [modalObj]);

  return (
    <>
      <div
        className={"image-modal" + (modalObj.open ? "" : " modal-closed")}
        style={{ top: modalObj.scrollY }}
        onClick={() => {
          setModalObj((prev) => ({ ...prev, open: false }));
        }}
      >
        <figure className="modal-content">
          <button>X</button>
          <img src={modalObj.modalImage} onClick={cancelBubble} />
          <figcaption onClick={cancelBubble}>
            {modalObj.modalCaption}
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default Modal;
