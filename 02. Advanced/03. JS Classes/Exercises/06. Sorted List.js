class Class {
    constructor(){
        this.numbers=[];
        this.size=0;
    }

    get list(){
       return this.numbers;
    }

    add(element){
        this.numbers.push(element);
        this.size++;
        this.sort();
    }

    remove(index){
        if (index<0 || (this.numbers.length-1) < index) {

        }else {
            this.numbers.splice(index,1);
            this.size--;
            this.sort();
        }
    }

    get(index){
        if (index<0 || (this.numbers.length-1) < index) {
            throw new Error();
        }else {
            return this.numbers[index];
        }
    }

    sort(){
        this.numbers=this.numbers.sort((a,b) => a-b);
    }
}