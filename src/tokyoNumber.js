export const tokyoNumber = {
    data(){
        return{
            title:"Welcomde to Tokyo",
            subTitle:"Tokyo is a great city",
            number:0
        }
    },
    filters:{
        lowerCase(value){
            return value.toLowerCase();
        }
    },
    created(){
        console.log("created mixin")
    }
}

