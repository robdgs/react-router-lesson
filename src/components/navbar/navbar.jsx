import React from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { href: "/", label: "Home", title: "Vai alla home" },
    { href: "/catalogo", label: "Catalogo" },
  ];

  //NOTA
  // Destructoring di un object:
  // const obj = { href: '/', label: 'Home' };
  // const { href, label } = obj;
  // sotto lo usiamo nel parametro della funzione passata al map

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map(({ href, label, title }) => (
          <li key={href} className={styles.item}>
            <NavLink
              to={href}
              title={title ? title : label}
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                opacity: isActive ? 0.75 : 1,
              })}
              className={`${({ isActive }) =>
                isActive ? "nav nav--active" : "nav"} 
                ${styles.navLink}`} //qui ho impostato due classi con una funzione, nav e nav--active per gestire lo stato active e non active dei link
              //effettivamente la classe navlink che ho messo dopo è superflua perchè potevo gestire tutto da nav

              // io posso definire l'active perchè mi trovo dentro un navlink, non un componente link
              //perchè link è un componente di reindirizzamento semplice
              // il navlink si occupa di fare le stesse identiche cose di link, soltanto
              // aggiunge le info su "è attivo/non è attivo" e per questo motivo sarà il componente che
              //userò nelle navbar.
              //l'active si riferisce alla mia posizione attuale
           >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//con link o navlink NON abbiamo il refresh della pagina (che potremmo avere con un tag a normale)
