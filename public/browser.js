console.log("FRONT END java script ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item._reja}</span>
            <div> 
              <button 
                data-id="${item._id}" 
                class="edit-me btn btn-secondary btn-sm m-1">
                Ozgartirish
              </button>
              <button 
                data-id="${item._id}"  
                class="delete-me btn btn-danger btn-sm">
                Ochirish
              </button>
            </div>
          </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
        .post("create-item", { reja: createField.value })
        .then((response) => {
            document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus(); 
        })
        .catch((err) => {
            console.log("Iltimos qaytadan xarakat"); 
        });
});

document.addEventListener("click", function(e) {
    // Delete operation
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq Ochirmoqchimi siz?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();  // Fixed `parenElement`
                })
                .catch((err) => {
                    console.log("Iltimos qaytadan xarakat");
                });
        }
    }

    // Edit operation
    if (e.target.classList.contains("edit-me")) {
        alert("siz edit tugmasini bosdingiz");
    }
});
