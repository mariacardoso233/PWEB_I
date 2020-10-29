const vm = new Vue({
    el: "#app",
    data: {
        task: '',
        type: 'pessoal',
        filter: '',
        tasks: []
    },
    created(){
        //Adicionar um listener para guardar tasks apenas quando o tab é fechado
        window.addEventListener('unload', this.savesStorage)
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    },
    methods: {
        //Guarda as tasks na localStorage
        savesStorage(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        getNextId() {  //Obtenção dos id's
            if (this.tasks.length == 0) {
                return 1
            } else {
                return this.tasks[this.tasks.length - 1].id + 1
            }
        },
        addTask() {
            /* Melhoramento: não inserir duas tarefas iguais */
            if (this.tasks.some(task => task.name === this.task)) {
                alert('TAREFA JÁ EXISTENTE!')
            } else {
                const newTask = { id: this.getNextId(), name: this.task, type: this.type}
                this.tasks.push(newTask);
                alert('TAREFA ADICIONADA!')
            }
        },
        removeTask(id) {
            //Atualizar o array (this.tasks === ....)
            this.tasks = this.tasks.filter(
                /*Gerar um novo array com todos os elementos menos aquele que queremos remover*/
                task => task.id !== id
            )
        }
    },
    computed: {
        filterTasks() {
            return this.tasks.filter(
                task => task.type === this.filter || this.filter === ''
                )
        }
    }
})