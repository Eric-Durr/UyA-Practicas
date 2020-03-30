
//PREGUNTA: El json debe estar en el propio código, inicializando una variable, explica por qué se te exige este requisito
//RESPUESTA: Inicializamos el JSON mediante una variable porque de esta manera podemos transformarlo tanto a String
//como a un objeto mediante los métodos .stringify() y .parse() y así poder manipularlo y acceder a sus atributos.

var empleados = '{ "empleado" : [' +
'{ "DNI":"75463324P" , "AñoDeNacimiento":"1990" , "FechaIngreso":"03/09/2014" , "PlusDeProductividad":"0.3" , "PlusDeAntiguedadBruto":"0.2" , "SueldoBase":"1200" },' +
'{ "DNI":"81664122A" , "AñoDeNacimiento":"1984" , "FechaIngreso":"30/05/2010" , "PlusDeProductividad":"0.15" , "PlusDeAntiguedadBruto":"0.3" , "SueldoBase":"1500" },' +
'{ "DNI":"85362582G" , "AñoDeNacimiento":"1995" , "FechaIngreso":"12/01/2017" , "PlusDeProductividad":"0.4" , "PlusDeAntiguedadBruto":"0.1" , "SueldoBase":"1100" } ]}';

var obj = JSON.parse(empleados);

calcularEdad();
calcularSueldo();

function calcularEdad()
{
  var edad;
  for (let i = 0; i < 3; i++)
  {
    var añoNacimiento = obj.empleado[i].AñoDeNacimiento;
    var dni = obj.empleado[i].DNI;
    edad = 2020 - añoNacimiento;
    console.log("La edad de",dni,"es:",edad);
  }
}

function calcularSueldo()
{
  var sueldo1, sueldo2, sueldoTotal;
  for (let i = 0; i < 3; i++)
  {
    var plusProductividad = parseFloat(obj.empleado[i].PlusDeProductividad);
    var plusAntiguedad = parseFloat(obj.empleado[i].PlusDeAntiguedadBruto);
    var sueldoBase = parseInt(obj.empleado[i].SueldoBase);
    var dni = obj.empleado[i].DNI;

    sueldo1 = sueldoBase * plusProductividad;
    sueldo2 = sueldoBase * plusAntiguedad;
    sueldoTotal = sueldoBase + sueldo1 + sueldo2;

    console.log("El sueldo total sumando los plus de productividad y antigüedad de",dni,"es:",sueldoTotal);
  }
}