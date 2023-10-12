import "./ContactPage.css";
import MainLayout from "/src/common/MainLayout";
import ContactCard from "../common/ContactCard";

function ContactPage() {
  return (
    <>
      <MainLayout>
        <div className="overview">
          <h1>Contact</h1>
          <p>Available between the hours of 9:00am-4:00pm PST.</p>
        </div>

        <div className="contact-row1">
          {/* Phone */}
          <ContactCard title="Phone" img="/src/assets/icons/phone.svg">
            <a href="tel:7604891681">
              <p>Office: 760-489-1681</p>
            </a>
            <a href="tel:7602153927">
              <p>Cell: 760-215-3927</p>
            </a>
          </ContactCard>

          {/* Address */}
          <ContactCard title="Address" img="/src/assets/icons/globe.svg">
            <a
              href="https://www.google.com/maps/place/The+Design+Sanctuary/@33.1587623,-117.0911645,15z/data=!4m6!3m5!1s0x80db8cb225d22af9:0xce4c4b5c58169052!8m2!3d33.1591899!4d-117.0657028!16s%2Fg%2F11c58ncqwl?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <p>1942 Buckskin Glen.</p>
              <p>Escondido, CA 92027</p>
            </a>
          </ContactCard>
        </div>

        <div className="contact-row2">
          {/* Email */}
          <ContactCard title="Email" img="/src/assets/icons/email.svg">
            <a href="mailto:mhawkes@thedesignsanctuary.com">
              <p id="contact-email">mhawkes@&#8203;thedesignsanctuary.com</p>
            </a>
          </ContactCard>
        </div>
      </MainLayout>
    </>
  );
}

export default ContactPage;
