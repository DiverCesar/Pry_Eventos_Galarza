let keypressCount = 0;

function validarFormulario(event) {
  const inputNombre = document.getElementById('username');
  const span = document.getElementById('usernameMsg');
  const valor = inputNombre.value.trim();
  const nombreValido = /^[A-Za-z ]{3,}$/.test(valor);

  if (!nombreValido) {
    event.preventDefault();
    span.innerText = '❗ Corrige tu nombre antes de enviar';
    span.classList.remove('text-success');
    span.classList.add('text-danger');
    alert('No puedes enviar: nombre inválido');
    return;
  }

  span.classList.remove('text-danger');
  span.classList.add('text-success');
  alert('🎉 ¡Registro exitoso!');
}

function resetMensajes() {
  document.querySelectorAll('.small').forEach(m => m.innerText = '');
  keypressCount = 0;
  const prog = document.getElementById('globalProgress');
  if (prog) prog.value = 0;
  const colorInput = document.getElementById('favcolor');
  if (colorInput) colorInput.value = '#000000';
  document.body.style.backgroundColor = '#ffffff';
  if (!resetMensajes.alertShown) {
    alert('Se reiniciaron todos los mensajes');
    resetMensajes.alertShown = true;
    setTimeout(() => {
      resetMensajes.alertShown = false;
    }, 500);
  }
}

function globalOnInput(event) {
  const target = event.target;
  if (!target.value) return; 

  const prog = document.getElementById('globalProgress');
  if (!prog) return;

  if (prog.value < prog.max) {
    prog.value = +prog.value + 5;
  }
}


function globalOnChange(event) {
  const id = event.target.id + 'Msg';
  const msg = document.getElementById(id);
  if (msg) {
    msg.style.opacity = 1;
  }
}

function cargarNombre(elem) {
  if (elem.value !== '') {
    document.getElementById('usernameMsg').innerText = `✍️ Tu nombre: ${elem.value}`;
  }
}

function verificarNombre(elem) {
  if (elem.value.length > 2) {
    const m = document.getElementById('usernameMsg');
    m.innerText = '✔️ Nombre verificado';
    m.classList.replace('text-danger','text-success');
  }
}

function validarNombre(elem) {
  const m = document.getElementById('usernameMsg');
  if (/^[A-Za-z ]+$/.test(elem.value)) {
    m.innerText = '✅ Nombre válido';
    m.classList.remove('text-danger');
    m.classList.add('text-success');
  } else {
    m.innerText = '❌ Nombre inválido';
    m.classList.remove('text-success');
    m.classList.add('text-danger');
  }
}

function inicioNombre(elem) {
  if (true) {
    document.getElementById('usernameMsg').innerText = '🔍 Escribe tu nombre';
  }
}

function finalNombre(event) {
  if (event.key === 'Enter') {
    document.getElementById('usernameMsg').innerText = '🎉 ¡Listo!';
  }
}

function contarTeclas(event) {
  if (true) {
    keypressCount++;
    document.getElementById('usernameMsg').innerText = `⎆ Has presionado ${keypressCount}`;
  }
}

function cargarEmail(elem) {
  if (elem.value !== '') {
    document.getElementById('emailMsg').innerText = '📩 Escribe tu email';
  }
}

function verificarEmail(elem) {
  const mf = document.getElementById('emailMsgF');
  if (elem.value.includes('@')) {
    mf.innerText = '✅ @ valido';
    mf.classList.remove('text-danger');
    mf.classList.add('text-success');
  } else {
    mf.innerText = '❌ @ invalido';
    mf.classList.remove('text-success');
    mf.classList.add('text-danger');
  }
}

function validarEmail(elem) {
  const m = document.getElementById('emailMsg');
  
  if (elem.value.includes('@') && elem.value.includes('.')) {
    m.innerText = '✅ Formato correcto';
    m.classList.remove('text-danger');
    m.classList.add('text-success');
  } else {
    m.innerText = '❌ Formato incorrecto';
    m.classList.remove('text-success');
    m.classList.add('text-danger');
  }
}


function cargarEdad(elem) {
  if (elem.value) {
    document.getElementById('ageMsgM').innerText = `Edad ingresada: ${elem.value}`;
  }
}

