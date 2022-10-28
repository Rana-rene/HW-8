fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json()) // Access and return response's JSON content
    .then(paint => {
      let tableElement = document.getElementById("paintings");
      // Iterate on the array
      paint.forEach(element => {
        tableElement.innerHTML += `<tr><td>${element.name}</td><td>${element.year}</td><td>${element.artist}</td></tr>`;
        
      });
    })



