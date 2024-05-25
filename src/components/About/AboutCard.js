import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Всем привет, я <span className="purple">Данаш Адия </span>
            из <span className="purple"> Алматы, Казахстан.</span>
            <br />
            Я студент третьего курса университета <span className="purple"> Narxoz </span>.
            <br/>
            Я учусь по специальности <span className="purple"> "Digital management & design". </span>
            Будущий дизайнер и разработчик создания
            пользовательских веб-сайтов с использованием ReactJS, JavaScript, HTML5, CSS3, nodejs.
            В данное время изучаю 3D и 2D анимации, дизайн и визуализацияю. Также увлекаюсь созданием UX/UI дизайнов для разных веб-сайтов.
            С помощью таких инструментов, как After Effects и Figma рождаются креативные дизайны и новые персонажи.
            <br />
            Помимо программирования и учебы, есть еще несколько занятий, которыми я люблю заниматься!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Играть в игры
            </li>
            <li className="about-activity">
              <ImPointRight /> Слушать музыку
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествие
            </li>
            <li className="about-activity">
              <ImPointRight /> Просмотреть фильмов и дорамы
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
