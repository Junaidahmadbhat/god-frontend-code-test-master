import React from 'react';

const CustomLeftArrow = ({ onClick }) => {

    return (
      <button
        onClick={onClick}
        aria-label="Go to previous slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      />
    );
  }
  
  const CustomRightArrow = ({ onClick }) => {
    return (    
      <button
        onClick={onClick}
        aria-label="Go to next slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      />
    );
  }
  
  export const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <CustomLeftArrow
          onClick={() => previous()}
        />
        <CustomRightArrow onClick={() => next()} />
      </div>
    );
  }