import { useState, useEffect } from 'react';
import style from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import logo from './assets/img/logo.png'
import Filtros from "./components/Filtros/Filtros";
import Personajes from "./components/Personajes/Personajes";
import Paginacion from './components/Paginacion/Paginacion';
import Busqueda from './components/Busqueda/Busqueda';


function App() {
  

  let [pageNumber,setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  console.log(pageNumber);
  let [fetchedData, setFetchedData] = useState([]);
  let {info, results} = fetchedData


  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
 
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setFetchedData(data);
    })();
    
  },[api])

  return (
    
    
    <div className="App text-center my-4">
      
      <img 
src={logo} alt="" width="400"/>

   <Busqueda setPageNumber={setPageNumber} setSearch={setSearch} />

   <div className={style.container}> </div>
    <div className="row">
  
    <Filtros
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />

    <div className="col-lg-8 col-12">
      <div className="row">
        <Personajes results={results}/>
      </div>
    </div>
    </div>
    <Paginacion info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    <div className={style.footer}>
    <footer>
      Desarrollado por Alejandro Reyes para BeMaster
    </footer>
    </div>
    
    </div>
    
 
  );
  
}


export default App;
