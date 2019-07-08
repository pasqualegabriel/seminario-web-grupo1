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

exports.albumSchema = {
  type: 'object',
  required: ['name', 'year', 'artistId'],
  properties: {
    name: {
      type: 'string'
    },
    year: {
      type: 'number'
    },
    artistId: {
      type: 'number'
    }
  }
};
