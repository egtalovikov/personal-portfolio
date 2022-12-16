import { Col, Container, Tab,  Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const studyProjects = [
    {
      title: "Место",
      description: "Разработка",
      imgUrl: projImg1,
    },
    {
      title: "Куда я поеду",
      description: "Разработка",
      imgUrl: projImg2,
    },
    {
      title: "Путешествия по России",
      description: "Разработка",
      imgUrl: projImg3,
    },
    {
      title: "Научиться учиться",
      description: "Разработка",
      imgUrl: projImg4,
    },
  ];

  const realProjects = [
    {
      title: 'СПИД.ЦЕНТР',
      description: "Разработка и ревью",
      imgUrl: projImg5,
    },
  ]

  const hackProjects = [
    {
      title: 'УВалеры',
      description: "Разработка и ревью",
      imgUrl: projImg6,
    },
    {
      title: 'Лендинг для HR Яндекс.Практикума',
      description: "Разработка и ревью",
      imgUrl: projImg7,
    },
    {
      title: 'Любимовка',
      description: "Разработка и ревью",
      imgUrl: projImg8,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible }) =>
              <div
                className={isVisible ? "animate__animated animate__bounce" : ""}
              >
            <h2>Проекты</h2>
            <p>
              В этом разделе вы можете ознакомиться с моими одиночными и командными проектами.
            </p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Учебные проекты</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Реальные проекты</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Хакатоны
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            studyProjects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                        {
                            realProjects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                        {
                            hackProjects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
