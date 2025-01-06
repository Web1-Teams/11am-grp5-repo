//import 
import './nutrients.css'


//function
const nutrientsData = [
    {img: "/imgs/protein.jpg",name: "Proteins"},
    {img: "/imgs/carbo.jpg",name: "Carbohydrates"},
    {img: "/imgs/vitamins.jpg",name: "Vitamins"}
];

const NutrientsCards = () => {
    return (
        <div className="nutrients">
            {nutrientsData.map((nutrient, index) => (
            <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.alt} />
            <div className="overlay">
                <button className="go-to-know" type="button">
                {nutrient.name}
                </button>
            </div>
            </div>
        ))}
        </div>
  );
};

//export
export default NutrientsCards;
