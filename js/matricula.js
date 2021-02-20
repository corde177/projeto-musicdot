var $tdTotaCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-total-de-matricula')

  var toalHoras = 0
  var totalCursos = 0

  function adicionarCurso(checkbox) {
      if(checkbox.checked) {
          totalCursos ++
          totalHoras += parseInt(checkbox.value)
      }else {
          totalCursos --
          totalHoras -= parseInt(checkbox.value)
      }

      $tdTotaCursos.textContent = totalHoras + 'h'
      $tdTotaCursos.textContent = totalHoras + 'curso(s)'
  }
  $buttonConfirmar.onclick = confirmaMatriculas
  function ConfirmaMatriculas() {
      if(totalCursos === 0) {
          alert('Nenhum curso selecionado')
      }else {
          alert('Matricula confirmada nos cursos!')
          Window.location.href = 'index.html'
      }
  }