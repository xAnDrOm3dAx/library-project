const myLibrary = ["Book 1", "Book 2", "Book 3"];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
}

const newBookBtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector("#new-book-form");

newBookBtn.addEventListener("click", () => {
  newBookForm.style.display = "flex";
});

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});
