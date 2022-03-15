//Test to create a card for each search result, not finised

const card = document.createElement("div");
const header = document.createElement("div");
const container = document.createElement("div");
const category = document.createElement("h3");
const title = document.createElement("h4");
const price = document.createElement("p");
const currency = document.createElement("p");

card.classList.add("card");
header.classList.add("header");
container.classList.add("container");

const createCard = (article) => {
  category.innerHTML = article.category;
  header.appendChild(category);

  title.innerHTML = article.title;
  container.appendChild(title);

  price.innerHTML = article.price;
  currency.innerHTML = article.currency;

  container.appendChild(price);
  container.appendChild(currency);

  card.appendChild(header);
  card.appendChild(container);

  return card;
};

export default createCard;
