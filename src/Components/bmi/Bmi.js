import { useState } from "react";
import './Bmi.css';
const Bmi=()=>{
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [Bmi,setBmi]=useState(null);
    const [category,setCategory]=useState('');

    const calculateBMI=()=>{
        const Wvalue=parseFloat(weight);
        const Hvalue=parseFloat(height)/100;
        
        if(Wvalue > 0 && Hvalue > 0){
            const BmiValue=Wvalue/(Hvalue*Hvalue);
            setBmi(BmiValue.toFixed(2));
            categorizeBMI(BmiValue);
        }else{
            alert('Please enter valid values');
        }
    };
    const categorizeBMI=(BmiValue)=>{
        let categoryValue = '';
        if(BmiValue<18.5){
            categoryValue='Under weight'
        }else if(BmiValue<25){
            categoryValue = 'Normal';
        }else if(BmiValue<30){
            categoryValue = 'Overweight';
        }else{
            categoryValue = 'Obese';
        }
        setCategory(categoryValue);
    };
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
        };
        const handleWeightChange = (e) => {
        setWeight(e.target.value);
        };
    return(
<div className="calculator">
    <h1>BMI calculator</h1>
    <label htmlFor="height"> Height (cm):</label>
    <input id="height" type="number" placeholder="160cm" required value={height} onChange={handleHeightChange}/>
    <label htmlFor="weight"> Weight (kg):</label>
    <input id="weight" type="number" placeholder="60Kg" required  value={weight} onChange={handleWeightChange}/>

    <button onClick={calculateBMI}>Calculate BMI</button>

    {Bmi && (
        <div id="result">
            Your BMI is {Bmi}.You are in the {category} category.
        </div>
        )}
    </div>
    );
};
export default Bmi;
