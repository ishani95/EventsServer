/**
 * Profile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {tableName:'Profile',

  attributes: {
    userId: {
      type: 'string'
    },
  
    category: {
      type: 'string'
    },
    description: {
      type: 'string',
    },

  },

};

