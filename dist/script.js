window.onload = () =>{
    new JogoVelha();
};

class JogoVelha{
    constructor(){
        this.iniciaElementos();

    }

    iniciaElementos(){
        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click', this.realizaJogada);
    }

    realizaJogada(event){
        event.target.innerHTML = this.turno ? 'X' : 'O';
        this.turno  = !this.turno;
    }

    render(){
        
    }
}