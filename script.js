
/*var*/

/*functions*/

function AddTask()
{
	debugger;  // <-- the debugger stops here
	let input = document.getElementById('txtTask'); 
	let list = document.getElementById('lstTask');
	let li = document.createElement('li');				
	let btnTask = document.getElementById('btnTask');
	
	let size = document.getElementsByTagName('li').length;	
	let space = "";
	let tablaCompleta = false;

	if ( (input.value) == space)
	{
		window.alert("Ingresa tarea por favor.");	
	}
	else
	{
		btnDelete.disabled = false;	
		
		if (size == 3 ) /*  == 29 */
		{
			window.alert("Se agrego la tarea numero 30.");
			tablaCompleta=true;
		}	
		if(tablaCompleta == true )
		{
				/* desabilitar el btn de add task  .
				se debe habilitar cuando el nro de tareas sea <=29 */
				btnTask.disabled = true;
		}
		else
		{
			li.innerText = input.value;
			li.setAttribute('id', input.value);
			list.appendChild(li);			
		}			
	}
}

function DeleteTask()
{		
    let input = document.getElementById('txtTask');
	let space = "";
	let list = document.getElementById('lstTask');	
	let size =  document.getElementsByTagName('li').length;
	let selected_item = document.getElementById(input.value);  
	let btnDelete = document.getElementById('btnDelete');
	
	if (size == 0)
	{
		/* No hay elementos en la lista*/
		btnDelete.disabled = true;
		window.alert("No hay tareas a Borrar.");
		
	}
	else
	{
		if ( input.value == space)
		{
			window.alert("Ingrese tarea a Borrar.");
		}
		else
		{
			/* se debe validar que el input sea una tarea que se encuentra en la lista */
			list.removeChild(selected_item);			
			window.alert("Se borro la tarea exitosamente.");
			if (size <=3 /* 28 */ )
			{
				btnTask.disabled = false;
			}
		}
	}
	
}

function SearchTask()
{
	let size = document.getElementsByTagName('li').length;	
	for (var i = 0; i < size; i++)
	{
		/* recorrer los hijos de list y verificar si es igual al input que se desea eliminar */
	}
}
