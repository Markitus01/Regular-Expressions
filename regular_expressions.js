const f_main = () => {
    // Exercici 1:
    let ex1 = new RegExp("^[0-9]{2,5}$");
    cadena = "2342h";
    console.info(cadena+" "+ex1.test(cadena));
    cadena = "2424";
    console.info(cadena+" "+ex1.test(cadena));

    let ex2 = new RegExp("[   ]{3}");
    cadena = "olaa   adeu";
    console.info(cadena+" "+ex2.test(cadena));
    cadena = "o ooasd  ksa as  asd  ";
    console.info(cadena+" "+ex2.test(cadena));

    let ex3 = new RegExp("[b-l]{1}");
    cadena = "amnñopqrstvwxyz";
    console.info(cadena+" "+ex3.test(cadena));
    cadena = "abcdefghijklmnñopqrstvwxyz";
    console.info(cadena+" "+ex3.test(cadena));

    let ex4 = new RegExp("[2-3][0-9]|40");
    cadena = "1941";
    console.info(cadena+" "+ex4.test(cadena));
    cadena = "2040";
    console.info(cadena+" "+ex4.test(cadena));

    console.log("\n\n\n\nEXERCICI 2:");

    // Exercici 2
    let er1 = /\d\d\d[-|+]/;
    cadena = "dwq7d4-+q-789";
    console.info(cadena+" "+er1.test(cadena));
    cadena = "204+";
    console.info(cadena+" "+er1.test(cadena));
    cadena = "708-";
    console.info(cadena+" "+er1.test(cadena));

    let er2 = /e{1}-{0,1}mail/;
    cadena = "email";
    console.info(cadena+" "+er2.test(cadena));
    cadena = "e-mail";
    console.info(cadena+" "+er2.test(cadena));
    cadena = "maile";
    console.info(cadena+" "+er2.test(cadena));
    cadena = "mail-e";
    console.info(cadena+" "+er2.test(cadena));

    let er3 = /\dpq/;
    cadena = "a7pq";
    console.info(cadena+" "+er3.test(cadena));
    cadena = "Opq";
    console.info(cadena+" "+er3.test(cadena));
    cadena = "pq3";
    console.info(cadena+" "+er3.test(cadena));
}

document.addEventListener('DOMContentLoaded',f_main);