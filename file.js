const btn = document.querySelector("#fetchBtn");
// const div = document.querySelector("div");

const container = document.querySelector("#container");
console.log(btn);
console.dir(btn);

// div.addEventListener(
//   "click",
//   () => {
//     console.log("div clicked");
//   },
//   true
// );

btn.addEventListener("click", () => {
  // console.log("button clicked");

  // fetch("https://jsonplaceholder.typicode.com/posts/1/comments", { method: "GET" });
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(function (response) {
      // console.log(response);
      // console.log(response.json());
      return response.json();
    })
    .then(function (posts) {
      const ul = document.createElement("ul");

      // ul.innerText = "tekstas";
      const listItems = posts.map(function (post) {
        const li = document.createElement("li");

        li.innerText = post.name;
        return li;
        // console.log(postas);
      });

      // console.log(ul);
      ul.append(...listItems);
      container.append(ul);
    });

  // console.log("clicked");

  // pasiimti tuos duomenis is response: gale rasom .then fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
});

// kitas budas
// btn.onclick = () => {
//   console.log("button clicked");
// };
