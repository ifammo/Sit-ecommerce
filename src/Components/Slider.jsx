import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './slide.css'

export default class Slider extends Component {

    render() {
        return (
            <div className='marg'>
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Product number one</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8078227/pexels-photo-8078227.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Product number two</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem?.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Product number three</h3>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        )
    }
}