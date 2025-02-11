import React, {useState} from "react";
function App(){

  {/* const todo = ["kjkjhgfd","oiuytrew"]; */}
  const [a,b] = useState("");
  const [c,d] = useState([]);

  return(
    <>
    
    <input value={a} placeholder="Enter Task..." onChange={(e) => {
      b(e.target.value);
    }} />
    <button onClick={() => {
      d([...c, a]);
      b("");
    }}>Add</button>
    <ul>
      {c.map((i, index) => (
        <li key={index}>{i}
        <div>
        <button onClick={() => {
          b(i);
          d(c.filter((_, inx) => inx !== index));
        }}>Edit</button>
        <button onClick={() => {
          d(c.filter((_, inx) => inx !== index));
        }}>Delete</button>  
        </div></li>
      ))}
    </ul>
    </>
  )
}
export default App;