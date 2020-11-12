
//Definir o componente counter-button
Vue.component('counter-button',
    {
        props:['def'],
        data: function(){
            return {
                count: this.def,
            }
        },
        template: '<button @click="count++">{{count}} vezes</button>',
    }
)
