import getWords from "../backend/wordeditor.js";
import './App.css';

function App() {
  let words = getWords();
  let myString = "";
  for (let word of getWords) {
    myString += word + "<br>";
  }
  return (
    <div className="App">
        <p>
          {myString}
        </p>
    </div>
  );
}

export default App;
