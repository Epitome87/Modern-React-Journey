import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

function ImageList(props) {
  // Why is this allowed? Doesn't it give adjacent elements not wrapped in a div?
  //   return props.images.map((image) => (
  //     <img key={image.id} src={image.url} />
  //   ));

  return (
    <div className='image-list'>
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );

  //   return <div>{images}</div>;
}

export default ImageList;
