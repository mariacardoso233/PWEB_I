
const vm = new Vue({
    el: "#app",
    data: {
        grade: '',
        frm: {
            student: '',
            uc: '',
            grade: '',
            edit: {
                id: '',
                grade: '',
            },
            filter: {
                student: '',
                uc: ''
            }
        },
        students: [],
        ucs: [],
        grades: [],
        sortFlag: -1
    },
    methods: {
        //Criação do ID do objeto do array "grades"
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
                uc: this.frm.uc,
                student: this.frm.student,
                grade: this.frm.grade
            }
            //Validação se já existem uma nota com o estudante e a disciplina
            if (!this.grades.some(grade =>
                grade.student == this.frm.student &&
                grade.uc == this.frm.uc)) {
                this.grades.push(newGrade)
            }
            else {
                alert('NOTA JÁ ATRIBUÍDA!')
            }
        },

        //AÇÕES DA TABELA (Editar, Remover)
        editGrade(id) {
            //Exibir janela
            document.querySelector('#dlgEditGrade').showModal()

            //Guardar o id da nota a ser atualizada
            const editGrade = this.grades.find(
                grade => grade.id === id
            )

            //Informação nos campos do formulário de edição (Nota apenas)
            this.frm.edit.id = editGrade.id
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

        removeGrade(id) {
            //Confirmação para remover a nota desejada
            if (confirm('Deseja remover a nota?')) {
                this.grades = this.grades.filter(
                    grade => grade.id !== id
                )
                alert('Nota removida com sucesso!')
            }
        },

        showGrade(grade) {
            this.grade = grade
        },

        //Permite aparecer o nome do elemento na tabela em vez do ID do elemento (estudantes e ucs)
        getStudentNameById(id) {
            return this.students.find(
                student => student.id === id
            ).name
        },

        getUcNameById(id) {
            return this.ucs.find(
                uc => uc.id === id
            ).name
        },

        //Ordenação por nota (ascendente e descendente)
        sortByGrade() {
            this.sortFlag = this.sortFlag * -1
            this.grades = this.grades.sort(this.compareGrades)
        },
        compareGrades(a, b) {
            if (a.grade > b.grade)
                return 1 * this.sortFlag

            if (a.grade < b.grade)
                return -1 * this.sortFlag

            if (a.grade === b.grade)
                return 0
        }



    },
    computed: {
        //Filtro com seletores
        filteredGrades() {
            //Filtro combinado por estudante e por UC
            return this.grades.filter(
                grade =>
                    (this.frm.filter.student === '' || grade.student === this.frm.filter.student)
                    &&
                    (this.frm.filter.uc === '' || grade.uc === this.frm.filter.uc)
            )
        }
    },

    created() {
        this.students.push(
            { id: 1, name: 'Maria Baldaia' },
            { id: 2, name: 'João Soares' },
            { id: 3, name: 'Catarina Baldaia' },
            { id: 4, name: 'Rita Cardoso' },
            { id: 5, name: 'Rodrigo Santos' }
        )

        this.ucs.push(
            { id: 1, name: 'Programação Web I' },
            { id: 2, name: 'Base de Dados' },
            { id: 3, name: 'Computação Gráfica' },
            { id: 4, name: 'Engenharia de Software' },
            { id: 5, name: 'Ergonomia' }
        )
    },
})
