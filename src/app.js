/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuse() {
    var who = ["Mi perro", "Mi abuela", "Mi padre", "Mi hermana"];
    var accion = ["escondió", "ensució", "me quitó", "me encerro"];
    var Objeto = ["en la casa", "las llaves", "el coche", "mis zapatos"];
    var momento = [
      "toda la noche.!",
      "el fin de semana.!",
      "esta mañana.!",
      "justo ahora.!"
    ];

    var excuse2 = " ";

    excuse2 = excuse2 + who[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + accion[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + Objeto[Math.floor(Math.random() * 4)] + " ";
    excuse2 = excuse2 + momento[Math.floor(Math.random() * 4)];

    return excuse2;
  }

  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });
  console.log("Hello Rigo from the console!");
};
