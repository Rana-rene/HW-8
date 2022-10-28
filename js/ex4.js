document.querySelector("form").addEventListener("submit", e => {  
    e.preventDefault();
    const tableElement = document.createElement("table");   
    const formData = new FormData(e.target);
    formData.forEach ((val,key) => { 
        //console.log(key,val)
        const TRElement = document.createElement("tr");
        const tableDataheader = document.createElement("td");
        const tableDatavalue = document.createElement("td");
        tableDataheader.textContent = key;
        tableDatavalue.textContent = val;
        TRElement.appendChild(tableDataheader);
        TRElement.appendChild(tableDatavalue);
        tableElement.appendChild(TRElement)
    });
    //const PElement = document.getElementById("result");

    document.getElementById("result").innerText = "";
    document.getElementById("result").appendChild(tableElement);
});

