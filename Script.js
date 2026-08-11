// ==============================
// AEDA - Script Centralizado
// ==============================


document.addEventListener("DOMContentLoaded", function(){



// ==============================
// CADASTRO
// ==============================


const btnCadastrar = document.getElementById("btnCadastrar");



if(btnCadastrar){


btnCadastrar.addEventListener("click", function(){



const nome =
document.getElementById("nome").value.trim();


const idade =
document.getElementById("idade").value.trim();


const email =
document.getElementById("email").value.trim().toLowerCase();


const senha =
document.getElementById("senha").value;




const genero =
document.querySelector(
'input[name="genero"]:checked'
);



const deficiencia =
document.querySelector(
'input[name="deficiencia"]:checked'
);






if(!nome || !idade || !email || !senha){

alert("Preencha todos os campos obrigatórios.");

return;

}




if(!genero || !deficiencia){

alert("Selecione gênero e deficiência.");

return;

}






const regexSenha =

/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;



if(!regexSenha.test(senha)){


alert(
"A senha deve ter no mínimo 8 caracteres, número e símbolo."
);


return;


}







const tiposDeficiencia = Array.from(

document.querySelectorAll(
'input[name="tipoDeficiencia"]:checked'
)

).map(function(item){

return item.value;

});







const aluno = {


nome:nome,

idade:idade,

email:email,

senha:senha,

genero:genero.value,

deficiencia:deficiencia.value,

tiposDeficiencia:tiposDeficiencia


};







// Salva cadastro

localStorage.setItem(

"usuarioAEDA",

JSON.stringify(aluno)

);






// Cria sessão automaticamente

localStorage.setItem(

"usuarioAEDA_Logado",

JSON.stringify(aluno)

);







alert("Conta criada com sucesso!");





window.location.href =
"Dashboard.html";



});



}









// ==============================
// LOGIN
// ==============================


const loginForm =
document.getElementById("loginForm");



if(loginForm){



loginForm.addEventListener(
"submit",

function(event){


event.preventDefault();




const email =
document.getElementById("email").value.trim().toLowerCase();



const senha =
document.getElementById("senha").value;






const usuario =

JSON.parse(

localStorage.getItem("usuarioAEDA")

);






if(!usuario){


alert("Conta não encontrada.");

return;


}






if(
email === usuario.email &&
senha === usuario.senha
){



localStorage.setItem(

"usuarioAEDA_Logado",

JSON.stringify(usuario)

);




alert("Login realizado com sucesso!");



window.location.href =
"Dashboard.html";



}


else{


alert("Email ou senha incorretos.");


}



}



);


}









// ==============================
// DASHBOARD
// ==============================


const nomeAluno =
document.getElementById("nomeAluno");



if(nomeAluno){



const usuario =

JSON.parse(

localStorage.getItem("usuarioAEDA_Logado")

);






if(usuario){


nomeAluno.textContent =

"Eai, " + usuario.nome + "! O que quer fazer hoje?";


}


else{


alert("Faça login novamente.");

window.location.href =
"Login.html";


}



}









// ==============================
// SAIR
// ==============================


const btnSair =
document.getElementById("btnSair");



if(btnSair){


btnSair.addEventListener(
"click",

function(){



// Remove apenas a sessão

localStorage.removeItem(
"usuarioAEDA_Logado"
);





window.location.href =
"Login.html";



}

);



}



});