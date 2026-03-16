document.querySelector('#btnCalcular').addEventListener('click',CalcularRiesgo);
document.querySelector('#btnLimpiar').addEventListener('click',Limpiar);

function CalcularRiesgo(){
    const edad = parseFloat(document.getElementById('edad').value);
    const presion = parseFloat(document.getElementById('presion').value);
    const colesterol = parseFloat(document.getElementById('colesterol').value);
    const fumador = parseFloat(document.getElementById('fumador').value);

    let calificacion = 0;

    if(edad >= 45){
        calificacion = calificacion + 2
    }else if(edad >= 35){
        calificacion = calificacion + 1
    }else{
        calificacion = calificacion;
    }
    
    if(presion >= 140){
        calificacion = calificacion + 3;
    }else if(presion >= 120){
        calificacion = calificacion + 1;
    }else{
        calificacion = calificacion;
    }

    if(colesterol >= 240){
        calificacion = calificacion + 3;
    }else if(colesterol >= 200){
        calificacion = calificacion + 1;
    }

    if(fumador == 'si'){
        calificacion = calificacion + 3;
    }else{
        calificacion = calificacion;
    }

    if(calificacion <= 2){
        calificacion = 'Riesgo bajo';
        document.getElementById('textoResultado').textContent = calificacion;
        document.getElementById('resultado').style.backgroundColor = '#00FF00';
        document. getElementById('resultado').style.display = 'block';
        recomendacion1 = '<li>Está melo mijo</li>';
        document.getElementById('recomendaciones').append(recomendacion1);
        
    }else if(calificacion <= 5){
        calificacion = 'Riesgo Moderado';
        document.getElementById('textoResultado').textContent = calificacion;
        document.getElementById('resultado').style.backgroundColor = '#FFFF00';
        document. getElementById('resultado').style.display = 'block';
        recomendacion2 = '<li>Tome mas agua mijo</li>';
        document.getElementById('recomendaciones').append(recomendacion2);
    }else{
        calificacion = 'Riesgo Alto';
        document.getElementById('textoResultado').textContent = calificacion;
        document.getElementById('resultado').style.backgroundColor = '#E3001B';
        document. getElementById('resultado').style.display = 'block';
        recomendacion3 = '<li>No hace daño visitar al medico y cambiar habitos alimenticios</li>';
        document.createElement('recomendaciones').append("li");
    }
}
function Limpiar(){
    document.getElementById('edad').value= '';
    document.getElementById('presion').value= '';
    document.getElementById('colesterol').value= '';
    document.getElementById('fumador').value= '';
    document.getElementById('resultado').style.backgroundColor = '';
    document.getElementById('textoResultado').textContent = '';
}

