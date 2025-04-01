import React from 'react';

export function NavLink ({ className, href, text, img, onClick}) {
  return (
    <a className={className} href={href} onClick={onClick}>{text}
    {img && <img src={img} alt='' />}
    </a>  
  )
} 