const { Tag } = require('../models');

const tagData = [
  {
    newTag: 'rock music',
  },
  {
    newTag: 'pop music',
  },
  {
    newTag: 'blue',
  },
  {
    newTag: 'red',
  },
  {
    newTag: 'green',
  },
  {
    newTag: 'white',
  },
  {
    newTag: 'gold',
  },
  {
    newTag: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
