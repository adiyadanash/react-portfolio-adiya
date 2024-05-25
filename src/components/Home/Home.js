import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/adiya.jpeg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{paddingBottom: 15}} className="heading">
                Всем Привет!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Я
                <strong className="main-name"> Данаш Адия</strong>
              </h1>

              <p className="heading-description blockquote">
                Я увлечена использованием Javascript и библиотек анимации
                для создания потрясающих пользовательских впечатлений. Я студент третьего курса по направлению
                Информационные Технологии.
                В настоящее время я отлично успеваю в учебе и прилагаю максимальные усилия,
                чтобы набраться опыта в создании различных веб-сайтов и дизайнов.
                В будущем я хочу стать дизайнером-разработчиком или UX/UI-дизайнером.
              </p>

              <div className="heading-type">
                <TypeWriter/>
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar"/>
              <p style={{marginLeft:125}}>
                    Team lead уникального союза "DABL" || "W" </p>
            </Col>

          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Связаться</h1>
              <p>
                {" "}
                Независимо от того, хотите ли вы связаться с нами или обсудить
                сотрудничество в рамках проекта.
                <br />
                <strong>Не стесняйтесь обращаться ко мне</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
