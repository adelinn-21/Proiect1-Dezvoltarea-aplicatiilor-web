function calculeazaPret() {
    let ram = document.getElementById("ram").value;
    let ore = document.getElementById("hours").value;

    let pretFinal = ram * ore;

    document.getElementById("rezultat").innerHTML =
        "Preț final: <strong>" + pretFinal + " credite</strong>";
}
