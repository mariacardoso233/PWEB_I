const vm = new Vue({
    el: "#app",
    data: {
        castles: [],
        form: {
            name: '',
            linkPhoto: '',
            ano: ''
        }
    },

    created() {
        this.castles = [
            {
                id: 1,
                name: 'Castelo de Bragança',
                linkPhoto: 'https://ruralea.com/wp-content/uploads/2015/07/bragan%C3%A7a-e1438222205807.jpg',
                ano: 1409
            },
            {
                id: 2,
                name: 'Castelo de Almourol',
                linkPhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Almourol_034.jpg',
                ano: 1910
            },
            {
                id: 3,
                name: 'Castelo de Marvão',
                linkPhoto: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/CastillodeMarvao.jpg',
                ano: 1299
            },
            {
                id: 4,
                name: 'Castelo de Montalegre',
                linkPhoto: 'https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg',
                ano: 1325
            },
            {
                id: 5,
                name: 'Castelo de Sortelha',
                linkPhoto: 'https://www.cm-sabugal.pt/wp-content/uploads/Castelo-de-Sortelha-rota-5-castelos.jpg',
                ano: 1228
            },
            {
                id: 6,
                name: 'Castelo de Arraiolos',
                linkPhoto: 'https://d2z1ddvkf0gb65.cloudfront.net/wp-content/uploads/castelo3.jpg',
                ano: 1306
            },
            {
                id: 7,
                name: 'Castelo de Santa Maria da Feira',
                linkPhoto: 'https://www.culturanorte.gov.pt/wp-content/uploads/2020/07/feira_2_104090068154edf7de7e825-720x460.jpg?x69634',
                ano: 1045
            },
            {
                id: 8,
                name: 'Castelo de Lindoso',
                linkPhoto: 'https://www.serradogeres.com/images/castelo/lindoso_0.jpg',
                ano: 1220
            },
            {
                id: 9,
                name: 'Castelo dos Mouros',
                linkPhoto: 'https://i2.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2018/10/castelo-dos-mouros-em-sintra.jpg?resize=740,480',
                ano: 1147
            },
            {
                id: 10,
                name: 'Castelo de Guimarães',
                linkPhoto: 'https://www.cm-guimaraes.pt/thumbs/cmguimaraes/uploads/news/image/4329/castelo_de_guimaraes_1_1024_2500.jpg',
                ano: 968
            },
        ]
    },
    methods: {
        addCastle(){
            
        }
    },
    computed: {
    }
})
