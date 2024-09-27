const texts = [
    "Witamy na stronie!", // Polski
    "Welcome to the site!", // Angielski
    "Willkommen auf der Seite!", // Niemiecki
    "Benvenuti sul sito!", // Włoski
    "¡Bienvenido a la página!", // Hiszpański
    "Bem-vindo ao site!", // Portugalski
    "Bienvenue sur le site!", // Francuski
    "Üdvözöljük az oldalon!", // Węgierski
    "Sveiki atvykę į svetainę!", // Litewski
    "Ласкаво просимо на сайт!" // Ukraiński
];

let index = 0;

function changeText() {
    const textElement = document.getElementById("id2");
    textElement.classList.add("fade-out"); // Dodaj klasę zanikania

    setTimeout(() => {
        // Po zakończeniu efektu zanikania zmień tekst
        textElement.innerHTML = `${texts[index]}`;
        textElement.classList.remove("fade-out"); // Usuń klasę zanikania
        textElement.classList.add("fade-in"); // Dodaj klasę pojawiania się
        index = (index + 1) % texts.length; // Przejdź do następnego języka
    }, 500); // Opóźnienie zgodne z czasem zanikania

    // Usuń klasę fade-in po zakończeniu animacji
    setTimeout(() => {
        textElement.classList.remove("fade-in");
    }, 1000); // Całkowity czas animacji
}

// Zmieniaj tekst co 2 sekundy
setInterval(changeText, 2000);

function WinOpenMain() {
    window.open("Logowanie.html", "okienko", );
}
function WinOpen() {
    window.open("onas.html", "okienko",);
}

function WinOpen1() {
    window.open("https://galeriaprzymorze.pl/", "okienko", );
}

function WinOpen2() {
    window.open("mapy.html", "okienko",);
}

function WinOpen3() {
    window.open("sklepy.html", "okienko", );
}

function WinOpen4() {
    window.open("dla ciebie.html", );
}

function WinOpen5() {
    window.open("wydarzenie.html", );
}

function WinOpen6() {
    window.open("newsletter.html", "okienko", );
}

function WinOpen7() {
    window.open("polityka prywatnosci.html", "okienko",);
}



function closeWindow() {
    // Attempt to close the current window
    window.close();
    // Optional: Show a message if the window cannot be closed
    alert("Jeśli to okno nie zamknie się, zostało otwarte bezpośrednio przez użytkownika. Zamknij je ręcznie.");
}