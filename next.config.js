module.exports = {
    async rewrites() {
      return [
        {
            source: '/places',
            destination: 'http://localhost:3001/v1/places',
        },
        {
            source: '/places/:id',
            destination: 'http://localhost:3001/v1/places/:id',
        },
      ]
    }
  };