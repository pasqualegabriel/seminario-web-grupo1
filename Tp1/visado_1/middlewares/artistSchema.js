exports.artistSchema = {
  type: 'object',
  required: ['name', 'country'],
  properties: {
    name: {
      type: 'string'
    },
    country: {
      type: 'string'
    }
  }
};
