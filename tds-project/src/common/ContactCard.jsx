import "./ContactCards.css";

// eslint-disable-next-line react/prop-types
function ContactCard({ img, title, children }) {
  return (
    <>
      <div className="contact-card">
        <div className="icon-heading">
          <img src={img} alt="" />
          <h2>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default ContactCard;
