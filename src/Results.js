import React from "react";
import Pet from './Pet';

//stateless functional component
const Results = ({pets}) => {
  return (
    <div className="search">
      {pets.length === 0 ? 
        (<h1>Pets not found</h1>) : (
          pets.map(pet => (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />
          ))
        )
      }
    </div>
  )
}

export default Results;