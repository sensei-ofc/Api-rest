const textnya = document.querySelector('.status');
const warn = document.querySelector('.warn');
var apikey = document.getElementById("responapikeymucoooookkk")
const amlert = document.querySelector('.alert-danger');
apikey.addEventListener("keyup", function (event) {
if (event.key == 'Enter') {
    event.preventDefault();
    document.getElementById("diklikcok").click();
  }
});

function enviarDatos() {
  if (apikey.value == '') {
    alert("¡Introduce tu apikey!", "", "error");
  } else {
    var xhr = new XMLHttpRequest();
    var url = `/api/cekapikey?apikey=${apikey.value}`;
    xhr.onloadend = function () {

      data = JSON.parse(this.responseText);
      if (data.status == true) {
        textnya.innerHTML = '[ INFO ] El estado de tu Apikey es Activo <br><br>' + 'Ip: ' + data.response.ip + '<br>------------------------<br>' + 'nombre: ' + data.response.name + '<br>------------------------<br>' + 'email: ' + data.response.email + '<br>------------------------<br>' + 'apikey: ' + data.response.apikey + '<br>------------------------<br>' + 'totalhit: ' + data.response.totalhit + '<br>------------------------<br>' + 'premium: ' + data.response.premium + '<br>------------------------<br>' + 'expirado: ' + data.response.expired 

        swal("¡Apikey válida!", 'El estado de tu Apikey es Activo', "success");
        warn.textContent = ''
      } else {
        textnya.textContent = '[ INFO ] ¡Tu Apikey no es válida!'
        swal("¡Apikey no válida!", "", "error");
        alert('Apikey no válida. Por favor, compra una apikey en Instagram @zeeoneofc');
        amlert.classList.remove('hideop')
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
}
