let app = new Vue({
     el: "#demo",
     data: {
          todos: [],
          user: [],
     },
     methods: {
          loadTodos: async function () {
               let res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos`
               );
               let data = await res.json();
               data = data.splice(0, 10);
               this.todos = data;
               console.log(data);
          },
          loadUser: async function () {
               let res = await fetch(
                    `https://jsonplaceholder.typicode.com/users`
               );
               let data = await res.json();
               this.user = data;
               console.log(data);
          },
     },
     created() {
          this.loadTodos();
          this.loadUser();
     },
});
