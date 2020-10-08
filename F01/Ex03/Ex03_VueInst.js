const vm = new Vue ({
    el:'#intro',

    data: {
        weight: 54
    },
    beforeCreate(){
        console.log('BEFORE_CREATE')
    },
    created() {
        console.log('CREATED');
    },
    beforeMount() {
        console.log('BEFORE_MOUNT');
    },
    mounted() {
        console.log('MOUNTED');
    },
    beforeUpdate() {
        console.log('BEFORE_UPDATE');
    },
    updated() {
        console.log('UPDATED');
    },
    beforeDestroy() {
        console.log('BEFORE_DESTROY');
    },
    destroyed() {
        console.log('DESTROYED');
    }
})