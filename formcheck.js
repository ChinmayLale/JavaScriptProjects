function checkform(){
    var name = document.getElementById('username').value;
    var address = document.getElementById('address').value;
    var mobile = document.getElementById('mobile').value;
    var age = document.getElementById('age').value;
    var gen = document.getElementById('gen').value;
    console.log("Useraname : "+name);
    console.log("Adress : "+address);
    console.log("mobile : "+mobile);
    console.log("age : "+age);
    console.log("Gender : "+gen);

    if(name==="" || address==="" || mobile=="" || age=="" || gen==""){
        alert("Required to fill all info")
    }
    else{
        if(mobile.length != 10){
            alert('Mobile should contain 10 digits')
        }
    }
}