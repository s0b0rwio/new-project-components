import React from 'react';
import Card from './Card'; // Correcting the import path

export default {
  component: Card,
  title: 'Card',
} 

const Template = (args) => <Card {...args} />;

const cardData = {
  image: '/static/images/cards/contemplative-reptile.jpg',
  title: 'Lizard',
  description:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};

export const Default = Template.bind({});
Default.args = { ...cardData };
