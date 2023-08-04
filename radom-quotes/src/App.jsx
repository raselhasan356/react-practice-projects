import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);

  function getQuote() {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button onClick={getQuote}>Get random quote</button>
      {quote !== null && <p>{quote}</p>}
    </div>
  );
}

export default App;
