/*
var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
})
*/


new Vue({
  el: "#app",
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
});
