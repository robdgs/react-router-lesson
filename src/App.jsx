//MODO UNO, senza usare react router dom

// import { useState } from "react";
// import "./App.css";
// import { Home, Catalog, Recipe } from "./pages";

// function App() {

// const [route, setRoute] = useState("home");
// return (
//   <div className="App">
//     <nav>
//       <ul>

//         {/* <li>
//           <button onClick={() => setRoute("home")}>Home</button>
//         </li>
//         <li>
//           <button onClick={() => setRoute("catalog")}>Catalog</button>
//         </li>
//         <li>
//           <button onClick={() => setRoute("recipe")}>Recipe</button>
//         </li> */}
//         {/* posso comprimere le righe da 11 a 19 in questo modo: */}

//         {["home", "catalog", "recipe"].map((key) => (
//           <li key={key}>
//             <button disabled={route===key} onClick={() => setRoute(key)}>{key}</button>
//           </li>
//         ))}

//       </ul>
//     </nav>
//     {route === "home" && <Home />}
//     {route === "catalog" && <Catalog />}
//     {route === "recipe" && <Recipe />}

//   {/* con questo modo di scrivere il routing, al refresh della pagina mi ritroverò
//   di nuovo in home, e da utente non è il massimo.
//   potrei implementare la cosa usando urlSearchParams ma sarebbe veramente difficile da sviluppare
//    */}
//   </div>
//   );
// }

// export default App;

//CON REACT ROUTER DOM:

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Category, ErrorPage } from "./pages";
import { Navbar } from "./components/navbar/navbar.jsx";
import { useFetch } from "./utils/api/use-fetch";
import { ENDPOINTS } from "./utils/api/endpoints";
import "./index.css";

export default function App() {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);
  console.log(data, loading, error);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />
          <Route path="/catalogo/:categoryName" element={<Category />} />
          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// browserRouter lo andremo ad utilizzare al 99% delle volte
// la configurazione  sarà a carico della libreria.
//BrowserRouter vede sì qual è lo stato applicativo e il resto ma
// prende questi dati e si occupa di passarli all'interno di un contesto che
//poi deve essere utilizzato da un ulteriore componente, che è
// Routes, questo componente ha la gestione delle rotte.
//il componente routes è  è il modo pricipale per renderizzare qualcosa su react router basandoci
//sulla location corrente.
// il routes ingloba le varie route che vengono renderizzate in maniera facoltativa se il path
//coincide con quello che abbiamo attualmente all'interno dell'url
//
//
