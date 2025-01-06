//imports
import './cardn.css'

//function
const sportPics=[
{
  img:"/imgs/basketball.jpg", name:"Basketball"},
  {img:"/imgs/football.jpg", name:"Football"},
  {img:"/imgs/handball (2).jpg",name:"Handball"},
  {img:"/imgs/swimming.jpg",name:"Swimming"},
  {img:"/imgs/tennis.jpg",name:"Tennis"},
  {img:"/imgs/volleyball.jpg",name:"Volleyball"}

];

const Card=()=>{

return(
  <div className="cards">
    {sportPics.map((sport,index) => (
      <div className="sport-card" key={index}>
        <img src={sport.img} alt={sport.name}/>
        <div className="overlay">
            <button className="go-to-know" type="button">
              {sport.name}
            </button>
      </div>
      </div>
    ))}
  </div>
);
};

//export
export default Cardn