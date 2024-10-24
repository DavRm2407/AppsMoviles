
   // Arreglo
 let tareas = [];

        // Función para agregar tarea
        const añadirTarea = () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tareas.push(taskText); // Agregar tarea
                updateListaTareas(); // Actualizar
                console.log(tareas); // Mostrar
                taskInput.value = ''; // Limpiar
            }
        };

       
        const updateListaTareas = () => {
            ListaTareas.innerHTML = ''; // Limpiar la lista
            tareas.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;

               
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.onclick = () => {
                    tareas.splice(index, 1); // Eliminar tarea
                    updateListaTareas(); // Actualizar visualmente
                    console.log(tareas); // Mostrar en consola
                };

                li.appendChild(deleteButton);
                ListaTareas.appendChild(li);
            });
        };

        // Evento para el botón de agregar tarea
        añadirTareaButton.onclick = añadirTarea;


