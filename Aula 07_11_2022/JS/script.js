// Pega os elementos por id
const inp_texto = document.getElementById('texto');

function addClass() {
    inp_texto.ClassList.add('fundo');
    inp_texto.ClassList.add('fonte');
}
function removeClass() {
    inp_texto.ClassList.remove('fundo');
}

function containsClass(){
    var Fundo= inp_texto.ClassList.contains('fundo');
    if(Fundo){
        alert('Class fundo ativa');
    }else{
        alert('Class fundo inativa');
    }

}
function AlterarClass(){
    inp_texto.ClassList.toggle('fundo');
    inp_texto.ClassList.toggle('fonte');
}