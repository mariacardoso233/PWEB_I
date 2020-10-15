const vm = new Vue({
    el: '#intro',
    data: {
        person: { firstName: 'Rui', lastName: 'Silva', age: 23 }
    },
    created() {
        console.log('EVENTO: CRIAÇÃO');
        //this.dataPerson();
        //this.dataPerson();
        //this.dataPersonComputed();
        //this.dataPersonComputed();
    },
    mounted() {
        console.log('EVENTO: MONTAGEM');
    },
    updated(){
        console.log('EVENTO: ATUALIZAÇÃO');
    },
    methods:{
        dataPerson(){
            return console.log(`METHOD--> NOME: ${this.person.firstName} ${this.person.lastName} e IDADE: ${this.person.age}`);
        }
    },
    computed: {
        dataPersonComputed (){
            return console.log("COMPUTED--> NOME:" + this.person.firstName + this.person.lastName + "e IDADE:" + this.person.age);
        },
        fullNameComputed(){
            return console.log(this.person.firstName + " " + this.person.lastName);
        }
    },
    watch: {
        uploadAge(){

        }
    }
})