import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Логотип" />
          </Col>
          <Col sm={6} className="text-center sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/talovikov-egor/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://vk.com/egtalovikov">
                <img src={navIcon2} alt="VK" />
              </a>
              <a href="https://github.com/egtalovikov">
                <img src={navIcon3} alt="GitHub" />
              </a>
            </div>
            <p>Copyright 2022. Егор Таловиков</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
