new Vue({
    el : "#exercise",
data : {
        value : "",
},
methods : {
        click : function(){
            return alert();
    },
    firstText : function(event){
        this.value = event.target.value;
    },
    secondText : function(event){
        this.value = event.target.value;
    }
}
})