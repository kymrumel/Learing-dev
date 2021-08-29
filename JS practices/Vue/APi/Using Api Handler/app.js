let token = "4e060d43-600d-40d6-a995-5f8434397b58";
let docID = "FYrJ_cNjYs";
let tableId = "grid-HtzI6XcxD5";

let app = new Vue({
     el: "#demo",
     data: {
          codaRest: new WCC_REST(token),
          list: [],
     },

     methods: {
          loadRow: async function () {
               let coda = this.codaRest;
               let response = await coda.read(
                    `https://coda.io/apis/v1/docs/${docID}/pages`
               );
               let data = await response;
               this.list = data.items;
          },
     },
     created() {
          this.loadRow();
     },
});
