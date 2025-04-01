import React from "react";

export function HeaderIconMenu ({img, notification, onClick}) {
  return (
    <button className="h-icon" onClick={onClick}> <img className="icon-img" src={img} alt='' /> 
    {notification && <div className='notification'>{notification}</div>}
    </button>
  )
}