
//Definir o componente counter-button
Vue.component('game-soccer-card', {
    
    props: ['game'],
    data: function(){
        return {
            games: this.game,
        }
    },
    template:
        `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="game.photo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{games.stadium}}</h5>
                <p class="card-text"></p>
            </div>
      </div>
        `
    ,
})
