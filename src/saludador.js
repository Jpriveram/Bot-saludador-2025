export function construirSaludo(nombre,genero, fecha = new Date()) {
    const hora = fecha.getHours();
    let saludo = "Hola";
    
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 19) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    if (genero === "femenino") saludo += " señora";
    else if (genero === "masculino") saludo += " señor";  
    
  
    return `${saludo} ${nombre}`;
  }
  