function verificarEdad(elem) {
  const msgf = document.getElementById('ageMsgF');
  if (elem.value >= 5 && elem.value < 18) {
    msgf.innerText = '⚠️ Necesitas permiso de un adulto';
    msgf.classList.remove('text-success');
    msgf.classList.add('text-warning');
  } else {
    if (elem.value >= 18 && elem.value <= 99) {
      msgf.innerText = '✅ Edad adulta suficiente';
      msgf.classList.remove('text-warning');
      msgf.classList.add('text-success');
    }
  }
}

function validarEdad(event) {
  const elem = event.target;
  const msg = document.getElementById('ageMsg');
  if (elem.value < 5 || elem.value > 99) {
    msg.innerText = '❌ Edad fuera de rango';
    msg.classList.remove('text-success');
    msg.classList.add('text-danger');
  } else {
    msg.innerText = '✅ Edad válida';
    msg.classList.remove('text-danger');
    msg.classList.add('text-success');
  }
}

function contarPwd(event) {
  if (event.key) {
    document.getElementById('pwdMsg').innerText = `Tecla: ${event.key}`;
  }
}

function validarPwdOnKeyUp(event) {
  const elem = event.target;
  const msg = document.getElementById('pwdMsgF');
  if (elem.value.length < 8) {
    msg.innerText = '❗ Muy corta';
    msg.classList.remove('text-success');
    msg.classList.add('text-danger');
  } else {
    msg.innerText = '✅ Buena longitud';
    msg.classList.remove('text-danger');
    msg.classList.add('text-success');
  }
}

function validarPwd(event) {
  const elem = event.target;
  const msg = document.getElementById('pwdMsg');
  if (/[A-Z]/.test(elem.value) && /\d/.test(elem.value)) {
    msg.innerText = '🔒 Contraseña fuerte';
    msg.classList.remove('text-dark');
    msg.classList.add('text-primary');
  } else {
    msg.innerText = '⚠️ Contraseña débil';
    msg.classList.remove('text-primary');
    msg.classList.add('text-dark');
  }
}

function verificarFecha(elem) {
  if (elem.value) {
    document.getElementById('dateMsg').innerText = `Fecha: ${elem.value}`;
  }
}

function validarFecha(elem) {
  const m = document.getElementById('dateMsg');
  const birthDate = new Date(elem.value);
  const today = new Date();

  if (birthDate > today) {
    m.innerText = '❌ Error: Fecha en el futuro';
    m.classList.remove('text-success');
    m.classList.remove('text-warning');
    m.classList.add('text-danger');
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff   = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age >= 5) {
    m.innerText = `✅ ¡Acceso concedido compañero de ${age} años!`;
    m.classList.remove('text-danger');
    m.classList.remove('text-warning');
    m.classList.add('text-success');
  } else {
    m.innerText = '⚠️ Alerta: Debes tener al menos 5 años';
    m.classList.remove('text-success');
    m.classList.remove('text-danger');
    m.classList.add('text-warning');
  }
}


function inicioFecha(elem) {
  if (true) document.getElementById('dateMsg').innerText = '🔎 Selecciona fecha';
}

function verificarHora(elem) {
  if (elem.value) document.getElementById('timeMsg').innerText = `Hora: ${elem.value}`;
}

function validarHora(elem) {
  const m = document.getElementById('timeMsg');
  if (!elem.value) {
    m.innerText = '❌ Necesita hora';
    m.classList.remove('text-success');
    m.classList.add('text-danger');
  } else {
    m.innerText = '✅ Hora válida';
    m.classList.remove('text-danger');
    m.classList.add('text-success');
  }
}

function verificarArchivo(elem) {
  const m = document.getElementById('fileMsg');
  if (elem.files.length === 0) {
    if (true) {
      m.innerText = '❌ Sin avatar';
      m.classList.remove('text-success');
      m.classList.add('text-black');
    }
  } else {
    m.innerText = '🖼️ Avatar listo';
    m.classList.remove('text-black');
    m.classList.add('text-success');
    mostrarPreview(elem);
  }
}

function clickArchivo(elem) {
  if (true) document.getElementById('fileMsg').innerText = '📂 Clic avatar';
}

