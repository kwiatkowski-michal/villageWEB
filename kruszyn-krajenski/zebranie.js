// Pobierz zawartość pliku "zebrania.txt"
fetch("zebrania.txt")
  .then(response => response.text())
  .then(data => {
    // Przekonwertuj dane do tablicy dat w formacie DD-MM-RRRR
    const dates = data.split(",").map(dateStr => new Date(dateStr.trim().replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")));

    // Znajdź najbliższą datę
    const closestDate = new Date(Math.min.apply(null, dates.filter(date => date > new Date())));

    // Wyświetl wynik na stronie
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = closestDate.toLocaleDateString("pl-PL");
  })
  .catch(error => {
    console.error(error);
    const wynik = document.getElementById("wynik");
    wynik.innerHTML = "Błąd wczytywania pliku!";
  });
