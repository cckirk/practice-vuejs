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
      ],
      newFruit: ""
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
    },
    addFruit: function () {
      console.log("adding fruit...")
      console.log(this.newFruit);
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});
/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "ajdls;kfjasd;lfkjadskl;j!",
      todos: []
    };
  },
  methods: {
    loadTodos: function () {
      console.log('i am loading todos...');
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    }
  }
});
