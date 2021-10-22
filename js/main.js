Vue.component('app-car', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Audi"},
                {model: "Mersedes-Benz"},
                {model: "Ford"},
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
})

Vue.filter("capatilize", function(value){
    if (!value) return "";
    value = value.toString();
    return value.replace(/\b\w/g, function(l) {return l.toUpperCase()})
});

new Vue({
    el: '#app',
    components: {
        'app-car3': {}
    },
    data: {
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

new Vue({
    el: '#app2',
    data: {}
});