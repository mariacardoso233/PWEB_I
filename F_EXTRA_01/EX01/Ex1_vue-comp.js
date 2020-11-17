
//Definir o componente view-grade para consulta de uma nota
Vue.component('view-grade', {
    props:{
        grade: Object
    },
    template: `
        <div id='modalViewGrade' class="modal" tabindex="-1" target='btnViewGrade'>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nota</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>{{grade.studentName}}</p>
                        <p>{{grade.ucName}}</p>
                        <p>{{grade.grade}}</p>
                    </div>
                </div>
            </div>
        </div>
  `
})
