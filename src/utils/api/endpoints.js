export const ENDPOINTS = {
  BASE: "https://www.themealdb.com/api/json/v1/1",
  //i nomi delle variabili li sto mettendo in uppercase per convenzione perchè sono costanti che non cambieranno
  get SEARCH() {
    return `${ENDPOINTS.BASE}/search.php`;
  },

  get FILTER() {
    return `${ENDPOINTS.BASE}/filter.php`;
  },

  get CATEGORIES() {
    return `${ENDPOINTS.BASE}/CATEGORIES.php`;
  },
};

//scrivendo i componenti della url così
//SEARCH: '/search.php',
//FILTER: '/filter.php',
//CATEGORIES: '/categories.php',
// poi li devo andare a comporre nella fetch
//fetch(`${ENDPOINTS.BASE}/${ENDPOINTS.SEARCH}?s=Arrabiata`)

//mentre invece usando un getter dentro l'oggetto posso comporre le url direttamente lì.

// fetch(`${ENDPOINTS.SEARCH}?s=Arrabiata`)
//   .then((res) => res.json())
//   //friendly reminder che res è un oggetto
//   .then(console.log);
