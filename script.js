
const actividades = [
    {
        nombre: "Actividad 1: Selección múltiple",
        preguntas: [
            {
                pregunta: "¿Cuál es la parte más larga de una guía turística?",
                opciones: ["La portada", "El índice", "El desarrollo", "La introducción", "La conclusión"],
                correcta: 2,
                explicacion: "El desarrollo contiene la mayor cantidad de información."
            },
            {
                pregunta: "¿En qué parte aparece el título y la imagen principal?",
                opciones: ["El índice", "La portada", "La conclusión", "El desarrollo", "La introducción"],
                correcta: 1,
                explicacion: "La portada presenta el título y la imagen principal."
            },
            {
                pregunta: "¿Qué parte permite encontrar rápidamente los temas y sus páginas?",
                opciones: ["La introducción", "La portada", "La conclusión", "El índice", "El desarrollo"],
                correcta: 3,
                explicacion: "El índice organiza los temas y sus páginas."
            },
            {
                pregunta: "¿En qué parte se presenta brevemente el destino turístico?",
                opciones: ["La introducción", "La portada", "El desarrollo", "El índice", "La conclusión"],
                correcta: 0,
                explicacion: "La introducción presenta brevemente el destino."
            },
            {
                pregunta: "¿En qué parte se encuentra la mayor cantidad de información?",
                opciones: ["La portada", "El índice", "La conclusión", "La introducción", "El desarrollo"],
                correcta: 4,
                explicacion: "El desarrollo reúne la información más amplia."
            },
            {
                pregunta: "¿Qué parte contiene horarios, precios y direcciones?",
                opciones: ["La portada", "La información práctica", "La conclusión", "El índice", "La introducción"],
                correcta: 1,
                explicacion: "La información práctica contiene horarios, precios y direcciones."
            },
            {
                pregunta: "¿En qué parte se invita al lector a conocer el destino?",
                opciones: ["El índice", "La portada", "La conclusión", "El desarrollo", "La introducción"],
                correcta: 2,
                explicacion: "La conclusión puede cerrar la guía invitando a visitar el destino."
            }
        ]
    },
    {
        nombre: "Actividad 2: Identifica la afirmación correcta",
        preguntas: [
            {
                pregunta: "¿Cuál es el objetivo principal de una guía turística?",
                opciones: ["Enseñar a cocinar", "Orientar al visitante sobre un destino", "Vender vehículos", "Contar noticias", "Explicar matemáticas"],
                correcta: 1,
                explicacion: "Una guía turística informa y orienta a los visitantes."
            },
            {
                pregunta: "¿Qué información puede ofrecer una guía turística?",
                opciones: ["Solo chistes", "Contraseñas", "Lugares de interés y servicios", "Videojuegos", "Canciones"],
                correcta: 2,
                explicacion: "Puede incluir atractivos, transporte, alojamiento y servicios."
            },
            {
                pregunta: "¿Cuál es una característica de una buena guía turística?",
                opciones: ["Información clara y organizada", "Datos desordenados", "Lugares inventados", "Información confusa", "No tener imágenes"],
                correcta: 0,
                explicacion: "La información debe ser clara, útil y organizada."
            },
            {
                pregunta: "¿Qué elemento ayuda a localizar lugares?",
                opciones: ["Una receta", "Un mapa", "Una canción", "Una novela", "Un calendario escolar"],
                correcta: 1,
                explicacion: "Los mapas ayudan a localizar los lugares turísticos."
            },
            {
                pregunta: "¿A quién está dirigida una guía turística?",
                opciones: ["Solo a médicos", "Solo a deportistas", "A viajeros y visitantes", "A mecánicos", "A astronautas"],
                correcta: 2,
                explicacion: "Está dirigida principalmente a personas que desean conocer un destino."
            }
        ]
    },
    {
        nombre: "Actividad 3: Completa la idea",
        preguntas: [
            {
                pregunta: "Una guía turística sirve para informar y ______ al visitante.",
                opciones: ["confundir", "orientar", "asustar", "distraer", "castigar"],
                correcta: 1,
                explicacion: "Una guía turística informa y orienta al visitante."
            },
            {
                pregunta: "La ______ contiene el título y la imagen principal.",
                opciones: ["portada", "conclusión", "introducción", "despedida", "bibliografía"],
                correcta: 0,
                explicacion: "La portada presenta el título y la imagen principal."
            },
            {
                pregunta: "El ______ permite encontrar los temas de la guía.",
                opciones: ["desarrollo", "índice", "mapa climático", "epílogo", "prólogo"],
                correcta: 1,
                explicacion: "El índice muestra los temas y sus páginas."
            },
            {
                pregunta: "Los ______ ayudan a ubicar los lugares turísticos.",
                opciones: ["mapas", "poemas", "chistes", "cuentos", "refranes"],
                correcta: 0,
                explicacion: "Los mapas muestran la ubicación de los lugares."
            },
            {
                pregunta: "Una guía turística debe tener información ______ y organizada.",
                opciones: ["confusa", "inventada", "clara", "incompleta", "secreta"],
                correcta: 2,
                explicacion: "La información clara y organizada facilita la visita."
            }
        ]
    }
];

