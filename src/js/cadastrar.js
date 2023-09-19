function cadastrar() {
    if (validEmail && validNome && validSenha && validConfirmSenha) {
        let listaEmail = JSON.parse(localStorage.getItem('listaEmail') || '[]');

        listaUser.push(
            {
                emailCad: email.value,
                nomeCad: nome.value,
                senhaCad: senha.value
            }
        );

        localStorage.setItem('listaUser', JSON.stringify(listaUser));


        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(() => {
            window.location.href = '../html/signin.html';
        }, 3000);


    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    }
}
