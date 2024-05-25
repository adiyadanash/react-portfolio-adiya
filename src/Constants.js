import REGISTRFORM from "./Assets/Projects/registrform.png";
import BOARD from "./Assets/Projects/board.png";
import GALLERY from "./Assets/Projects/gallery.jpg";
import TOILIKE from "./Assets/Projects/toilike.png";
import TRAVEL from "./Assets/Projects/travel.webp";
import MED from "./Assets/Projects/med.jpg";

export const PROJECTS = [
  {
    image: REGISTRFORM,
    name: "Валидация формы регистрации",
    technologyUsed: "ReactJs, Javascript, Redux, GraphQL",
    description: "Разработали форму регистрации пользователя, которая включает поля для ввода имени, электронной почты, пароля и подтверждения пароля. Форма валидирует данные на клиентской стороне перед отправкой их на сервер через мутацию GraphQL. Для управления формой использовали React Hook Form, а для взаимодействия с сервером — Apollo Client.",
    url: "https://github.com/adiyadanash/registrationform-lab11.git",
  },
  {
    image: BOARD,
    name: "Bulletin Board",
    technologyUsed: "React, Context API, Redux, PWA",
    description: "Создала React-приложение для интерактивной доски объявлений, где пользователи могут добавлять, просматривать и удалять объявления. Применила изученные стратегии тестирования и оптимизации производительности.",
    url: "https://github.com/adiyadanash/8tapsyrma-react.git",
  },
  {
    image: GALLERY,
    name: "Оптимизированная галерея изображений на React",
    technologyUsed: "React, Javascript, Redux",
    description: "Разработала галерею изображений, используя React, которая должна отображать список изображений, полученных с публичного API (например, Unsplash или любое другое API, предоставляющее доступ к изображениям). ",
    url: "https://github.com/adiyadanash/image-gallery-app.git",
  },
  {
    image: TOILIKE,
    name: "Toilike",
    technologyUsed: "HTML, CSS, Javascript",
    description: "Этот проект является вспомогательным инструментом при планировании свадьбы или другой годовщины. То есть сайт для быстрой и удобной организации мероприятий, необходимых для организации свадьбы, оформления, декорирующих студий и фотостудий и других функционалов.",
    url: "https://github.com/adiyadanash/toilike.git",
  },
  {
    image: TRAVEL,
    name: "Land Travel",
    technologyUsed: "Python Django framework, Bootstrap",
    description: "Мы стремимся создавать длительные впечатления через настоящие отношения, помогая нашим путешественникам найти незабываемые каникулы. Мы продаем эмоции. Эмоции в вашем путешествии. Поэтому, работая с вами, мы предоставим Вам наиболее полную информацию о вашей поездке. Мы постоянно растем, учимся, учимся и развиваемся. Мы достигаем, совершенствуемся и продвигаемся вперед. Это означает, что мы предоставляем лучшие, лучшие, профессиональные услуги.",
    url: "https://github.com/balnuryertay/django",
  },
  {
    image: MED,
    name: "Mobile Med",
    technologyUsed: "PHP Laravel framework, Bootstrap",
    description: "Этот проект был разработан с целью облегчения связи медицинского учреждения с населением. Чтобы внести свой вклад в развитие цифровых технологий в Казахстане, мы создали сайт, который будет удобен для такого населения на любых платформах.",
    url: "https://github.com/dariyaamangeldi/medical-free-lite",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Redux", initialRating: 2 },
  { name: "Nodejs", initialRating: 4 },
  { name: "Html", initialRating: 5 },
  { name: "CSS", initialRating: 3 },
  { name: "3D modeling", initialRating: 3 },
  { name: "2D design", initialRating: 4 },
  { name: "UX/UI design", initialRating: 4 },
  { name: "PHP Laravel", initialRating: 3 },
  { name: "Python Django", initialRating: 3 },
  { name: "Marketing", initialRating: 5 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Linux", "3Ds MAX", "Adobe After Effects", "Figma", "Adobe Illustrator","PyCharm" ]
