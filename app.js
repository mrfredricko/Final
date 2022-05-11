Vue.component('people', {

    template: `
        <div>
        
        <ul class="list-group">

            <li class="list-group-item" >{{peopleobj[0].name}}</li>
            <br>
            <button type="button" class="btn btn-secondary py-4">Details</button>
            <li class="list-group-item" >{{peopleobj[1].name}}</li>
            <br>
            <button type="button" class="btn btn-secondary py-4">Details</button>
            <li class="list-group-item" >{{peopleobj[2].name}}</li>
            <br>
            <button type="button" class="btn btn-secondary py-4">Details</button>
            <li class="list-group-item" >{{peopleobj[3].name}}</li>
            <br>
            <button type="button" class="btn btn-secondary py-4">Details</button>
            <li class="list-group-item" >{{peopleobj[4].name}}</li>
            <br>
            <button type="button" class="btn btn-secondary py-4">Details</button>

        </ul>

        </div>
    `,

    props: ['ids', 'names', 'peopleobj', 'names2'],

    methods: {
        getDetails(){
            axios.get('')
            .then((resp) => {
                console.log(resp);
            })
        }
    },

    data (){
        return{
            peopleobj: this.peeps
       
        }
    }

});

const app = new Vue({
    el: "#app",
    data: {
        people: [
            {
                id: 0,
                name: "",
            }
        ],
        id2:0,
        name2: ""
    },
    methods: {

    },
    mounted(){
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=6a614f80ea94eb88ba9632a3eb6d6f77&language=en-US&page=1')
        .then((response) => {
            console.log(response.data.results);
            this.people = response.data.results;
            this.people.name = response.data.results[0].name;
            this.people.id = response.data.results[0].id;
            this.id2 = response.data.results[0].id;
            this.name2 = response.data.results[0].name;
        })
    }
});

