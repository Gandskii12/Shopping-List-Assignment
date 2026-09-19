const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");

// Event ketika tombol Add Item diklik
addButton.addEventListener("click", function () {

    // Mengambil nilai dari input
    const itemName = itemInput.value.trim();

    // Mengecek apakah input kosong
    if (itemName === "") {
        alert("Please enter an item!");
        return;
    }

    // Membuat baris baru
    const row = document.createElement("tr");

    // Membuat kolom item
    const itemCell = document.createElement("td");
    itemCell.textContent = itemName;

    // Membuat kolom action
    const actionCell = document.createElement("td");

    // Membuat tombol Delete
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    // Event ketika tombol Delete diklik
    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    // Memasukkan tombol ke kolom action
    actionCell.appendChild(deleteButton);

    // Memasukkan kolom ke baris
    row.appendChild(itemCell);
    row.appendChild(actionCell);

    // Memasukkan baris ke dalam table
    shoppingList.appendChild(row);

    // Mengosongkan input
    itemInput.value = "";

    // Fokus kembali ke input
    itemInput.focus();
});

// Menambahkan item ketika menekan tombol Enter
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});
