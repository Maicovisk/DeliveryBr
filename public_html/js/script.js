const app = new Vue({
    el: "#main",
    mounted: function() {
    },
    methods: {
        activeItem: function (id){
            this.categories.forEach(e =>{
                e.active = false
            })
            this.categories[id].active = true
        }
    },
    data: {
        categories: [
        {
            title: "Burger",
            active: true
        },
        {
            title: "Pizza",
            active: false
        },
        {
            title: "Bread",
            active: false
        },
        
        {
            title: "Sandwich",
            active: false
        },
        ]
    }
})