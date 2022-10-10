const currentDate = new Date();

const headerText = `Texto de header agregado con JavaScript a las ${currentDate.getHours()}:${currentDate.getMinutes()}`;
const footerText = `Creado con <3 por <a href="https://github.com/DiestroCorleone" target="_blank" title="GitHub Diestro Corleone">Diestro Corleone</a> | ${currentDate.getFullYear()}`;

document.getElementById("header").innerHTML = headerText;
document.getElementById("footer").innerHTML = footerText;
