import styles from './Personajes.module.scss';


const Personajes = ({results}) => {
   
  let display;
  console.log(results)

  if(results){
     display = results.slice(0,12).map((x)=>{
      let {id, name, image, gender, status, species,location} = x
      return( <div key={id} className="col-lg-3 col-md-4 col-12  mb-3 mt-3 position-relative">
        <div className={`${styles.personajes} d-flex flex-column justify-content-center`}>
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          <div style={{padding:"5px"}} className="content">
            <div className="fs-5 fw-bold mb-1">{name}</div>
            <div className=""><span className="fw-bold text-center">Gender: </span> {gender}</div>
            <div className=""><span className="fw-bold text-center">Specie: </span> {species}</div>
            <div className=""><span className="fw-bold text-center">Location: </span> {location.name}</div>
          </div>
          {(()=>{
            if(status === "Dead"){
            return(
              <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
            )
            }
            else if(status ==="Alive"){
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
              )

            }
            else{
              return(
                <div className={`${styles.badge} position-absolute badge bg-dark`}>{status}</div>
              )
            }

          })()}
          </div> 
        
        </div> )
    })
  }else{
    display = 'No se consiguio el personaje'
  }

  return <>{display}</>
  
}

export default Personajes