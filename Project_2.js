function clearStorage(){
    if(confirm("Do You Want to Confirm ?")){
        console.log("Working....");
        localStorage.clear()
        updateData()
    }
}


function getAndUpdate(){
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    console.log("Title : "+tit+" Desciption : "+desc);

    if(localStorage.getItem('ItemsJson')==null){
        itemsJsonArray = [];
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('ItemsJson',JSON.stringify(itemsJsonArray));
    }
    else{
        itemsString = localStorage.getItem('ItemsJson');
        itemsJsonArray = JSON.parse(itemsString);
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem('ItemsJson',JSON.stringify(itemsJsonArray));
    }
    updateData();
}
function updateData(){
    if(localStorage.getItem('ItemsJson')==null){
        itemsJsonArray = [];
        localStorage.setItem('ItemsJson',JSON.stringify(itemsJsonArray));
    }
    else{
        itemsString = localStorage.getItem('ItemsJson');
        itemsJsonArray = JSON.parse(itemsString);
    }
    let tablebody = document.getElementById("tableBody");
    let str='';
    itemsJsonArray.forEach((element,index) => {
        str +=   `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button id='action' class="btn btn-primary" onclick="deleteData()">Delete</button></td>
        </tr>  
        `
    });
    tablebody.innerHTML = str;
}
function deleteData(itemIndex){
    console.log("Delete Item => "+itemIndex);
    console.log('Fetching Data Loding...');
    itemsString = localStorage.getItem('ItemsJson');
    itemsJsonArray = JSON.parse(itemsString);
    itemsJsonArray.splice(itemIndex,1);
    localStorage.setItem('ItemsJson',JSON.stringify(itemsJsonArray));
    updateData();
}

let a = document.getElementById('getlist');
a.addEventListener('click',getAndUpdate);
updateData();