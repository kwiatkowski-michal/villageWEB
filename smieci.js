const select = document.getElementById("street"); // get select element by id




const trashButton = document.getElementById("trash"); // get button element by id

trashButton.addEventListener("click", function() { // add event listener to the button
    const selectedValue = select.options[select.selectedIndex].value; // get the selected option value
    const link = `https://cloud.fxsystems.com.pl/OdbiorySmieci/HarmonogramOnline.dll?gmina_id=309632&ulica=Kruszyn%20Krajeński,%20${selectedValue}`; // create link with selected value
    window.open(link, "_blank"); // open link in new tab
});

console.log(link); // display the created link in the console
