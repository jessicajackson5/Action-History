// Create and Manage a History with Arrays and Objects in Typescript
/* Create a task manager
In this exercise, we'll create a basic history system using arrays
and objects in JavaScript. Imagine you have a list of actions a user
performs in an application, and you want to save those actions in a
history so you can view them later, delete them individually, or clear
the entire history. */
/* Objective
Create a history that can add, delete by ID, and clear actions in a history.
Use advanced methods of arrays like filter, find and findIndex to generate the history. */
/* Tasks
Create a data structure for the history:

The history will be an array called history, which will initially be empty.
Each action in the history will be an object with the following properties:
    id: A number that uniquely identifies each action.
    description: A brief description of the action.
    date: The date and time the action was added.
Create functions to manage the history:
    Add a new action to the history: This function will take an id and a description and add them as a new object to the history array. It should also record the current date and time. (This can be done with new Date().toISOString() )
    Delete an action from the history by ID: This function will take an ID as a parameter and delete the action with that ID from the history.
    Delete the entire history: This function will delete all actions from the history, leaving the array empty.
    Create a method to display the history:

This function will print all actions in the history to the console, showing their ID, description, and date.
*/
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    return Accion;
}());
var Historial = /** @class */ (function () {
    function Historial(historial) {
        if (historial === void 0) { historial = []; }
        this.id_counter = 0;
        this.historial = historial;
    }
    // Agregar una nueva acción al historial
    Historial.prototype.agregar = function (id, descripcion) {
        var nueva_accion = new Accion(id, descripcion, new Date().toISOString());
        this.historial.push(nueva_accion);
        this.id_counter = id + 1;
    };
    // Eliminar una accion del historial
    Historial.prototype.eliminar_accion = function (id) {
        var index = this.historial.findIndex(function (accion) { return accion.id === id; });
        if (index !== -1) {
            this.historial.splice(index, 1);
        }
        else
            console.log("Accion con ID: ".concat(id, " no encontrado"));
    };
    // Mostrar la historia
    Historial.prototype.mostrar = function () {
        if (this.historial.length === 0) {
            console.log("No hay acciones en el historial");
        }
        else
            this.historial.forEach(function (_i) {
                console.log("".concat(_i.id, ", ").concat(_i.descripcion, ", ").concat(_i.fecha));
            });
    };
    // Vaciar el historial
    Historial.prototype.eliminar_todo = function () {
        this.historial.length = 0;
    };
    return Historial;
}());
var historial = new Historial();
console.log("\nAgregar 3 acciones:");
historial.agregar(historial.id_counter, "User logged in");
historial.agregar(historial.id_counter, "User updated profile");
historial.agregar(historial.id_counter, "User logged out");
historial.mostrar();
console.log("\nEliminar accion con ID 1:");
historial.eliminar_accion(1);
historial.mostrar();
console.log("\nEliminar todo el historial:");
historial.eliminar_todo();
historial.mostrar();
