
/* global Vue */


var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      // numbers: [],
      number1: 0,
      number2: 0,
      number3: 0,
      total: null
    };
  },
  methods: {
    sum: function () {
      console.log(this.text);
      this.total = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3)
    }
  }
});