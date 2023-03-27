const streetSelect = document.getElementById('street');

fetch('./data/streets.json')
  .then(response => response.json())
  .then(data => data.forEach(street => {
      const option = new Option(street.name, street.name);
      streetSelect.add(option);
  }))
  .catch(error => console.error(error));

const trashButton = document.getElementById("trash");
trashButton.addEventListener("click", function() {
  const selectedValue = streetSelect.value;
  const link = `https://cloud.fxsystems.com.pl/OdbiorySmieci/HarmonogramOnline.dll?gmina_id=309632&ulica=Kruszyn%20Krajeński,%20${selectedValue}`;
  window.open(link, "_blank");
});
