let app = new Vue({
     el: "#demo",
     data: {
          todos: [],
          newData: "",
          isUpdating: false,
          currentData: "",
     },
     methods: {
          loadTodos: async function () {
               let res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos`
               );
               let data = await res.json();
               data = data.splice(0, 10);
               data.map((d) => (d.isUpdating = false));
               this.todos = data;
               console.log(data);
          },
          createData: function () {
               if (this.newData === "") return;
               let data = {
                    id: Date.now(),
                    title: this.newData,
               };
               this.todos.push(data);
          },
          removeData: function (id) {
               let list = this.todos;
               let i = list.findIndex((l) => l.id === id);
               if (i !== -1) list.splice(i, 1);
          },
          editData: function (id) {
               let list = this.todos;
               let i = list.findIndex((l) => l.id === id);
               if (i !== -1) {
                    list[i].isUpdating = true;
                    this.currentData = list[i].title;
               }
          },
          updateData: function (id) {
               let list = this.todos;
               let i = list.findIndex((l) => l.id === id);
               if (i !== -1) {
                    list[i].isUpdating = false;
                    list[i].title = this.currentData;
               }
          },
     },
     created() {
          this.loadTodos();
     },
});
