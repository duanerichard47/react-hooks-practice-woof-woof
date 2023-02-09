import React from 'react'

function DogBar({dogs}){
    
    const dogMapped= dogs.map(dog=>{
        return(<span onClick>{dog.name}</span>) })
      console.log(dogMapped)
      console.log(dogs)
      return(
        <div id = 'dog-bar'>
            {dogMapped}
        </div>
      );

}
export default DogBar