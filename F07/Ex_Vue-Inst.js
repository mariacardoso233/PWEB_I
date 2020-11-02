const vm = new Vue({
    el: "#app",
    data: {
        frm: {
            continent: 'europe',
            country: 'aaa',
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
        travels: []
    },
    methods: {
        getNextId() {
            if (this.travels.length === 0) {
                return 1
            } else {
                return this.travels[this.travels.length - 1].id + 1
            }
        },

        formatDate(d) {
            console.log(d);
            d = new Date(d)
            console.log(d);
            return `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`
        },

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

        sortTravelsByCountry(){
            
        },

        removeTravel(id) {
            this.travels = this.travels.filter(
                travel => travel.id !== id
            )
        }, 

        editTravel(id){
            const travelId = this.travels.findIndex(
                travel => travel.id == id
            )
            this.travels[travelId].country = prompt('Novo país?')
        }
    },
    computed: { 
        filteredTravel() {
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