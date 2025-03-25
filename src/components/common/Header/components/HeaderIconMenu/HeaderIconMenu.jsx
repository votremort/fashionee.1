import React from "react";

export function HeaderIconMenu ({img, notification}) {
  return (
    <button className="h-icon"> <img className="icon-img" src={img} alt='' /> 
    {notification && <div className='notification'>{notification}</div>}
    </button>
  )
}