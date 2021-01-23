import React from 'react';
import pet from '@frontendmasters/pet';

// stateless functional component

// const Details = (props) => {
//   // neat trick to see everything coming in through the router
//   return <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
// }


// class component
// can't use hooks with classes

class Details extends React.Component {
  // just a javascript class that inherits from the class React Component
  // arguments come through immutable props

  constructor(props){
    super(props); //just do this

    this.state = { //sets initial state
      loading: true
    }
  }

  componentDidMount(){
    pet.animal(this.props.id).then(({animal}) => {
      this.setState({ //updates component state through shallow merge
        name: animal.name,
        animal: animal.type,
        location: ` ${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      }, console.error)
    })
  }
  render(){
    if(this.state.loading){
      return <h1>loading...</h1>
    }
    
    const {animal, breed, location, description, name} =
    this.state; 

    return(
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}


export default Details;