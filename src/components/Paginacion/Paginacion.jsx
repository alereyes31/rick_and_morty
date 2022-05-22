import  {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Paginacion = ({info,pageNumber,setPageNumber}) => {
  let [width, setWidth] = useState(window.innerWidth)
  console.log(width);

  let updateDimension = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
   window.addEventListener("resize", updateDimension)
   return()=> window.removeEventListener("resize", updateDimension)
  },[])
   
  return ( 
  <>
  <style jsx>
    {`
      @media (max-width:768px){
        .next, .prev{
          display: none;
        }
        .pagination{
          font-size:14px;
        }
      }
      `}
  </style>
  <ReactPaginate 
  className="pagination justify-content-center gap-4 my-4" 
  forcePage={pageNumber===1? 0 : pageNumber -1}
  previousLabel={'Anterior'}
  nextLabel={'Siguiente'}
  previousLinkClassName={"btn btn-primary prev"}
  nextLinkClassName={"btn btn-primary next"}
  pageClassName="page-item"
  pageLinkClassName="page-link"
  marginPagesDisplayed={width < 570 ? 1 : 2}
  pageRangeDisplayed={width < 570 ? 1 : 2}
  activeClassName="active"
  onPageChange={(data)=>{
      setPageNumber(data.selected + 1)
  }}
  pageCount={info?.pages}
  />
  </>
  )
};

export default Paginacion