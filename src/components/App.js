import React, {useEffect, useState} from "react";
import DogBar from "./DogBar"


function App() {
const [dogs, setDogs] = useState([])
const[isGoodDog,setIsGoodDog] = useState(true)
const[goodDog,setGoodDog] = useState(true)

useEffect(()=>
{
  fetch('http://localhost:3001/pups')
  .then(response=>response.json())
  .then(data=>setDogs(data))
},[])

// function handleClick(event,{dogs}){
//   const[isGoodDog,setIsGoodDog] = useState(true)
//   return
//   (image = <image src ={dogs.image}/>
//   const name =<h2>{dogs.name}</h2>
//   button = <button>{isGoodDog ? Good Dog! : Bad Dog!}</button>)
// }






// function handleFilter(dogs){
//   setGoodDog(!goodDog)
//   goodDog! dog.isGoodDog(toLowerCase()).includes('true').toLowerCase() && 'Filter good dogs: ON': "Filter good dogs: OFF"
// }


return(
    <div className = 'App'>

      <DogBar dogs ={dogs}/>
    </div>
  );
}

export default App;
