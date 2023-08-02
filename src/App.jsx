import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import {useState, useEffect} from "react"

// const Title = styled.h1`
//   font-size: 3em;
//   color: red;
// ` 

function App() {


  const apiKey = '5ffcfe81'
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const movie = await response.json(); // often typed as res.json
      // console.log(data)
      setMovie(movie)

    } catch (error) {
      console.log(error)
    }

  }

  // getMovie('shrek')
  
  useEffect(()=> {
    getMovie('batman')
  })

  return (
    <>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie ={movie}/>
      
       {/* Form movieSearch={getMovie} */}

     
    </>
  );
}

export default App;
