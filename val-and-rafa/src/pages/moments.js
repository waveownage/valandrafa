import React from 'react';
import './home.css';
import image from './homepic.jpg';
import Gallery from 'react-photo-gallery';

export default class Moments extends React.Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} />
	);
    }
}
const PHOTO_SET = [
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  },
  {
    src: image,
    width: 4,
    height: 3
  },
  {
    src: image,
    width: 1,
    height: 1
  }
  
  
];