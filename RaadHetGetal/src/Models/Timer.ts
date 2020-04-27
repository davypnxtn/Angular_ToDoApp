
export class Timer{
    public counter:number;
    timerRef;

    constructor(){}
    
    startTimer(){
        const startTime = Date.now() - (this.counter || 0);
        this.timerRef = setInterval(()=>{
            this.counter = Date.now() - startTime;
        })
    }

    stopTimer(){
        clearInterval(this.timerRef);
    }

    resetTimer(){
        clearInterval(this.timerRef);
        this.counter = undefined;
    }

}