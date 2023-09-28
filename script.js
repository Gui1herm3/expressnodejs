function voltar(){
    window.location.assign("http://localhost:8018/")
  }
     function inicio(){
      window.location.assign("http://127.0.0.1:5500/Tela-de-inicio-desktop/Tela-de-%C3%ADnicio-desktop.html")
     }
 
  function cadastro(){
    window.location.assign("http://127.0.0.1:5500/sitedosoutros/cadastro/TeladeCadastro.html")
  }
 
  function main() {
        var email= document.getElementById('Email').value;
        var senha= document.getElementById('Senha').value;
 
        if (email == "gustavo@paciente.com" && senha == "1234"){
          alert('Sucesso');
          window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
        }
         
         else if (email == "cleber.machado@medico.com" && senha == "12345"){
            alert('Sucesso');
            window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
          }
 
            else if (email == "josue@admin.com" && senha == "123456"){
              alert('Sucesso');
              window.location.assign("http://127.0.0.1:5500/sitedosoutros/Consulta/consulta.html")
            }  
       
              else{
        alert("Usuário ou senha incorretos");
       }
  }
 
 
