const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = read;
  //   Book.prototype.toggleRead = function () {
  //   this.read = !this.read;
  // };
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const newBookBtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector("#new-book-form");
const library = document.querySelector("#library");

newBookBtn.addEventListener("click", () => {
  newBookForm.style.display = "flex";
  library.style.display = "none";
});

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  newBookForm.style.display = "none";
  library.style.display = "flex";
});

// const newBookBtn = document.querySelector("#new-book-btn");
// newBookBtn.addEventListener("click", () => {
//   const newBookForm = document.querySelector("#new-book-form");
//   newBookForm.style.display = "flex";
// });

// document.querySelector("#new-book-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   addBookToLibrary();
//   newBookForm.style.display = "none";
// });

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  renderBookToHtml();
}

function renderBookToHtml() {
  const libraryElement = document.querySelector("#library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let libraryBooks = myLibrary[i];
    const bookCardElement = document.createElement("div");
    bookCardElement.classList.add("book-card");
    bookCardElement.innerHTML = `
    <div class="card-header">
      <h3 class="title">${libraryBooks.title}</h3>
      <h5 class="author">${libraryBooks.author}</h5>
    </div>
    <div class="card-body">
      <p class="pages">${libraryBooks.pages}</p>
      <p class="read-status">${libraryBooks.read ? "Read" : "Not Read Yet"}</p>
      <button id="remove-book-btn" onclick="removeBook(${i})">Remove</button>
      <button id="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button>
    </div>`;
    libraryElement.appendChild(bookCardElement);
  }
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  renderBookToHtml();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderBookToHtml();
}