function blurArchivo(elem) {
  const m = document.getElementById('fileMsg');
  if (elem.files.length === 0) {
    if (true) m.innerText = '❌ Sin cargar archivo aun'; m.classList.remove('text-success'); m.classList.add('text-black');
  } else {
    m.innerText = '🖼️ Archivo finalmente listo';
    mostrarPreview(elem);
  }
}


function mostrarPreview(elem) {
  const preview = document.querySelector('.avatar-preview');
  const file = elem.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    preview.classList.add('active');
  }
}

function cargarVolumen(elem) {
  if (true) document.getElementById('volumeMeter').value = elem.value;
}

function verificarVolumen(elem) {
  const meter = document.getElementById('volumeMeter');
  const status = document.getElementById('volumeStatus');

  meter.classList.remove('bg-success', 'bg-danger');
  status.classList.remove('text-success', 'text-danger');

  if (elem.value < 50) {
    meter.classList.add('bg-success');
    status.innerHTML = "✅ Notificacion: Volumen perfecto";
    status.classList.add('text-success');
  } else {
    meter.classList.add('bg-danger');
    status.innerHTML = "⚠️ Alerta: Volumen muy alto";
    status.classList.add('text-danger');
  }
}


const namedColors = {
  negro: '#000000',
  blanco: '#ffffff',
  rojo:   '#ff0000',
  verde: '#008000',
  azul:  '#0000ff',
  amarillo:'#ffff00',
  naranja:'#ffa500',
  morado:'#800080',
  rosado:  '#ffc0cb',
  gris:  '#808080',
  celeste:  '#00ffff',
  magenta:'#ff00ff',
  cafe: '#a52a2a'
};
function hexToRgb(hex) {
  const [r,g,b] = hex.replace('#','').match(/.{2}/g).map(h=>parseInt(h,16));
  return {r,g,b};
}
function colorDistance(c1, c2) {
  return Math.sqrt(
    Math.pow(c1.r - c2.r,2) +
    Math.pow(c1.g - c2.g,2) +
    Math.pow(c1.b - c2.b,2)
  );
}
function getClosestNamedColor(hex) {
  const rgb = hexToRgb(hex);
  let closest = null, minDist = Infinity;
  for (const [name, value] of Object.entries(namedColors)) {
    const dist = colorDistance(rgb, hexToRgb(value));
    if (dist < minDist) {
      minDist = dist;
      closest = { name, hex: value };
    }
  }
  return closest;
}

function cargarColor(elem) {
  const msg = document.getElementById('favcolorMsg');
  const hex = elem.value;
  msg.innerText = `Color seleccionado en ${hex}`;
  msg.style.color = hex;
}
function verificarColor(elem) {
  const msg = document.getElementById('favcolorMsg');
  const hex = elem.value;
  const closest = getClosestNamedColor(hex);
  
  msg.innerText = `Tu color favorito es ${closest.name}`;
  msg.style.color = closest.hex;
}

function cargarTelefono(elem) {
  const label = document.getElementById('phoneLabel');
  if (elem.value) {
    label.innerText = `Teléfono ${elem.value}`;
    elem.classList.remove('is-invalid');
  } else {
    label.innerText = 'Teléfono';
  }
}

function validarTelefono(event) {
  const elem = event.target;
  const label = document.getElementById('phoneLabel');
  if (!/^[0-9+ ]+$/.test(elem.value)) {
    elem.classList.add('is-invalid');
    label.innerText = `Teléfono sin datos`;
  } else {
    elem.classList.remove('is-invalid');
    label.innerText = `Teléfono +593 ${elem.value}`;
  }
}

function cargarURL(elem) {
  const label = document.getElementById('websiteLabel');
  if (elem.value) {
    elem.classList.remove('is-invalid');
    label.innerText = `Página web: ${elem.value}`;
  } else {
    label.innerText = 'Página web';
  }
}

function validarURL(elem) {
  const label = document.getElementById('websiteLabel');
  const url = elem.value.trim();

  elem.classList.remove('is-invalid');
  label.classList.remove('text-danger', 'text-success');

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    elem.classList.add('is-invalid');
    label.innerText = `URL inválida: ${url}`;
    label.classList.add('text-danger');
  } else {
    label.innerText = `Página web con URL válida: ${url}`;
    label.classList.add('text-success');
  }
}

let selectedInterests = [];
const placeClicks = {};

