let formtk = document.getElementsByName('formtk')[0],
	total = document.getElementById('valor');	
	error = "";
let cant, tipo, imp; 

let validar = function(val){	
	validarCantidad(val);	
	if(error != ""){
		alert(error);
		error = "";
	}
	//para mostrar el total 
	 total.innerText=imp ;

}
let validarCantidad = function(val){
	if(formtk.cantidad.value <= 0)
	  {error += "Cantidad debe ser mayo a 0\n";} 
	else{
		cant = formtk.cantidad.value;
		tipo = formtk.categoria.value;
		switch (tipo) {
			  case '0':	
			  	imp = cant * 200 * 20 / 100;		    
			    break;
			  case '1':
			    imp = cant * 200 * 50 / 100;
			    break;
			  case '2':
			    imp = cant * 200 * 85 / 100;
			    break;
			  default:
			    imp = cant * 200 * 20 / 100;
			    break;
			}
		}
	val.preventDefault();
}

let borrarTodo = function(){	
	total.innerText="" ;
}

formtk.addEventListener("submit", validar);
