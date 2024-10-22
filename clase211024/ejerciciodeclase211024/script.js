
   // Arreglo
        let tasks = [];

        // Función para agregar tarea
        const addTask = () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push(taskText); // Agregar tarea
                updateListaTareas(); // Actualizar
                console.log(tasks); // Mostrar
                taskInput.value = ''; // Limpiar
            }
        };

       
        const updateListaTareas = () => {
            ListaTareas.innerHTML = ''; // Limpiar la lista
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;

               
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = () => {
                    tasks.splice(index, 1); // Eliminar tarea
                    updateListaTareas(); // Actualizar visualmente
                    console.log(tasks); // Mostrar en consola
                };

                li.appendChild(deleteButton);
                ListaTareas.appendChild(li);
            });
        };

        // Evento para el botón de agregar tarea
        addTaskButton.onclick = addTask;