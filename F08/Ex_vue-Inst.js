const vm = new Vue({
    el: "#app",
    data: {
        frm: {
            name: '',
            linkPhoto: '',
            year: '',
            edit: {
                id: '',
                name: '',
                linkPhoto: '',
                year: '',
            },
            filter:{
                name:'',
            }
        },
        linkPhoto: '',
        flagSortCastle: -1,
        castles: []
    },
    
    created() {
        this.castles = [
            {
                id: 1,
                name: 'Castelo de Bragança',
                linkPhoto: 'https://ruralea.com/wp-content/uploads/2015/07/bragan%C3%A7a-e1438222205807.jpg',
                year: 1409
            },
            {
                id: 2,
                name: 'Castelo de Almourol',
                linkPhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Almourol_034.jpg',
                year: 1910
            },
            {
                id: 3,
                name: 'Castelo de Marvão',
                linkPhoto: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/CastillodeMarvao.jpg',
                year: 1299
            },
            {
                id: 4,
                name: 'Castelo de Montalegre',
                linkPhoto: 'https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg',
                year: 1325
            },
            {
                id: 5,
                name: 'Castelo de Sortelha',
                linkPhoto: 'https://www.cm-sabugal.pt/wp-content/uploads/Castelo-de-Sortelha-rota-5-castelos.jpg',
                year: 1228
            },
            {
                id: 6,
                name: 'Castelo de Arraiolos',
                linkPhoto: 'https://d2z1ddvkf0gb65.cloudfront.net/wp-content/uploads/castelo3.jpg',
                year: 1306
            },
            {
                id: 7,
                name: 'Castelo de Santa Maria da Feira',
                linkPhoto: 'https://www.culturanorte.gov.pt/wp-content/uploads/2020/07/feira_2_104090068154edf7de7e825-720x460.jpg?x69634',
                year: 1045
            },
            {
                id: 8,
                name: 'Castelo de Lindoso',
                linkPhoto: 'https://www.serradogeres.com/images/castelo/lindoso_0.jpg',
                year: 1220
            },
            {
                id: 9,
                name: 'Castelo dos Mouros',
                linkPhoto: 'https://i2.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2018/10/castelo-dos-mouros-em-sintra.jpg?resize=740,480',
                year: 1147
            },
            {
                id: 10,
                name: 'Castelo de Guimarães',
                linkPhoto: 'https://www.cm-guimaraes.pt/thumbs/cmguimaraes/uploads/news/image/4329/castelo_de_guimaraes_1_1024_2500.jpg',
                year: 968
            },
        ]
    },

    methods: {
        getNextId() {
            //return this.castles.length ? this.castles[this.castles.length - 1].id + 1
            if (this.castles.length === 0) {
                return 1
            }
            else {
                return this.castles[this.castles.length - 1].id + 1
            }
        },
        addCastle() {
            this.castles.push(
                {
                    id: this.getNextId(),
                    name: this.frm.name,
                    linkPhoto: this.frm.linkPhoto,
                    year: this.frm.year
                }
            )
        },
        //Chama a janela "dialog" e pré-preenche os campos do formulário
        editCastle(id) {
            //Exibir a janela de edição (o dialog do HTML)
            document.querySelector('#dlgUpdateCastle').showModal()

            //Obter o objeto a editar
            const editCastle = this.castles.find(
                castle => castle.id === id
            )

            //Alimentar os comapos de formulário de ediçao
            this.frm.edit.id = editCastle.id
            this.frm.edit.name = editCastle.name
            this.frm.edit.linkPhoto = editCastle.linkPhoto
            this.frm.edit.year = editCastle.year
        },
        //Atualiza os dados que estão no formulário para o objeto
        updateCastle() {
            //Fechar a janela de edição (o dialog do HTML)
            document.querySelector('#dlgUpdateCastle').close()

            //Atualizar os dados do castelo
            this.castles.map(       //map -> alterar dados no array
                castle => {
                    if (castle.id === this.frm.edit.id) {
                        castle.name = this.frm.edit.name
                        castle.linkPhoto = this.frm.edit.linkPhoto
                        castle.year = this.frm.edit.year
                    }
                }
            )
        },

        viewCastle(id) {
            //Exibir janela
            document.querySelector('#dlgViewCastle').showModal()

            //Preencher imagem com foto do castelo
            const viewCastle = this.castles.find(
                castle => castle.id === id
            )

            this.linkPhoto = viewCastle.linkPhoto

        },

        removeCastle(id) {
            if (confirm('Deseja remover o castelo?')) {
                this.castles = this.castles.filter(
                    castle => castle.id !== id
                )
                alert('Castelo removido com sucesso!')
            }
        },
        sortCastles(){
            this.flagSortCastle = this.flagSortCastle * -1
            this.castles.sort(this.compareCastles)
        },
        compareCastles(a,b){
            if (a.name > b.name) return 1 * this.flagSortCastle
            if (a.name < b.name) return -1 * this.flagSortCastle
            if (a.name === b.name) return 0
        }
    },

    computed: {
        filteredCastles(){
            return this.castles.filter(
                castle => castle.name.includes(this.frm.filter.name)
            )
        }
    }
})
