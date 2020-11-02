botao = document.getElementById("botao-texto");

botao.addEventListener("click", XHRTexto);

function XHRTexto(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../dados/texto.txt', true);

  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('saida-texto').innerHTML = `<p>${this.responseText}</p>`;
    }
  }

  xhr.send();

}

document.getElementById("btn-cliente").addEventListener("click", XHRCliente);

function XHRCliente(){
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "../dados/cliente.json", true);
  

  xhr.onload = function() {
    if(this.status === 200) {
      const cliente = JSON.parse(this.responseText)

      document.getElementById("saida-cliente").innerHTML = 
      `<ul>
        <li>ID: ${cliente.id}</li>
        <li>Nome: ${cliente.nome}</li>
      </ul>
      `;
    }
  }

  xhr.send();
}

document.getElementById("btn-usuarios").addEventListener("click", XHRUsuarios);

function XHRUsuarios(){
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "../dados/usuarios.json", true);
  

  xhr.onload = function() {
    if(this.status === 200) {
      const usuarios = JSON.parse(this.responseText)

      let saida = "";

      usuarios.forEach(usuario => {
        saida += 
        `<ul>
          <li>ID: ${usuario.id}</li>
          <li>Nome: ${usuario.nome}</li>
        </ul>`;
      });

      document.getElementById("saida-usuarios").innerHTML = saida;
    }
  }

  xhr.send();
}