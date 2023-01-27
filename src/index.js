import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"


function MyForm(){
  const [inputs, setInput] = useState ({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput (values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault ();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Find your TrueLove</h1>
      <p>Sign up to find your match</p>
      <label>
        <input type="text" name="firstname" placeholder='Enter your first name:' value={inputs.firstname || ""} onChange={handleChange} />
      </label>
      <label>
        <input type="text" placeholder='Enter your last name:' name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
      </label>
      <label>
        <input type="email" placeholder='Enter your email:' name="email" value={inputs.email || ""} onChange={handleChange} />
      </label>
      <label>
        <input type="number" placeholder='Enter your age:' name="age" value={inputs.age || ""} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<MyForm />);

