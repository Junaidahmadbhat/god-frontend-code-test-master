import React, {useState, useEffect} from 'react';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ButtonGroup} from './CustomButtons'
import {Item} from './Item'
import {isMobile} from 'react-device-detect';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

function App() {
  const [data , setData] = useState([])
  // Fetch Function   
  useEffect(() => {
    fetch("./api/cars.json").then(
      function(res){
      return res.json()
    }).then(function(data){
    // store Data in State Data Variable
      console.log('data=>', data)
      setData(data)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
  }, [])

  return (
    <div className='main-body'>
      {data && data.length && <Carousel
      removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}
      customButtonGroup={isMobile ? null : <ButtonGroup />}
      showDots={isMobile ? true : false}
      containerClass="carousel-container"
      responsive={responsive}
      >
        {data.map((item, key) => (<Item item={item}/>))}
      </Carousel>}
    </div>
  )
}

export default App;
