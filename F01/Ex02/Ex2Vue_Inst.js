const vm = new Vue({
    el:'#intro',
    data: {
        firstName: 'Maria',
        lastName: 'Cardoso',
        age: 19
    },
    methods: {
        fullName() {
            return `O meu nome é ${this.firstName} ${this.lastName}`                    
        }
    }
})