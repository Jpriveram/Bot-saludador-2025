export function construirSaludo(nombre,genero,edad, fecha = new Date()) {
    const hora = fecha.getHours();
    let saludo = "Hola";
    
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 19) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    if (edad > 30) 
    {
        if (genero === "femenino") saludo += " señora";
        else if (genero === "masculino") saludo += " señor"; 
    }
     
    
  
    return `${saludo} ${nombre}`;
  }
  