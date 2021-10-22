Vue.filter("capatilize", function(value){
    if (!value) return "";
    value = value.toString();
    return value.replace(/\b\w/g, function(l) {return l.toUpperCase()})
});

new Vue({
    el: '#app',
    data: {
        cars: [
            {model: "BMW"},
            {model: "Audi", speed: 240.01},
            {model: "Mersedes-Benz", speed: 350.04},
            {model: "Ford", speed: 165},
        ],
        show: true,
        message: "Hello world, hello"
    },
    methods: {

    },
    filters: {
        lowercase (value) {
            return value.toLowerCase();
        }
    }
});