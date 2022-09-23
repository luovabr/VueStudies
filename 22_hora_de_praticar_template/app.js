new Vue({
    el: '#desafio',
    data: {
        seu_nome: "josé teste da silva",
        idade: 28,
        img: "https://seu.dog/wp-content/uploads/2019/06/cachorro-latindo-muito.jpg"
    },
    methods: {
        idadeVezes3() {
            return this.idade*3;
        },
        randomico() {
            return Math.random();
        }

    }
})