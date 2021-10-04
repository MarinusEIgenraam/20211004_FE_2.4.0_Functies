const tomaten = {
    naam: `tomaten`,
    vies: true,
    nat: false,
    gesneden: false,
}

console.log(tomaten.valueOf())
function bereidGroente(groente) {
    if (groente.vies) {
        console.log("Je wast eerst de" + groente.naam);
        groente.nat = true;
        groente.vies = false
    } else {
        console.log(`De ${groente.naam} zijn gewassen`);
    }
    if (groente.nat && !groente.vies) {
        console.log(`Nu zijn de ${groente.naam} nat en moet je ze laten uitekken`);
        groente.nat = false;
    } else {
        console.log(groente.naam + " zijn al droog en gewassen");
    }
    if (!groente.gesneden) {
        console.log("snij nu de" + groente.naam);
        groente.gesneden = true;
    }
}
bereidGroente(tomaten);
console.log(tomaten.naam.toString())
console.log(tomaten.valueOf())
