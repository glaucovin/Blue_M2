let btnEnviar = document.querySelector('#enviar')

function Mudarestado(Mar) {
  var display = document.getElementById(Mar).style.display;
  if (display == "none")
    document.getElementById(Mar).style.display = 'block';
  else
    document.getElementById(Mar).style.display = 'none';
}
btnEnviar.addEventListener('click', () => {
  let carregamento = document.querySelector('#carregamento')
  carregamento.style.display = 'flex'
  let form = document.querySelector('form')
  form.style.display = 'none'
})