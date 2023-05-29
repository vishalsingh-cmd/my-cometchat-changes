module.exports = {
    plugins: [
      // set of built-in plugins enabled by default
      'preset-default',
  
      // add convertColors plugin with currentColor set to true
      {
        name: 'convertColors',
        params: {
          currentColor: true,
        },
      },
    ],
  };