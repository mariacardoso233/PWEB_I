const vm = new Vue({
    el: "#app",
    data: {
        frm: {
            continent: 'europe',
            country: '',
            cities: '',
            description: '',
            startDate: '',
            endDate: '',
            type: 'holidays',
            photo: '',
        },
        travels: []
    },
    create() {

    },
    methods: {
        getNextId() {
            if (this.travels.length === 0) {
                return 1
            } else {
                return this.travels[this.travels.length - 1].id + 1
            }
        },
        addTravel() {
            const newTravel = {
                id: this.getNextId(),
                continent: this.frm.continent,
                country: this.frm.country,
                cities: this.frm.cities.split(','),
                description: this.frm.description,
                startDate: this.frm.startDate,
                endDate: this.frm.endDate,
                type: this.frm.type,
                photo: this.frm.photo,
            }
            this.travels.push(newTravel)
        }
    },
    computed: {

    }
})