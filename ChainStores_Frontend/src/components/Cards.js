import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>PRODUCT LEADS</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= 'image/poorna.jpeg' 
              text='Poorna Chander - Computer Science student at Mahindra University and freelancer'
              label='CSE'
              path='/services'
            />
            <CardItem
              src= 'image/sridhar.jpeg' 
              text='Sridhar - Computer Science student at Mahindra University and app developer'
              label='CSE'
              path='/services'
            />
              <CardItem
              src =  'image/nik.jpg'     
              text='Nikhil - Computer Science student at Mahindra University'
              label='CSE'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
