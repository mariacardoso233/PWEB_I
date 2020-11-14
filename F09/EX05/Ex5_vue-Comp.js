
//Definir o componente game-soccer-card
Vue.component('game-soccer-card', {
    props: {
        game: Object
    },

    template:
        `
        <div class="card" style="width: 20px;">
            <img :src="game.photo" class="card-img-top" :alt="game.stadium">
            <div class="card-body">
                <h5 class="card-title">Estádio: {{game.stadium}}</h5>
                <p class="card-text">
                    {{game.teamName1}} {{this.getTeamGoals(game.teamName1)}}
                    -
                    {{this.getTeamGoals(game.teamName2)}} {{game.teamName2}}
                </p>
                <p class="card-text" v-for='goal in game.goals'>
                {{goal.minutes}}' {{goal.playerName}}, {{goal.teamName}}
                </p>
            </div>
        </div>
        `,
    methods: {
        //Contagem dos golos marcados segundo o array "goals"
        getTeamGoals(teamName) {
            return this.game.goals.filter(goal => goal.teamName == teamName).length
        }
    }
}
)
