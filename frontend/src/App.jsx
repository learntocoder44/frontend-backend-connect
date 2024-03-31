import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log("error occured ", err);
      });
  }, []);

  return (
    <div>
      <h1>this is a vite app</h1>

      <h1>{jokes.length}</h1>

      {jokes.map((joke) => (
        <div>
          <h4>{joke.setup}</h4>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
