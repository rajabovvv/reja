console.log("FRONT-END JavaScript ishga tushdi");

// Function to create HTML structure for each item
function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div> 
              <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm m-1">Ozgartirish</button>
              <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
            </div>
          </li>`;
}

// Get input field and list container
let createField = document.getElementById("create-field");
let itemList = document.getElementById("item-list");

// ✅ CREATE Operation
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            itemList.insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.error("Iltimos qaytadan xarakat", err);
        });
});

// ✅ DELETE & EDIT Operations
document.addEventListener("click", function (e) {
    // DELETE Operation
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq Ochirmoqchimi siz?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then(() => {
                    e.target.closest("li").remove();
                })
                .catch((err) => {
                    console.error("Iltimos qaytadan xarakat", err);
                });
        }
    }

    // EDIT Operation
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "O'zgartirish Kiriting!",
            e.target.closest("li").querySelector(".item-text").innerHTML
        );

        if (userInput) {
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_input: userInput,
                })
                .then(() => {
                    e.target.closest("li").querySelector(".item-text").innerHTML = userInput;
                })
                .catch((err) => {
                    console.error("Iltimos qaytadan xarakat", err);
                });
        }
    }
});
