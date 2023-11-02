// Dichiarazione delle variabili per le informazioni dell'auto
let brand = "Toyota";
let model = "Camry";
let productionYear = 2022;
const ownerName = "Rachele Cerasoli";

// Determina se l'auto è nuova o non nuova 
const isCarNew = (new Date().getFullYear() - productionYear) <= 1;

// Stampare le informazioni dell'auto
console.log("Marca dell'auto :", brand);
console.log("Modello dell'auto", model);
console.log("Anno di produzione dell'auto", productionYear);
console.log("Nome del proprietaro dell'auto", ownerName);
console.log("L'auto è nuova?", isCarNew);