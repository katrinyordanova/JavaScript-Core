    class Rat {
        constructor(name){
            this.name=name;
            this.unitedRats=[];
        }

        getRats(){
            return this.unitedRats;
        }

        toString(){
            let totalRats="";
            totalRats+=this.name;
            Array.from(this.unitedRats).forEach((rat) => {
                totalRats+="##" + rat.name.toString();
            });
            totalRats=totalRats.trim();
            return totalRats;
        }

        unite(otherRat){
            if (otherRat instanceof Rat){
                this.unitedRats.push(otherRat);
            }
        }
    }