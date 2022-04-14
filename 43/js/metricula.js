var $tdtotalcursos = document.querySelector('.js-total-de-cursos') 
var $totaldehoras = document.querySelector('.js-total-de-horas')
var $buttonconfirmar = document.querySelector('.js-botao-matricula')

var totalhoras = 0
var totalcursos = 0
function adicionacurso(checkbox){
    if(checkbox.checked){
        totalcursos ++
        totalhoras += parseInt(checkbox.value)
    }
    else {
        totalcursos --
        totalhoras -= parseInt(checkbox.value)
    }
    $totaldehoras.textContent = totalhoras + 'h'
    $tdtotalcursos.textContent = totalcursos + ' curso(s)'
}
$buttonconfirmar.onclick = confirmaMatriculas

function confirmaMatriculas(){
    if(totalcursos === 0) {
        alert('nenhum curso selecionado')
    }
    else{
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html'
    }
}