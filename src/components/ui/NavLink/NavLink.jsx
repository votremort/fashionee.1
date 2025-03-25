import React from 'react';

export function NavLink ({ className, href, text, img}) {
  return (
    <a className={className} href={href}>{text}
    {img && <img src={img} alt='' />}
    </a>  
  )
} 