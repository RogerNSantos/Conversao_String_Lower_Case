/* Definicao das variaveis */
var js_cursodig;

/* função cadcurso() */
function cadcurso(){
    js_cursodig=document.formcurso.f_cursodig.value;
    if (js_cursodig.toLowerCase()=='sist'){
    document.formcurso.f_codcurso.value='sist001/FB';
    }
    else {
    window.alert('Curso Inv\u00E1lido!');
    } // fechamento da estrutura if/else
    } // fechamento da function