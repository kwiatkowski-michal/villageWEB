// Miesiące w języku polskim
const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

// Pobierz zawartość pliku "zebrania.txt"
fetch("zebrania.txt")
  .then(response => response.text())
  .then(data => {
    // Przekonwertuj dane do tablicy dat w formacie DD-MM-RRRR
    const dates = data.split(",").map(dateStr => new Date(dateStr.trim().replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")));
    console.log(dates);
    // Znajdź najbliższą datę
    const closestDate = new Date(Math.min.apply(null, dates.filter(date => date > new Date())));

    // Wyświetl wynik na stronie
    const wynik = document.getElementById("wynik");

    // Tworzenie linku do dodania wydarzenia w kalendarzu Google
    const googleCalendarLink = "https://www.google.com/calendar/render?action=TEMPLATE" +
      "&text=Zebranie%20wiejskie" +
      "&dates=" + closestDate.toISOString().replace(/-|:|\.\d+/g, "") + "/" + closestDate.toISOString().replace(/-|:|\.\d+/g, "") +
      "&details=Opis%20wydarzenia" +
      "&location=Lokalizacja%20wydarzenia" +
      "&sf=true&output=xml";

    // Tworzenie elementu <a> do linku
    const calendarBold = document.createElement("a")
    calendarBold.classList="text-decoration-none f-white f-montserrat f-600"
    calendarBold.innerText = " Kalendarza Google "

    const calendarIcon = document.createElement("i")
    calendarIcon.classList=" bi-box-arrow-up-right"


    const calendarLink = document.createElement("a");
    calendarLink.href = googleCalendarLink;
    calendarLink.target = "_blank";
    calendarLink.classList = "f-white text-decoration-none"
    calendarLink.innerText = 'Dodaj do';
    calendarLink.appendChild(calendarBold)
    calendarLink.appendChild(calendarIcon)
    // Dodanie elementów do wyniku
    wynik.innerHTML=closestDate.getDate() + " " + months[closestDate.getMonth()] + " " + closestDate.getFullYear();
    wynik.appendChild(document.createElement("br"));
    wynik.appendChild(calendarLink);
  })
  .catch(error => {
    console.error(error);
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = "Błąd wczytywania pliku! Skontaktuj się z administratorem.";
  });