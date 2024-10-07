import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "../public/index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <Fragment className="container">
      <Header />
      <Menu />
      <Footer />
    </Fragment>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "42px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  // const pizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all oganic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObject={pizza} key={pizza.name} />;
            })}
          </ul>
        </Fragment>
      ) : (
        <p>Sem pizzas no momento</p>
      )}
    </main>
  );
}

/*
      Usando OPERADOR AND
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObject={pizza} key={pizza.name} />;
            })}
            </ul>
            )}
            
            
            <Pizza
            name={name}
            ingredients={ingredients}
            price={price}
            photoName={photoName}
            soldOut={soldOut}
            />
            
            <Pizza
            name={name}
            ingredients={ingredients}
        price={price}
        photoName={photoName}
        soldOut={soldOut}
      />
      */

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="imagem" />
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <span>{pizzaObject.soldOut ? "Sold Out" : pizzaObject.price}</span>
      <p>{pizzaObject.soldOut}</p>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Volte depois</p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open {openHour}:00 until {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
