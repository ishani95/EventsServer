/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
//var bcrypt = require('bcrypt');

module.exports = {tableName:'User',

  attributes: {

    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
     // maxLength: 200,
      example: 'carol.reyna@microsoft.com'
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    name: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 120,
      example: 'Lisa Microwave van der Jenny'
    },
    phone: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 10,
      example: 'Lisa Microwave van der Jenny'
    },

  },

};

