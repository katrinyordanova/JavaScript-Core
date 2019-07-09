class Vacation {

    constructor(organizer, destination, budget){
        this.organizer=organizer;
        this.destination=destination;
        this.budget=budget;
        this.kids={};
        return this;
    }

    get organizer(){
        return this._oraganizer;
    }

    set organizer(organizer){
        if (typeof organizer === "string") {
            return this._oraganizer=organizer;
        }
    }

    get destination(){
        return this._destination;
    }

    set destination(destination){
        if (typeof destination === "string") {
            return this._destination=destination;
        }
    }

    get budget(){
        return this._budget;
    }

    set budget(budget){
        if (typeof budget === "number") {
            return this._budget=budget;
        }
    }

    get numberOfChildren(){
        let allKids=0;

        Object.keys(this.kids).forEach((grade) => {
            allKids+=Array.from(this.kids[grade]).length;
        });

        return allKids;
    }

    registerChild(name,grade,budget){
        if (this.kids[grade] === undefined){
            this.kids[grade]=[];
        }

        if (Number(budget)>=this.budget){
            let isKidInList=Array.from(this.kids[grade]).some((child) => {
                let kidName=child.split('-')[0];

                if (kidName===name){
                    return true;
                } else{
                   return false;
                }
            });

            if (isKidInList===true){
                return `${name} is already in the list for this ${this.destination} vacation.`
            }else{
                let nameAndGrade=name.toString() + '-' + budget.toString();
                this.kids[grade].push(nameAndGrade);
                return this.kids[grade];
            }
        }else{
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
    }

    removeChild(name,grade){

        if (this.kids[grade] === undefined){
            return `We couldn't find ${name} in ${grade} grade.`;
        } else if (this.kids[grade].length === 0) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
        let kidInfo='';

        let isKidInList=Array.from(this.kids[grade]).some((kid) => {
            let kidName=kid.split('-')[0];

            if (kidName===name){
                kidInfo=kid;
                return true;
            } else{
                return false;
            }
        });

        if (isKidInList===true){
            let kidAtIndex=Array.from(this.kids[grade]).indexOf(kidInfo);
            this.kids[grade].splice(kidAtIndex,1);
            return this.kids[grade];
        }else{
            return `We couldn't find ${name} in ${grade} grade.`
        }
    }

    toString(){
        if (Object.getOwnPropertyNames(this.kids).length === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }else{
            let result='';
            result+=`${this._oraganizer} will take ${this.numberOfChildren.toString()} children on trip to ${this.destination}\n`;

            Object.keys(this.kids).sort((a,b) => Number(a) - Number(b)).forEach((grade) => {
                if (Array.from(this.kids[grade]).length !== 0){
                    result+=`Grade: ${grade}\n`;

                    Array.from(this.kids[grade]).forEach((kid,kidIndex) => {
                        let currentIndex=Number(kidIndex)+1;

                        result+=`${currentIndex}. ${kid}\n`
                    })
                }
            });
            return result;
        }

    }
}

// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
//
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);
//
// console.log(vacation.toString());


