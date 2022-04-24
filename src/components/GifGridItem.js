import React from 'react';
import '../index.css';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInDown">
        <img src={ url } alt={ title }></img>
        <p>{ title ? title : 'gif' }</p>
    </div>
  )
}
