import Wrapper from "../assets/wrappers/Footer";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section id="contact">
        <h1 id="footer-quote">
          Collaboration is the key to success, let's make great things happen
          together!
        </h1>
        <div class="social-icons">
          <a
            href="https://github.com/safarasd-os?tab=repositories"
            target="_blank"
            id="profile-link"
            class="social-icon"
          >
            <FaGithub />
          </a>
          <a href="mailto:tilen.lorenci12@gmail.com" class="social-icon">
            <MdEmail />
          </a>
        </div>
        <div id="footer">
          <h4 id="footer-text">
            **This is just a fake portfolio. contact details given are not real.
          </h4>
        </div>
      </section>
    </Wrapper>
  );
};
export default Footer;
