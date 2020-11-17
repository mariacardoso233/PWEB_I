
const vm = new Vue({
    el: "#app",
    data: {
        frm: {
            ucName: '',
            studentName: '',
            grade: '',
            edit:{
                id: '',
                ucName:'',
                studentName: '',
                grade:''
            },
            filter:{
                studentName:'',
                ucName:'',
            }
        },
        grades: [],
        flagGrade: -1,

    },
    methods: {
        //Método create para guardar informaçãp dos estudantes e das UCs do curso
        create(){
            //students: ['Maria Baldaia'],
            //subjects: ['Programação Web I'],
        },
        
        //Criação do ID do objeto do array
        getNextId() {
            if (this.grades.length === 0) {
                return 1
            } else {
                return this.grades[this.grades.length - 1].id + 1
            }
        },
        addGrade() {
            const newGrade = {
                //Informação da nota para guardar no array
                id: this.getNextId(),
                ucName: this.frm.ucName,
                studentName: this.frm.studentName,
                grade: this.frm.grade
            }
            this.grades.push(newGrade);
        },

        //AÇÕES DA TABELA (Editar, Remover)
        editGrade(id){
            //Exibir janela
            document.querySelector('#dlgEditGrade').showModal()

            //Update da edição
            const editGrade = this.grades.find(
                grade => grade.id === id
            )

            //Informação nos campos do formulário de edição
            this.frm.edit.id = editGrade.id
            this.frm.edit.studentName = editGrade.studentName
            this.frm.edit.ucName = editGrade.ucName
            this.frm.edit.grade = editGrade.grade
        },
        //Atualiza os dados que estão no formulário para o objeto
        updateGrade() {
            //Fechar a janela de edição (o dialog do HTML)
            document.querySelector('#dlgEditGrade').close()

            //Atualizar os dados da nota
            this.grades.map(
                grade => {
                    if (grade.id === this.frm.edit.id) {
                        grade.grade = this.frm.edit.grade
                    }
                }
            )
        },

        removeGrade(id){
            //Confirmação para remoção de viagem
            if (confirm('Deseja remover a nota?')) {
                this.grades = this.grades.filter(
                    grade => grade.id !== id
                )
                alert('Nota removida com sucesso!')
            }
        },

        //Ordenação por nota (ascendente e descendente)
        sortByGrade(){
            this.flagGrade = this.flagGrade * -1
            this.grades = this.grades.sort(this.compareGrades)
        },

        compareGrades(a,b){
            if (a.grade > b.grade)
                return 1 * this.flagGrade

            if (a.grade < b.grade)
                return -1 * this.flagGrade

            if (a.grade === b.grade)
                return 0
        }

    },
    computed:{
        filteredGrades(){
            //Filtro combinado por estudante e por UC
            return this.grades.filter(
                grade => {
                    let filterNameResult = true
                    let filterUcResult = true

                    //Filtro do nome do estudante     includes(à medida que vai escrevendo vai atualizando a tabela)-> permite 
                    if (this.frm.filter.studentName !== '') {
                        filterNameResult = grade.studentName.includes(this.frm.filter.studentName)
                    }

                    //Filtro do nome do estudante 
                    if (this.frm.filter.ucName !== '') {
                        filterUcResult = grade.ucName.includes(this.frm.filter.ucName)
                    }                    

                    //Retorna o conjunto dos 2 filtros
                    return filterNameResult && filterUcResult
                }
            )
        }
    }
})
