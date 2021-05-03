module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js','./styles/**/*.css'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pokeball': "url('/bg.jpg')",
        'pokedex': "url('/bg-pokedex.jpg')",
      })
    }
  }
};
