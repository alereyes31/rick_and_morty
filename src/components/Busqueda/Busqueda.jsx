import style from "./Busqueda.module.scss"

const Busqueda = ({setSearch,setPageNumber}) => {
  return <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-6 my-3">
      <input 
      onChange={e=>{
        setPageNumber(1);
          setSearch(e.target.value);
      }}
      placeholder="Buscar personaje" type="text" className={style.input}/>
      <button onClick={e=>{e.preventDefault()}} className={`${style.btn} btn btn-primary fs-4`}>Buscar</button>
  </form>
}
export default Busqueda