function clickCheckbox(elem) {
  const place = elem.value;

  if (!placeClicks[place]) {
    placeClicks[place] = 0;
  }
  placeClicks[place]++;

  let maxCount = 0;
  let favorite = '';
  for (const key in placeClicks) {
    if (placeClicks[key] > maxCount) {
      maxCount = placeClicks[key];
      favorite = key;
    }
  }
  const favDiv = document.getElementById('favoritePlaceMsg');
  favDiv.innerText = `¡Tu lugar favorito es el increíble ${favorite}!`;
}


function changeCheckbox(elem) {
  const msg = document.getElementById('interestsMsg');
  const val = elem.value;

  if (elem.checked) {
    if (!selectedInterests.includes(val)) {
      selectedInterests.push(val);
    }
  } else {
    selectedInterests = selectedInterests.filter(v => v !== val);
  }

  if (selectedInterests.length > 0) {
    msg.innerText = selectedInterests.join(', ');
  } else {
    msg.innerText = '';
  }
}

const radioClicks = {};

function clickRadio(elem) {
  radioClicks[elem.value] = (radioClicks[elem.value] || 0) + 1;
  let favorite = elem.value;
  let maxCount = radioClicks[elem.value];
  for (const modo in radioClicks) {
    if (radioClicks[modo] > maxCount) {
      maxCount = radioClicks[modo];
      favorite = modo;
    }
  }
  const timesText = (maxCount === 1) ? '1 vez' : `${maxCount} veces`;
  const msgDiv = document.getElementById('favoriteLevelMsg');
  msgDiv.innerText = 
    `🎮 ¡Se nota tu pasión por ${favorite}, lo has seleccionado ${timesText}! 🎮`;
}

function changeRadio(elem) {
  if (elem.checked) {
    const img = document.getElementById('levelImg');
    if (elem.value === 'Clase') {
      img.src = 'https://pengfros.wordpress.com/wp-content/uploads/2010/09/graduado.png';
    } else if (elem.value === 'Competición') {
      img.src = 'https://pengfros.wordpress.com/wp-content/uploads/2010/09/estampillassurf-11.png?w=510';
    } else if (elem.value === 'Supervivencia') {
      img.src = 'https://pengfros.wordpress.com/wp-content/uploads/2010/09/estampillassurf-21.png';
    }
    img.classList.add('active');
  }
}

function clickSelect(elem) {
  if (true) {
    const textoVisible = elem.options[elem.selectedIndex].text;
    document.getElementById('gameMsg').innerText = `✅ ¡El minijuego ${textoVisible} es increible!`;
    document.getElementById('gameMsg').classList.add('text-success');
  }
}

function changeSelect(elem) {
  if (elem.value) document.getElementById('gameMsgF').innerText = `🎲 Elemento enviado: ${elem.value}`;
}

function focusSelect(elem) {
  if (elem.value) document.getElementById('gameMsgF').innerText = `🎲 Seleccionando elemento`;
}

function blurSelect(elem) {
  if (elem.value) document.getElementById('gameMsgF').classList.add('text-success');
}

function cargarAbout(elem) {
  if (elem.value) document.getElementById('aboutMsg').innerText = `✍️ ${elem.value.length} caracteres`;
}

function teclasAbout(event) {
  if (event.key === 'Enter') document.getElementById('aboutMsg').innerText = '✅ Gracias por compartir';
}

function focusAbout(elem) {
  if (true) document.getElementById('aboutMsg').innerText = '📝 Cuenta algo...';
}

function blurAbout(elem) {
  const msg = document.getElementById('aboutMsg');
  if (!elem.value.trim()) {
    msg.innerHTML = '<img src="https://i.pinimg.com/236x/63/25/10/632510e53b3ae17f36993d7993c9fe8f.jpg" alt="como vas a dejar vacio" style="display:inline-block; width:60px; height:60px; margin-bottom:10px;"> <span style="color:red;">Pero escribe algo sobre ti, para eso todo este espacio</span>';
  } else {
    msg.innerText = '✅ Gracias por compartirlo';
  }
}


function cargarSearch(elem) {
  const label = document.getElementById('labelSearch');
  if (elem.value.trim()) {
    label.innerText = `Buscar: ${elem.value}`;
  } else {
    label.innerText = 'Buscar';
  }
}

