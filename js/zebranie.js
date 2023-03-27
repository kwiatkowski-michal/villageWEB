const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

fetch("data/zebrania.txt")
  .then(res => res.text())
  .then(data => {
    const dates = data.split(",").map(dateStr => new Date(dateStr.trim().replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")));
    const closestDate = new Date(Math.min(...dates.filter(date => date > new Date())));

    const wynik = document.getElementById("wynik");
    const calendar = document.getElementById("calendar");
    
    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Zebranie%20wiejskie&dates=${closestDate.toISOString().replace(/-|:|\.\d+/g, "")}/${closestDate.toISOString().replace(/-|:|\.\d+/g, "")}&details=Opis%20wydarzenia&location=Lokalizacja%20wydarzenia&sf=true&output=xml`;

    const br = document.createElement("br");
    const calendarIcon = document.createElement("i");
    calendarIcon.classList = "bi-box-arrow-up-right";
    const calendarBold = document.createElement("a");
    calendarBold.classList = "text-decoration-none f-white f-montserrat fw-semibold";
    calendarBold.innerText = " Kalendarza Google ";
    calendarBold.href = googleCalendarLink;
    calendarBold.target = "_blank";
    calendarBold.appendChild(calendarIcon);

    const dodajDo = document.createElement("a");
    dodajDo.classList = "f-white text-decoration-none";
    dodajDo.innerText = 'Dodaj do';

    const calendarLink = document.createElement("a");
    calendarLink.appendChild(calendarBold);
  
    fullDate = `${closestDate.getDate()} ${months[closestDate.getMonth()]} ${closestDate.getFullYear()}`;
    wynik.innerHTML = `${fullDate}<br>`;
    wynik.appendChild(dodajDo);
    wynik.appendChild(calendarLink);
  })
  .catch(error => {
    console.error(error);
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = "Błąd wczytywania! Skontaktuj się z administratorem.";
  });
