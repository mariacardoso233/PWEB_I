const vm = new Vue({
    el:'#app',
    data: {
        msg: 'Programação Web I'
    },
    methods:{
        showMsg() {
            alert(this.msg)
        },
        showMsg2(msg) {
            alert(msg)
        },
        showMsg3(event) {            
            alert(event.target.localName);
        },
        showMsg4(event) {            
            alert(event.type);
        },
        showMessage() {            
            alert("ESMAD");
        }
    }
})