function blurSearch(event) {
  const elem  = event.target;
  const label = document.getElementById('labelSearch');
  const query = elem.value.trim();
  label.innerText = 'Buscar';
  if (query) {
    label.innerHTML =
      `Realizando la búsqueda de: ${query}  ` +
      `<img src="https://usagif.com/wp-content/uploads/loading-32.gif" alt="Cargando..." ` +
      `style="width:16px; height:16px; vertical-align:middle;">`;
  }
}

function verificarAppointment(elem) {
  const label = document.getElementById('labelCita');
  if (elem.value) {
    label.classList.remove('text-primary');
    label.innerText = `Cita: ${elem.value}`;
  }
}

function blurAppointment(elem) {
  const label = document.getElementById('labelCita');
  if (elem.value) {
    const [datePart, timePart] = elem.value.split('T');
    const [year, month, day] = datePart.split('-');
    const [hour, minute] = timePart.split(':');
    const weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const months   = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dateObj = new Date(elem.value);
    const weekdayName = weekdays[dateObj.getDay()];
    const monthName   = months[parseInt(month, 10) - 1];
    label.innerText =
      `Se ha programado una cita para el día ${weekdayName} ` +
      `${parseInt(day, 10)} de ${monthName} del ${year} ` +
      `en el horario de ${hour}:${minute}`;
    label.classList.add('text-primary');
  }
}


function verificarMonth(elem) {
  const label = document.getElementById('labelMonth');
  if (elem.value) {
    label.classList.remove('text-primary');
    label.innerText = `Mes: ${elem.value}`;
  }
}

function blurMonth(elem) {
  const label = document.getElementById('labelMonth');
  const val = elem.value;
  if (val) {
    const [year, month] = val.split('-');
    const months   = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const gems     = {
      enero:      'el granate',
      febrero:    'la amatista',
      marzo:      'la aguamarina',
      abril:      'el diamante',
      mayo:       'la esmeralda',
      junio:      'la perla',
      julio:      'el rubí',
      agosto:     'el peridoto',
      septiembre: 'el zafiro',
      octubre:    'el ópalo',
      noviembre:  'el topacio',
      diciembre:  'la turquesa'
    };
    const monthName = months[parseInt(month, 10) - 1];
    const gem       = gems[monthName];

    label.innerText =
      `El elemento de ${monthName} del ${year} es ${gem}`;
    label.classList.add('text-primary');
  }
}

function verificarWeek(elem) {
  const label = document.getElementById('labelWeek');
  if (elem.value) {
    label.classList.remove('text-primary');
    label.innerText = `Semana: ${elem.value}`;
  }
}

function blurWeek(elem) {
  const label = document.getElementById('labelWeek');
  const val = elem.value;
  if (val) {
    const weekNumber = parseInt(val.split('-W')[1], 10);
    const semanaInicioSemestre = 17;
    let numeroEnSemestre = weekNumber - semanaInicioSemestre + 1;
    if (numeroEnSemestre < 1) {
      label.innerText = `Aún no inicia el semestre abr-ago25`;
    } else {
      if (numeroEnSemestre >= 20) {
        label.innerText = `Se acabó el semestre abr-ago25`;
      } else {
        label.innerText = `Es la semana ${numeroEnSemestre} del semestre abr-ago25`;
        label.classList.add('text-primary');
      }
    }
  }
}

function clickPlay() {
  if (true) document.getElementById('usernameMsg').innerText = '🚀 ¡A jugar!';
}

function hoverPlay() {
  if (true) document.getElementById('playBtn').classList.add('shadow-lg');
}

function downPlay() {
  if (true) document.getElementById('playBtn').innerText = '¡Click!';
}

function upPlay() {
  if (true) document.getElementById('playBtn').innerText = 'Jugar';
}

function focusPlay() {
  if (true) document.getElementById('playBtn').classList.add('border-warning');
}

function clickReset() {
  if (true) resetMensajes();
}

function clickSubmit() {
  if (true) document.getElementById('usernameMsg').innerText += ' 📤';
}

function hoverSubmit() {
  if (true) document.querySelector('input[type=submit]').classList.add('btn-outline-light');
}

function submitSubmit(event) {
  if (true) {
    event.preventDefault();
    alert('¡Registro completo!');
  }
}