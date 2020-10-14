const vm = new Vue({
    el: '#app',
    data: {
        num: 0,
        message: ''
    },
    methods:{
        up(){
            this.num = this.num + 1
            this.message = ''
        },
        down(){
            if (this.num == 0) {
                this.message = 'NÚMERO INVÁLIDO!'
            } else {
                this.num = this.num - 1
            }
        }
    },
    created() {
        console.log('A instância Vue foi criada!!');
        //Carregar dados 
        if (localStorage.getItem('number')) {  //localStorage.getItem('number') => localStorage.number
            this.num = parseInt(localStorage.getItem('number'))
        } else {
            
        }
    },
    mounted() {
        console.log('A instância Vue foi montada na DOM!!');
    },
    updated(){
        console.log('O número foi alterado!!');
        localStorage.setItem('number', this.num)  // localStorage.setItem('number', this.num)  =>  localStorage.this.num
    }
})