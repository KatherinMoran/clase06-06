/*Crear una Lista Dinámica con un Bucle for manipulando el DOM
Crear una lista desordenada (ul) en un documento HTML y añadirle elementos de lista (li) 
de forma dinámica utilizando js y un bucle for.*/ 

let list = document.getElementById('lista');
for (let i = 0; i < 5; i++)
    {
        let newElement = document.createElement('li');
        newElement.textContent = `Elemento ${i}`;
        list.appendChild(newElement);
    }


     