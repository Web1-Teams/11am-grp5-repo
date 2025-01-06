import { Link } from 'react-router-dom';
import './Cardn.css';

const sportPics = [
  {
    img: "./assets/images/imgs/basketball.jpg",
    name: "Basketball",
    link: "/BasketBall"
  },
  {
    img: "./assets/images/imgs/football.jpg",
    name: "Football",
    link: "https://www.example.com/football"
  },
  {
    img: "./assets/images/imgs/handball (2).jpg",
    name: "Handball",
    link: "https://www.example.com/handball"
  },
  {
    img: "./assets/images/imgs/swimming.jpg",
    name: "Swimming",
    link: "https://www.example.com/swimming"
  },
  {
    img: "./assets/images/imgs/tennis.jpg",
    name: "Tennis",
    link: "https://www.example.com/tennis"
  },
  {
    img: "./assets/images/imgs/volleyball.jpg",
    name: "Volleyball",
    link: "https://www.example.com/volleyball"
  }
];

const Cardn = () => {
  return (
    <div className="cards">
      {sportPics.map((sport, index) => (
        <div className="sport-card" key={index}>
          <Link
            to={sport.link}
            target={sport.link.startsWith("http") ? "_blank" : undefined}
            rel={sport.link.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <img src={sport.img} alt={sport.name} />
            <div className="overlay">
              <span className="go-to-know">{sport.name}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cardn;
