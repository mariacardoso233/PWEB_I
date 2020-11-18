//Definir o componente view-grade
Vue.component('view-grade', {
    props: {
        grade:{
            type: Object,
            required: true
        }
    },

    template: `
    <dialog open>
        <p>ID DA NOTA: {{grade.id}}</p>
        <p>ESTUDANTE: {{$parent.getStudentNameById(grade.student)}}</p>
        <p>UC: {{$parent.getUcNameById(grade.uc)}}</p>
        <p>NOTA: {{grade.grade}}</p>
        <p>
            <form method='dialog'>
            <input type='submit' value='OK'>
            </form>
        </p>
    </dialog>
    `
})
