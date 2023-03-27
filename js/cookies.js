const cookieAccepted = document.cookie.includes("cookieAccepted=true");
if (!cookieAccepted) {
  const toastEl = document.createElement("div");
  toastEl.classList.add(
    "toast-container",
    "position-fixed",
    "bottom-0",
    "end-0",
    "p-3"
  );
  toastEl.innerHTML = `
    <div class="toast align-items-center dark-shadow-cookies" role="alert" data-bs-autohide="false" aria-live="polite" aria-atomic="true" id="cookie-toast">
      <div class="d-flex">
        <div class="toast-body">
          Korzystając z serwisu zgadzasz się na przetwarzanie danych osobowych zgodnie z <a style="color: black;" class="text-decoration-none f-montserrat fw-semibold" href="./cookies.html">polityką prywatności <i aria-hidden="true" class="bi bi-box-arrow-up-right"></i></a>
        </div>
        <button type="button" class="btn-close me-3 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;
  document.body.appendChild(toastEl);
  const toast = new bootstrap.Toast(document.getElementById("cookie-toast"));
  toast.show();
  const closeButton = document.querySelector("#cookie-toast .btn-close");
  closeButton.addEventListener("click", () => {
    const section = document.querySelector("#cookie-toast");
    section.style.display = "none";
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    document.cookie =
      "cookieAccepted=true; expires=" +
      expirationDate.toUTCString() +
      "; path=/";
    toast.hide();
  });
}
