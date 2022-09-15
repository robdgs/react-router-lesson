//creo un CUSTOM HOOK:
//scrivere un custom hook è scrivere una funzione dove si utilizza lo useState e viene restituito lo use state o qualcosa di simile
//però si mette fuori dal componente in modo tale che sia riutilizzabile

//l'obiettivo qui è scrivere un hook che ci possa aiutare all'interno delle chiamate fetch
//magari a questo custom hook passiamo l'url da richiamare, in modo che ogni volta al caricamento viene effettuata la
//chiamata api e mi viene tornato: lo stato di loading (true false), i dati di ritorno, se ci sono stati uno o più errori

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //andiamo a definire tre stati:
  const [loading, setLoading] = useState(false); //voglio o true o false
  const [data, setData] = useState(null); //voglio o null o Response
  const [error, setError] = useState(null); // vogliamo che sia o null o Error (o false)

  //stabilisco che se non abbiamo l'url (non esiste) facciamo un throw di un errore:
  if (!url?.length) {
    throw new Error("devi passare un url ");
  }

  //creiamo un use effect che al loading faccia un a determinata richiesta:
  useEffect(() => {
    //imposto il loading a true
    setLoading(true);
    //faccio la mia chiamata
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        //false mi dice che non è presente un errore, a differenza di null che invece
        //dice che non è stato valutato se c'è un errore o no
        setError(false);
      })
      //vedo com'è andata la chiamata e se devo mandare un errore
      .catch((err) => {
        setError(err);
      })
      //sia che abbiamo l'errore, sia che non lo abbiamo succede che il loading finisce:
       .finally(()=>{
        setLoading(false);
       });

       // (async function () {
    //   try {
    //     const res = await fetch(url).then((res) => res.json());
    //     setData(res);
    //     setError(false);
    //   } catch (e) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // })();

  }, []);

  return { loading, data, error };
};

//scrivere il custom hook significa praticamente copiancollare quello che avremmo scritto all'interno
//del nostro componente dentro una funzione separata
