import React from "react";
import * as SC from "./styles";

export const Pagination = ({currentPage, setPage, totalPages}) => {
  //cоздаем массив с 0, по длине равный количеству страниц, для того что бы проходя по этому массиву вывести номера страниц
  const pages = new Array(totalPages).fill(0);
  return(
    <SC.Pagination>
      {
        pages.map((page, index) => (
        <SC.Page 
          key={index}
          isCurrent={currentPage === index}
          onClick={() => setPage(index)}
        >
            {index + 1}
        </SC.Page>
        ))
      }
    </SC.Pagination>
   
  )
  
}