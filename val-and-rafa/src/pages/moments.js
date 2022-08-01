import React from 'react';
import './home.css';
import PhotoAlbum from "react-photo-album";
import image from './homepic.jpg';


const Moments = () =>{

  const photos = [
    {
        src : image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 500,
        height: 500
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 300,
        height: 300
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 1000,
        height: 1000
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    },
    {
        src: image,
        width: 100,
        height: 100
    }
  ];

  return (
    <PhotoAlbum layout="columns" photos={photos} />
  );
}
export default Moments;