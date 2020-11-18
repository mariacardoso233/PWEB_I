const vm = new Vue({
    el: "#app",
    data: {
        frm: {
            continent: 'asia',
            country: 'china',
            cities: 'bbb',
            description: '',
            startDate: '',
            endDate: '',
            type: 'holidays',
            photo: '',
            filter: {
                continent: '',
                startDate: '',
                endDate: '',
                type: ''
            }
        },
        travels: [],
        flagCountry: -1
    },

    //Created() e destroyed() -> gravação e recuperação dos dados :
                // window.onunload = function () {
                //     vm.$destroy()    
                // }
    created(){
        if (localStorage.getItem('travels')) {
            this.travels = JSON.parse(localStorage.getItem('travels'))            
        }
    },
    destroyed(){
        localStorage.setItem('travels', JSON.stringify(this.travels))
    },
    methods: {

        //Criação do ID do objeto do array
        getNextId() {
            if (this.travels.length === 0) {
                return 1
            } else {
                return this.travels[this.travels.length - 1].id + 1
            }
        },

        //Formatação da data estilo: DD-MM-YYYY
        formatDate(d) {
            console.log(d);
            d = new Date(d)
            console.log(d);
            return `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`
        },

        //Inserir novas viagens ao array
        addTravel() {
            const newTravel = {
                id: this.getNextId(),
                continent: this.frm.continent,
                country: this.frm.country,
                cities: this.frm.cities.split(','),
                description: this.frm.description,
                startDate: new Date(this.frm.startDate),
                endDate: new Date(this.frm.endDate),
                type: this.frm.type,
                photo: this.frm.photo,
            }
            this.travels.push(newTravel);
        },

        //Sort e Compare servem para a ordenação da tabela
        sortTravelsByCountry(){
            this.flagCountry = this.flagCountry * -1
            this.travels = this.travels.sort(this.compareCountries)
        },

        //Comparação de um elemento do array com o outro para ordenação
        compareCountries(a, b){
            if (a.country > b.country)
                return 1 * this.flagCountry

            if (a.country < b.country)
                return -1 * this.flagCountry

            if (a.country === b.country)
                return 0
        },

        sortTravelsByStartDate(){
            this.travels = this.travels.sort(this.compareDates)
        },

        compareDates(a, b){
            if (a.startDate > b.startDate)
                return 1

            if (a.startDate < b.startDate)
                return -1

            if (a.startDate === b.startDate)
                return 0
        },

        //Configuração Remover de linha da tabela
        removeTravel(id) {
            //Confirmação para remoção de viagem
            if (confirm('Deseja remover a viagem?')) {
                this.travels = this.travels.filter(
                    travel => travel.id !== id
                )
                alert('Viagem removida com sucesso!')
            }
        }, 

        //Configuração Editar de linha da tabela
        editTravel(id){
            const travelId = this.travels.findIndex(
                travel => travel.id == id
            )
            this.travels[travelId].country = prompt('Novo país?')
        }
    },
    //Filtros
    computed: { 
        filteredTravel() {
            //Filtrar por Continente, Data e Tipo
            //Utilizado para vários filtros 
            return this.travels.filter(
                travel => {
                    let filterContinentResult = true
                    let filterDatesResult = true
                    let filterTypeResult = true

                    //Filtro de continente
                    if (this.frm.filter.continent !== '') {
                        filterContinentResult = travel.continent === this.frm.filter.continent
                    }

                    //Filtro das datas
                    if (this.frm.filter.startDate !== '' && this.frm.endDate !== '') {
                        filterDatesResult =
                            travel.startDate >= new Date(this.frm.filter.startDate) &&
                            travel.endDate <= new Date(this.frm.filter.endDate)
                    }

                    //Filtro do tipo
                    if (this.frm.filter.type !== '') {
                        filterTypeResult = travel.type === this.frm.filter.type
                    }


                    //Retorna o conjunto dos 3 filtros
                    return filterContinentResult && filterDatesResult && filterTypeResult
                }
            )
        }
    }
})
 
//Gravação e recuperação dos dados
window.onunload = function () {
    vm.$destroy()    
}