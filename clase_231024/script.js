let task = ["comprar", "estudiar", "Limpiar la casa"];
console.log("Lista de tareas" ,task);
task.push ("ir a la escuela");
task.splice(3,1);
task.push("ir a casa");

//************USANDO FOREACH****************

let tasks = ["comprar", "estudiar", "Limpiar la casa"];
task.forEach((task,index) =>
{
    console.log(`Tarea $(index) $(task)`);
})
