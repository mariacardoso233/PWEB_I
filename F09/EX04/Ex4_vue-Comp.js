
//Definir o componente counter-button
Vue.component('color-picker',
    {
        template: `
            <input 
                type='color'
                v-on:change='$emit("change-color", $event.target.value)'>
        `,
    }
)
