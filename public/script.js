'use strict';

const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');

const searchTriggers = document.querySelectorAll('.search-trigger');
const searchModal = document.getElementById('searchModal');

// NAVBAR CHANGE AFTER SCROLL
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    logo.src = '/img/logo-black.png';
  } else {
    nav.classList.remove('scrolled');
    logo.src = '/img/logo-white.png';
  }
});

// SEARCH MODAL
searchTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    searchModal.style.display = 'flex';
  });
});

window.addEventListener('click', e => {
  if (e.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

// REPLACING HTML WITH API DATA
function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book__card';

  const tagColors = {
    romance: 'book__card-tag--1',
    fantasy: 'book__card-tag--1',
    drama: 'book__card-tag--1',
    satire: 'book__card-tag--1',

    horror: 'book__card-tag--2',
    gothic: 'book__card-tag--2',
    thriller: 'book__card-tag--2',
    tragedy: 'book__card-tag--2',
    dystopian: 'book__card-tag--2',

    history: 'book__card-tag--3',
    mystery: 'book__card-tag--3',
    adventure: 'book__card-tag--3',
    bildungsroman: 'book__card-tag--3',
    'science fiction': 'book__card-tag--3',
  };

  card.innerHTML = `
    <img class="book__card-img" src="/img/book-covers/${
      book.imageCover
    }" />
    <div class="book__card-info">
      <a href="/book/${book._id}" class="book__card-title">
        ${book.title}
      </a>
      <a href="#" class="book__card-author">${book.author
        .map(a => a.name)
        .join(', ')}</a>

      <div class="book__card-additional">
        <p>${book.yearPublished}</p>
        <div class="book__card-circle"></div>
        <p>${book.language}</p>
      </div>

      <div class="book__card-tags">
        ${book.genre
          .map(tag => {
            const className =
              tagColors[tag.toLowerCase()] || 'book__card-tag--0';
            return `<p class="book__card-tag ${className}">${tag}</p>`;
          })
          .join('')}

      </div>
    </div>

    <div class="book__card-btns">
      <a class="book__card-btn" href="/edit-book/${book._id}">
        <ion-icon name="create-outline"></ion-icon>
      </a>
      <button class="book__card-btn book__card-btn--delete">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  `;

  return card;
}

function createAuthorCard(author) {
  const card = document.createElement('div');
  card.className = 'author__card';

  card.innerHTML = `
    <img src="/img/authors/${author.image}" />
    <div class="overlay">${author.name}</div>
  `;

  return card;
}

async function loadBooks() {
  const response = await fetch('/api/v1/books');
  const data = await response.json();

  const books = data.data.books;
  const booksGrid = document.getElementById('booksGrid');

  books.forEach(book => {
    const card = createBookCard(book);

    const deleteBtn = card.querySelector('.book__card-btn--delete');
    deleteBtn.addEventListener('click', () => {
      const modal = document.getElementById('deleteModal');
      modal.style.display = 'flex';

      const deleteForm = document.getElementById('deleteForm');
      deleteForm.action = `/api/v1/books/${book._id}`;
    });

    booksGrid.appendChild(card);
  });

  const cancelBtn = document.getElementById('cancelDelete');
  const modal = document.getElementById('deleteModal');

  cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

async function loadAuthors() {
  const response = await fetch('/api/v1/authors');
  const data = await response.json();

  const authors = data.data.authors.slice(0, 6);
  const authorsCarousel = document.getElementById('authorsCarousel');

  authors.forEach((author, index) => {
    const card = createAuthorCard(author);

    if (index >= 3) {
      card.classList.add('hidden');
    }

    authorsCarousel.appendChild(card);
  });

  // AUTHORS CAROUSEL
  const cards = document.querySelectorAll('.author__card');

  let currentSlide = [0, 1, 2];
  const maxCard = 5;

  const previousBtn = document.querySelector('.previous-btn');
  const nextBtn = document.querySelector('.next-btn');

  function toggleBtn(btn, on) {
    if (on) {
      btn.classList.remove('faded');
      btn.disabled = false;
    } else {
      btn.classList.add('faded');
      btn.disabled = true;
    }
  }

  function updateCarousel(arg) {
    cards.forEach((el, i) => {
      if (arg) {
        if (i === currentSlide[0]) el.classList.add('hidden');
        if (i === currentSlide[2] + 1) el.classList.remove('hidden');
      } else {
        if (i === currentSlide[2]) el.classList.add('hidden');
        if (i === currentSlide[0] - 1) el.classList.remove('hidden');
      }
    });
    currentSlide = currentSlide.map(el => (arg ? el + 1 : el - 1));
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide[2] === maxCard - 1) toggleBtn(nextBtn, 0);
    toggleBtn(previousBtn, 1);
    updateCarousel(1);
  });

  previousBtn.addEventListener('click', () => {
    if (currentSlide[0] === 1) toggleBtn(previousBtn, 0);
    toggleBtn(nextBtn, 1);
    updateCarousel(0);
  });
}

loadBooks();
loadAuthors();

const deleteForm = document.getElementById('deleteForm');

deleteForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const url = deleteForm.action;

  const res = await fetch(url, {
    method: 'DELETE',
  });

  if (res.status === 204) {
    document.getElementById('deleteModal').style.display = 'none';

    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/home'
    ) {
      window.location.reload();
    }

    if (window.location.pathname.startsWith('/book/')) {
      window.location.href = '/';
    }
  }
});

// SEARCH form submission
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');

  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const query = searchForm.query.value.trim();

      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(
          query
        )}`;
      }
    });
  }
});
