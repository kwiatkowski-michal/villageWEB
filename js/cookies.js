if (!document.cookie.includes("cookieAccepted=true")) {
  const toastDiv= `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div class="toast align-items-center dark-shadow-cookies" role="alert" data-bs-autohide="false" aria-live="polite" aria-atomic="true" id="cookie-toast">
        <div class="d-flex">
          <div class="toast-body">
            Korzystając z serwisu zgadzasz się na przetwarzanie danych osobowych zgodnie z <a style="color: black;" class="text-decoration-none f-main fw-bold" href="./cookies.html">polityką prywatności <i aria-hidden="true" class="bi bi-box-arrow-up-right"></i></a>
          </div>
          <button type="button" class="btn btn-close me-3 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", toastDiv);
  const toastElement = document.getElementById("cookie-toast");
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
  
  const closeButton = document.querySelector("#cookie-toast .btn-close");
  closeButton.addEventListener("click", () => {
    toast.hide();
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    document.cookie = `cookieAccepted=true; expires=${now.toUTCString()}; path=/`;
    toastElement.style.display = "none";
  });
}
