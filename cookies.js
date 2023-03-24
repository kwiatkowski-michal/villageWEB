// Sprawdź, czy użytkownik już kliknął w przycisk ukrywający sekcję
const cookieAccepted = document.cookie.includes('cookieAccepted=true');

// Jeśli użytkownik nie kliknął jeszcze w przycisk, wyświetl toast
if (!cookieAccepted) {
  // Utwórz nowy element toasta
  const toastEl = document.createElement('div');
  toastEl.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');
  toastEl.innerHTML = `
    <div class="toast align-items-center" role="alert" data-bs-autohide="false" aria-live="polite" aria-atomic="true" id="cookie-toast">
      <div class="d-flex">
        <div class="toast-body">
          Korzystając z serwisu zgadzasz się na przetwarzanie danych osobowych zgodnie z <a style="color: black;" class="text-decoration-none f-montserrat fw-semibold" href="./cookies.html">polityką prywatności <i aria-hidden="true" class="bi bi-box-arrow-up-right"></i></a>
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;
  document.body.appendChild(toastEl);

  // Utwórz nowy obiekt toasta i wyświetl go
  const toast = new bootstrap.Toast(document.getElementById('cookie-toast'));
  toast.show();

  // Dodaj nasłuchiwanie na kliknięcie w przycisk zamykający toasta
  const closeButton = document.querySelector('#cookie-toast .btn-close');
  closeButton.addEventListener('click', () => {
    // Ukryj sekcję
    const section = document.querySelector('#section-to-hide');
    section.style.display = 'none';

    // Zapisz w pliku cookie, że użytkownik kliknął w przycisk
    document.cookie = 'cookieAccepted=true';

    // Ukryj toasta
    toast.hide();
  });
} else {
  // Jeśli użytkownik już kliknął w przycisk, ukryj sekcję
  const section = document.querySelector('#section-to-hide');
  section.style.display = 'none';
}
