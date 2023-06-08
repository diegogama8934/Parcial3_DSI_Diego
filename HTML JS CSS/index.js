function addTask(){
    const input = document.getElementById('ipt-add-hw');
    const text = input.value;

    if(text.length){
        const list = document.getElementById('proceso');

        console.log(list);

        const newItem = document.createElement('div');
        newItem.setAttribute('class', 'task');

        const leftSide = document.createElement('div');
        leftSide.setAttribute('class', 'left-side');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('onchange', 'completed(event)')
        const label = document.createElement('label');
        label.textContent = text;

        const rightSide = document.createElement('div');
        rightSide.setAttribute('class', 'right-side');
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.setAttribute('class', 'editar-eliminar');
        btnEditar.setAttribute('onclick', 'editTask(event)')
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.setAttribute('class', 'editar-eliminar');
        btnEliminar.setAttribute('onclick', 'deleteTask(event)');

        rightSide.append(btnEditar, btnEliminar);
        leftSide.append(checkbox, label);
        newItem.append(leftSide, rightSide);

        console.log(newItem);

        list.appendChild(newItem);

        input.value = '';
    }
}

function completed(event){
    const value = event.target.checked;
    
    const list = document.getElementById('proceso');
    const aux = event.target.parentNode;
    const item = aux.parentNode;
    list.removeChild(item);

    const completedList = document.getElementById('completado');

    const completedItem = document.createElement('div');
    completedItem.setAttribute('class', 'complete-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.disabled = true;

    const label = document.createElement('label');
    label.textContent = aux.querySelector('label').textContent;
    label.setAttribute ('class', 'linea');

    completedItem.append(checkbox, label);
    completedList.appendChild(completedItem);
}

function deleteTask(event){
    const deletedItem = (event.target.parentNode.parentNode);

    const list = document.getElementById('proceso');
    list.removeChild(deletedItem);
}

function clearList(){
    const list = document.getElementById('completado');
    const completedItems = list.querySelectorAll("div[class='complete-item']")
    completedItems.forEach(element => {
        list.removeChild(element)
    });
}

function editTask(event) {
    const leftDiv  = event.target.parentNode.parentNode.querySelector("div[class='left-side']");
    console.log(leftDiv);
    const text = leftDiv.querySelector('label');
    text.contentEditable = true;
    text.focus();
}