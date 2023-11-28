const f_main = () =>
{
    let er_match1 = new RegExp("\\$", "g");
    let er_match2 = /\$/;
    let cadena_match = "Una cadena to flama que tiene $ $$ $ $$$ $ $ $ dolaricos i contamos apariciones yagoba cayuko";
    let array1 = cadena_match.match(er_match1);

    if (array1 != null)
    {
        console.info("S'ha trobat el dolar: "+ array1.length + " vegades.");
    }
    else
    {
        console.info("No s'ha trobat el dolar en la cadena: "+ cadena_match);
    }

    let array2 = cadena_match.match(er_match2);

    if (array2 != null)
    {
        console.info("S'ha trobat el dolar: "+ array2.length + " vegades.");
    }
    else
    {
        console.info("No s'ha trobat el dolar en la cadena: "+ cadena_match);
    }

    const CAD = "El gos de la veïna és més bonic que el teu gOs";
    const ER = /Gos/i;
    console.log(CAD.replace(ER, 'gat'));

    let cad = "El Gos de la veïna és més bonic que el teu GOS";
    let er = /GOS/g;
    console.log(cad.replace(er, "gat"));

    cad = "Avui es dimarts, però la setmana vinent, el DIMARTS serà com un divendres";
    er = new RegExp("dimarts", "gi");
    console.log(cad.replace(er, "dissabte"));
    
}

document.addEventListener('DOMContentLoaded',f_main);