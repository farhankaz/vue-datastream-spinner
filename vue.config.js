module.exports = {
  configureWebpack: config => {
    config.externals = {
      'gsap': 'gsap',
      'gsap/TweenMax': 'gsap/TweenMax'
    }
  },
  css: {
    extract: false
  }
}