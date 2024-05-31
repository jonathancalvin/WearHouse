async function AddCategory(ProductName) {
    try {
        await fetch("https://localhost:7268/api/Product/AddCategory", {
            method: "POST",
            body: JSON.stringify({
                ProductName: ProductName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(x => {
            if (x.status != 200) {
                alert("returned code = " + x.status + " And Not Success");
            }
            else {
                alert("Category berhasil ditambahkan");
            }
            window.location.reload();
        });
    } catch (e) {
        alert(e);
        throw e;
    }
}
async function EditCategory(id, NewProductName) {
    try {
        await fetch(`https://localhost:7268/api/Product/UpdateCategory/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                ProductName: NewProductName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(x => {
            if (x.ok) {
                alert("Category berhasil diubah");
            }
            else {
                alert("returned code = " + x.status + " And Not Success");
            }
            window.location.reload();
        });
    } catch (e) {
        alert(e);
        throw e;
    }
}
async function DeleteCategory(id) {
    try {
        await fetch(`https://localhost:7268/api/Product/DeleteCategory/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(x => {
            if (x.ok) {
                alert("Category berhasil dihapus");
            }
            else {
                alert("returned code = " + x.status + " And Not Success");
            }
            window.location.reload();
        })
    } catch (e) {
        alert(e);
        throw (e);
    }
}
async function Register(UserName, UserEmail, UserPassword) {
    try {
        await fetch("https://localhost:7268/api/User/Registration", {
            method: "POST",
            body: JSON.stringify({
                UserName: UserName,
                UserEmail: UserEmail,
                UserPassword: UserPassword
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => {
            if (r.status != 200) {
                alert("returned code = " + r.status + " And Not Success");
            }
            else {
                alert("Register in Berhasil");
            }
        });
        window.location.reload();
    } catch (e) {
        alert(e);
        throw e;
    }
}
async function Login(UserEmail, UserPassword) {
    try {
        await fetch(`https://localhost:7268/api/User/SearchUser?UserEmail=${UserEmail}&password=${UserPassword}`)
            .then(r => {
                return r.json();
            })
            .then(r => {
                //console.log("Ini r -> ");
                //console.log(r);
               if (r.status.statusCode == 200) {
                    alert("login sucessfull");
                    localStorage.setItem('userName', r.name);
                    window.location.href = "../File_HTML/dashboard.html";
                }
                else {
                    alert("Log In Failed");
                }
             })
    } catch (e) {
        alert(e);
        throw e;
   }
}