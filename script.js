function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
        
    };
    return pizza;
}
var p1 = pizzaOven("estilo Chicago", "tradicional", ["Mozarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("estilo Chicago", "tradicional", ["Mozarella"], ["pepperoni", "salchicha"]);
var p4 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.table([p1,p2,p3,p4]);

////////////////////////////////
function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);




////////////////////////////////////////////////////////////////
tipoCorteza = ["estilo chicago","lanzada a mano"];
tipoSalsa = [];
quesos = [];
salsas = [];

