document.addEventListener('DOMContentLoaded', ex2);

function ex2()
{
    let caixa_msg = document.getElementById("aa");
    let caixa_text = document.getElementById("c");
    caixa_text.defaultValue = "Canvi d'inventari";

    let er_match = /nv/gm; //global i multiline, per a que no faci el return amb el primer match ni al acabar la linea

    document.getElementById("b2").addEventListener("click", (evt) =>
    {
        let array = caixa_text.value.match(er_match);
        console.info(caixa_text.value);
        caixa_msg.textContent = ""; // Netejem l'span si hi havia algun contingut

        if (array != null && array.length <= 3) // Si coincideix 3 vegades o menys, mostrem per consola
        {
            console.info("S'ha trobat el patró nv: "+array.length+" vegades");
        }
        else if (array != null && array.length > 3) // Si coincideix +3 vegades mostrem al span
        {
            caixa_msg.style.color = "green";
            caixa_msg.textContent = "S'ha trobat el patró nv: "+array.length+" vegades";
        }
        else // ERROR al span si no hi ha cap
        {
            caixa_msg.style.color = "red";
            caixa_msg.textContent = "ERROR";
        }
        
        evt.preventDefault();
    });
}