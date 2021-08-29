let demo = new Vue({
     el: "#demo",
     data: {
          x: 0,
     },
     methods: {
          decrementing: function () {
               this.x -= 3;
          },
     },
});
