/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "here is a new variable!",
      name: "briann",
      showHiddenInfo: false,
      greyOutInfo: false,
      fruits: ["raspberries", "mango", "sumo mandarin", "pineapple"],
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    };
  },
  methods: {
    changeMessage: function () {
      console.log('in change message');
      this.message = "helloo";
    },
    toggle: function () {
      console.log('in toggle');
      this.showHiddenInfo = !this.showHiddenInfo;
    },
    greyOut: function () {
      console.log('greying out text')
      this.greyOutInfo = !this.greyOutInfo;
    }
  }
});