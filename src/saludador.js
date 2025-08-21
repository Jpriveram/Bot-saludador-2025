// saludo.js
export function construirSaludo(nombre, genero, edad, idioma = "es", fecha = new Date()) {
    const hora = fecha.getHours();
  
    let saludo;
    if (idioma === "en") {
      saludo = hora < 12 ? "Good morning" : hora < 19 ? "Good afternoon" : "Good evening";
    } else { 
      saludo = hora < 12 ? "Buenos días" : hora < 19 ? "Buenas tardes" : "Buenas noches";
    }
  
    
    let tratamiento = "";
    const edadNum = parseInt(edad, 10);
  
    if (!isNaN(edadNum) && edadNum >= 30) {
      if (idioma === "en") {
        if (genero === "masculino" || genero === "m") tratamiento = " Mr.";
        else if (genero === "femenino" || genero === "f") tratamiento = " Ms.";
      } else { 
        if (genero === "masculino" || genero === "m") tratamiento = " señor";
        else if (genero === "femenino" || genero === "f") tratamiento = " señora";
      }
    }
  
    return `${saludo}${tratamiento} ${nombre}`;
  }
  