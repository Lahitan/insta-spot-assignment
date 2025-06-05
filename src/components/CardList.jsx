// src/components/CardList.jsx
import React from 'react';
import Card from './CardComponent';



const CardList =({cardsData}) =>{
  return (
    <section  className='section-grid' id='card-container'>
      {cardsData.map((card) => (
        <Card key={card.id} image={card.image} title={card.title}/>
      ))}
    </section>
  );
}

export default CardList;
