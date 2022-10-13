import './App.css';
import { Container, Header } from './components/index';
import {ThemeProvider} from "react-jss";
import {useState} from 'react';
import useFetch from './Hooks/useFetch';
import Loading from './components/Loading';
const theme = {
light: {
    background: "#FFF",
    primary: "#FFF",
    secondary: "#f8f8f8",
    tertiary: "#F64360",
    quaternary: "#B9334A",
    color: "#474747",
    boxShadow: "0 3px 5px ",
    shadow: "#CBCBCB",
    container: {
      fontSize: "1rem",
      margin: "auto",
      marginBottom: "1.5rem",
      padding: "1rem ",
    },
  },
dark: {
    background: "#292C33",
    primary: "#393A3F",
    secondary: "#818491",
    tertiary: "#5B9AF9",
    quaternary: "#3C6BAF",
    color: "#E3E3E3",
    boxShadow: "0 3px 5px ",
    shadow: "#1A1C20",
    container: {
      fontSize: "1rem",
      margin: "auto",
      marginBottom: "1.5rem",
      padding: "1rem ",
    },
  },
};

// cargar el tema, trabajar con API
function App() {

  const {loading, response} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=807");
     let data = []
  if (!loading && response) {
 
      data = response.results.map((item, index)=>{
      const id = (index + 1).toString().padStart(3,0);
      return{
        ...item,
      id,
      img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`,
      fullImg: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
      }
    })
  }

  const [typeTheme, setTypeTheme] = useState("light")
  

  const toogleTheme = () => {
    setTypeTheme(typeTheme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <ThemeProvider theme={{theme:theme[typeTheme],toogleTheme}}>
      <div className="App">
      {loading ? <Loading/> : 
      <> 
      <Header/> 
      <Container items={data}/>
      </>}
    </div>
    </ThemeProvider>
  );
}

export default App;
