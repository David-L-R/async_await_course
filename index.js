const getTodos = async (id) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();
  if (!data.id) {
    throw new Error("no todos were found");
  }
  //   return;

  console.log(data);

  const card = document.createElement("div");
  const title = document.createTextNode(data.title);
  const completed = document.createTextNode(
    data.completed ? "completed" : "pending"
  );

  card.appendChild(title);
  card.appendChild(completed);

  document.body.appendChild(card);

  console.log(data);
};
