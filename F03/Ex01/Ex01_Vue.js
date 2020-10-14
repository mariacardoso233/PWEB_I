const vm = new Vue({
    el: '#intro',
    data: {
        person: { firstName: 'Rui', lastName: 'Silva', age: 23 }
    },
    methods:{
        dataPerson(){
            console.log(`METHOD--> NOME: ${this.person.firstName} ${this.person.lastName} e IDADE: ${this.person.age}`);
        }
    },
    created() {
        console.log('EVENTO: CRIAÇÃO');
    },
    mounted() {
        console.log('EVENTO: MONTAGEM');
    },
    updated(){
        console.log('EVENTO: ATUALIZAÇÃO');
    }
})