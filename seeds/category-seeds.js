const { Category } = require('../models');

const categoryData = [
  {
    getCategory: 'Shirts',
  },
  {
    getCategory: 'Shorts',
  },
  {
    getCategory: 'Music',
  },
  {
    getCategory: 'Hats',
  },
  {
    getCategory: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
