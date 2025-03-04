import './App.css';
import React,{useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic
  let calculator_BMI = (e) => {

    e.preventDefault();

    if(weight === 0 || height === 0){
      alert("Please enter a valid weight and height!")
    }else{
      let bmi = (parseFloat(weight) / (parseFloat(height) ** 2)) * 703;
      setBmi(bmi.toFixed(2)); 

      if(bmi < 18.5){
        setMessage("You are Underweight");
      }
      else if(bmi >= 18.5 && bmi < 24.9){
        setMessage("You have Normal weight ");
      }
      else if (bmi >= 25 && bmi <= 29.9){
        setMessage("You are Overweight");
      }
      else{
        setMessage("You are Obese");
      }
    }
      
  }

 // Reload

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
  };  

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calculator_BMI}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height (in<sup>2</sup>)</label>
            <input type="text" placeholder='Enter height value' value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <div className='btn-container'>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;