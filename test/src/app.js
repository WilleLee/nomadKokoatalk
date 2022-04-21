const createBooks = () => {
  const boom = document.querySelector(".boom");
  fetch(
    "https://www.googleapis.com/books/v1/volumes?q=%EC%B2%A0%ED%95%99&maxResults=4&&projection=lite"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      boom.innerHTML = `<img src=${data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]} />`;
    });
};

createBooks();
