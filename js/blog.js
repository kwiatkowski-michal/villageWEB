fetch("dokumenty.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const album = doc.querySelector(".album");
    const cards = album.querySelectorAll(".card");
    const btns = album.querySelectorAll(".btn");
    const smalls = Array.from(album.querySelectorAll("small")).map(
      (small) => small.innerHTML
    );
    for (let i = 0; i < 3; i++) {
      const card = cards[i];
      const id = card.id;
      const small = smalls[i];
      const btnSection = Array.from(btns)
        .filter((btn) => btn.closest(".card") === card)
        .map((btn) => btn.outerHTML)
        .join("");
      const container = document.createElement("div");
      container.innerHTML = `
      <div>
        ${id}
        <small class="text-white-50">
          ${small}
        </small><br />
        ${btnSection}
      </div>
    `;
      document.getElementById("blog").appendChild(container.firstElementChild);
    }
    const docs = document.getElementById("blog");
    const btnsToUpdate = docs.querySelectorAll(".btn");
    btnsToUpdate.forEach((btn) => {
      btn.className =
        "btn btn-sm mt-2 me-2 btn-outline-light f-montserrat fw-semibold";
    });
    const more = document.createElement("a");
    more.href = "./dokumenty.html";
    more.className = "btn btn-main-2 btn-lg px-4";
    more.innerHTML = 'Zobacz więcej';

    const moreDiv = document.createElement("div");
    moreDiv.className = "mt-2";
    moreDiv.appendChild(more);

    docs.appendChild(moreDiv);
  });
