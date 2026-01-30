// ============================================
// SISTEMA DE REGISTRO DE USUARIOS
// [CORREGIDO] Se eliminó información de versión, base de datos, credenciales hardcodeadas
// Las credenciales NUNCA deben estar en el código fuente
// ============================================

// [CORREGIDO] Se eliminaron variables globales con credenciales y API keys hardcodeadas
// Las API keys y credenciales deben manejarse en el backend o variables de entorno
const registros = []; // [CORREGIDO] Se eliminó var por const
let contador = 0; // [CORREGIDO] Se eliminó var por let

// [CORREGIDO] Se eliminó el objeto CONFIG con credenciales, contraseñas de admin y modo debug
// Configuración sensible debe estar en el servidor, no en el cliente

// [CORREGIDO] Se eliminaron console.log que exponían configuración sensible, credenciales y API keys

// Función principal de inicialización
const inicializar = () => { // [CORREGIDO] Uso de arrow function con const en lugar de declarar function (código viejo)
    // [CORREGIDO] Se eliminó console.log que exponía credenciales de admin

    // Event listener para el formulario
    const form = document.getElementById('registroForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            guardarRegistro();
        });
    }
}

// Función para guardar un registro
const guardarRegistro = () => { // [CORREGIDO] Uso de arrow function con const en lugar de declarar function (código viejo)
    // [CORREGIDO] Se eliminaron console.log que exponían datos personales sensibles (CURP, teléfono, email)

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()
    const apellido1 = document.getElementById('apellido1').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()
    const apellido2 = document.getElementById('apellido2').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()
    const telefono = document.getElementById('telefono').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()
    const curp = document.getElementById('curp').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()
    const email = document.getElementById('email').value.trim(); // [CORREGIDO] Se eliminó var por const y se añadió el uso de trim()

    // [CORREGIDO] Se añadieron validaciones para inputs vacíos
    if (nombre == "" || apellido1 == "" || apellido2 == "" || telefono == "" || curp == "" || email == "") {
        // [CORREGIDO] Se eliminó mensaje de error verboso que exponía estructura interna
        // (nombre de archivo, línea, nombre de tabla, procedimiento, cadena de conexión)
        alert("Por favor, ingresa todos los datos.");
        return;
    }

    // [CORREGIDO] Se eliminó código obsoleto comentado (validarTelefonoAntiguo)

    // Crear objeto de registro
    const nuevoRegistro = { // [CORREGIDO] Se eliminó var por const
        id: contador++,
        nombre,     // [CORREGIDO] Uso de Syntax sugar
        apellido1,
        apellido2,
        nombreCompleto: `${nombre} ${apellido1} ${apellido2}`, // [CORREGIDO] Template String es más limpio y seguro
        telefono,
        curp,
        email,
        fechaRegistro: new Date().toISOString()
        // [CORREGIDO] Se eliminó apiKey y sessionToken del objeto
        // Tokens de sesión deben generarse en el servidor, no en el cliente
    };

    // [CORREGIDO] Se eliminaron console.log que mostraban el objeto completo y tokens

    // Agregar al arreglo
    registros.push(nuevoRegistro);

    // [CORREGIDO] Se eliminaron console.log que mostraban regitros en memoria del cliente

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);

    // Limpiar formulario
    document.getElementById('registroForm').reset();

    // [CORREGIDO] Se eliminó console.log que mostraban el id del registro
}

// Función para agregar fila a la tabla
const agregarFilaTabla = (registro) => { // [CORREGIDO] Uso de arrow function con const en lugar de declarar function (código viejo)
    const tabla = document.getElementById('tablaRegistros'); // [CORREGIDO] Se eliminó var por const

    // [CORREGIDO] Se reemplazó innerHTML por createElement para prevenir XSS
    // innerHTML es vulnerable a inyección de scripts maliciosos
    const nuevaFila = document.createElement('tr'); // [CORREGIDO] Se eliminó var por const

    const celdaNombre = document.createElement('td'); // [CORREGIDO] Se eliminó var por const
    celdaNombre.textContent = registro.nombreCompleto;

    const celdaTelefono = document.createElement('td'); // [CORREGIDO] Se eliminó var por const
    celdaTelefono.textContent = registro.telefono;

    const celdaCurp = document.createElement('td'); // [CORREGIDO] Se eliminó var por const
    celdaCurp.textContent = registro.curp;

    const celdaEmail = document.createElement('td'); // [CORREGIDO] Se eliminó var por const
    celdaEmail.textContent = registro.email;

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaTelefono);
    nuevaFila.appendChild(celdaCurp);
    nuevaFila.appendChild(celdaEmail);

    tabla.appendChild(nuevaFila);

    // [CORREGIDO] Se eliminó console.log que mostraban el mensaje de Fila agregada
}

// [CORREGIDO] Se eliminó función enviarAServidor que exponía endpoints, tokens de autorización hardcodeados
// y mostraba payloads completos en console.log

// [CORREGIDO] Se eliminó código obsoleto comentado (autenticarUsuario, encriptarDatos)

// [CORREGIDO] Se eliminó función diagnosticoSistema que exponía información del sistema y credenciales

// [CORREGIDO] Se eliminó código obsoleto comentado (backupRegistros, restaurarBackup)

// [CORREGIDO] Se eliminó variable global innecesaria (ultimoRegistro)

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', () => { // [CORREGIDO] Uso de arrow function con const en lugar de declarar function (código viejo)
    // [CORREGIDO] Se eliminó console.log que mostraban el mensaje de DOM cargado
    inicializar();

    // [CORREGIDO] Se eliminó exposición de variables sensibles en window (registros, config, apiKey, dbConnection)
    // Exponer variables globales en window facilita ataques desde la consola del navegador
});

// [CORREGIDO] Se eliminó código obsoleto comentado (eliminarRegistro)

// [CORREGIDO] Se eliminaron console.log finales que exponían versión del sistema e información del desarrollador