let actividadActual = 0;
let preguntaActual = 0;
let puntos = 0;
let respondida = false;

const inicio = document.getElementById("inicio");
const actividad = document.getElementById("actividad");
const resultado = document.getElementById("resultado");
const nombreActividad = document.getElementById("nombreActividad");
const contador = document.getElementById("contador");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");
const siguiente = document.getElementById("siguiente");
const relleno = document.getElementById("relleno");

document.getElementById("comenzar").addEventListener("click", () => {
    actividadActual = 0;
    preguntaActual = 0;
    puntos = 0;
    inicio.classList.add("oculto");
    resultado.classList.add("oculto");
    actividad.classList.remove("oculto");
    mostrarPregunta();
});

function mostrarPregunta() {
    respondida = false;

    const datos = actividades[actividadActual];
    const item = datos.preguntas[preguntaActual];

    nombreActividad.textContent = datos.nombre;
    contador.textContent = `Pregunta ${preguntaActual + 1} de ${datos.preguntas.length}`;
    pregunta.textContent = item.pregunta;
    opciones.innerHTML = "";
    mensaje.textContent = "";
    mensaje.className = "";
    siguiente.disabled = true;
    siguiente.textContent = preguntaActual === datos.preguntas.length - 1
        ? "Terminar actividad"
        : "Siguiente pregunta";

    const totalPreguntas = actividades.reduce((total, act) => total + act.preguntas.length, 0);
    const completadas = actividades.slice(0, actividadActual).reduce((total, act) => total + act.preguntas.length, 0) + preguntaActual;
    relleno.style.width = `${(completadas / totalPreguntas) * 100}%`;

    item.opciones.forEach((texto, indice) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.textContent = `${String.fromCharCode(65 + indice)}) ${texto}`;
        boton.addEventListener("click", () => comprobarRespuesta(indice, boton));
        opciones.appendChild(boton);
    });
}

function comprobarRespuesta(indice, botonElegido) {
    if (respondida) return;

    const item = actividades[actividadActual].preguntas[preguntaActual];
    const botones = opciones.querySelectorAll(".opcion");

    if (indice === item.correcta) {
        respondida = true;
        puntos++;
        botonElegido.classList.add("correcta");
        mensaje.textContent = `¡Correcto! ${item.explicacion}`;
        mensaje.className = "bueno";
        botones.forEach(boton => boton.disabled = true);
        siguiente.disabled = false;
        document.body.classList.remove("flash-bad");
        document.body.classList.add("flash-good");
        setTimeout(() => document.body.classList.remove("flash-good"), 350);
    } else {
        botonElegido.classList.add("incorrecta");
        botonElegido.disabled = true;
        mensaje.textContent = "¡Ups! Esa no es la correcta. Intenta otra vez.";
        mensaje.className = "malo";
        document.body.classList.remove("flash-good");
        document.body.classList.add("flash-bad");
        setTimeout(() => document.body.classList.remove("flash-bad"), 350);
    }
}

siguiente.addEventListener("click", () => {
    if (!respondida) return;

    preguntaActual++;

    if (preguntaActual >= actividades[actividadActual].preguntas.length) {
        actividadActual++;
        preguntaActual = 0;

        if (actividadActual >= actividades.length) {
            mostrarResultado();
            return;
        }
    }

    mostrarPregunta();
});

function mostrarResultado() {
    actividad.classList.add("oculto");
    resultado.classList.remove("oculto");

    const total = actividades.reduce((suma, act) => suma + act.preguntas.length, 0);
    document.getElementById("puntuacion").textContent =
        `Conseguiste ${puntos} de ${total} puntos. ¡Buen trabajo!`;
    relleno.style.width = "100%";
}

document.getElementById("reiniciar").addEventListener("click", () => {
    resultado.classList.add("oculto");
    inicio.classList.remove("oculto");
});
