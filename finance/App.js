import { useState , useEffect } from 'react'
import './App.css';
import {datas} from './Data'

function App() {
  const [appState, setAppState] = useState();
 
  
  useEffect(() => {
  //  const apiUrl = `https://api.github.com/users/afhammk/repos`;
  const apiUrl = `https://api.github.com/repos/afhammk/components/contents`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState(repos);
      });
  }, []);
  
  
 console.log("datas",appState)
 const s=appState

  return (
    <div className="App">
     {/* {s && s.map((reps)=>(
       <div>
       <table style={{border:"1px solid black"}}>
         <trow >
           <th  >
             {reps.name}
           </th>
           <th>
             {reps.description}
           </th>
           <th>
             {reps.url}
           </th>
         </trow>
       </table>
       </div>
     ))} */}
     <h1>hello</h1>
    </div>
  );
}

export default App;
