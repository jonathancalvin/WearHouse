const openAddButton = document.getElementById('addButton');
//const openEditButton = document.querySelector('.editButton');
//const opendeleteButton = document.querySelector('.deleteButton');
const closePopUpButton = document.querySelector('.closeButton');
const overlay = document.getElementById('overlay');
function openPopUp(clss) {
    const popUpcontainer = document.querySelector(clss);
    popUpcontainer.classList.add('active');
    overlay.classList.add('active');
}
function closePopUp() {
    const popUpcontainer = document.querySelectorAll('.popUpContainer');
    popUpcontainer.forEach(p => {
        if (p.classList.contains('active')){
            console.log(p);
            p.classList.remove('active');
            console.log("setelah")
            console.log(p);
        }
    })
    overlay.classList.remove('active');
}
openAddButton.addEventListener('click', () => {
    openPopUp('.addContainer');
})
//openEditButton.addEventListener('click', () => {
//    openPopUp('.editContainer');
//})
//opendeleteButton.addEventListener('click', () => {
//    openPopUp('.deleteContainer');
//})
closePopUpButton.addEventListener('click', () => {
    closePopUp();
})


function addCategory() {
    var newCategory = document.querySelector('.addCategoryBox').value;
    console.log("halo");
    console.log(newCategory);
    if (newCategory == null) return;
    AddCategory(newCategory);
    closePopUp();
}

// call api category
var selectedProductId;
function SetSelectedProductId(ProductId, clss) {
    selectedProductId = ProductId;
    console.log(ProductId);
    openPopUp(clss);
}
$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7268/api/Product/GetAllProduct",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var category = '';
            no = 1;
            $.each(data, function (key, value) {
                console.log(value);
                console.log(value.productName);
                console.log(value.productId);
                category += `
                    <div class="content category-container">
                        <p>${no++}</p>
                        <p>${value.productName}</p>
                        <div>
                            <button class="editButton" onclick="SetSelectedProductId('${value.productId}', '.editContainer')">Edit</button>
                            <button class="deleteButton" onclick="SetSelectedProductId('${value.productId}', '.deleteContainer')">Delete</button>
                        </div>
                    </div>
                `
            }
            );
            $('#category').append(category);
        }
    });
});
function editCategory() {
    var newCategory = document.querySelector('.editCategoryBox').value;
    console.log("update");
    console.log(newCategory);
    console.log(selectedProductId);
    if (newCategory == null) return;
    if (selectedProductId == null) return;
    EditCategory(selectedProductId, newCategory);
}
function deleteCategory() {
    //
    console.log("Delete");
    console.log(selectedProductId);
    if (selectedProductId == null) return;
    DeleteCategory(selectedProductId)
}