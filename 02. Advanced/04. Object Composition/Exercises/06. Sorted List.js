function solve() {
    let operations=(()=>{
                let listOfNumbers=[];
                let size=0;
                let add= function (number) {
                    listOfNumbers.push(number);
                    listOfNumbers.sort((a,b) => a-b);
                    this.size++;
                    return listOfNumbers;
                }

                let remove= function (index) {
                    listOfNumbers.splice(index,1);
                    listOfNumbers.sort((a,b) => a-b);
                    this.size--;
            return listOfNumbers;
        }

        let get= function (index) {
          return listOfNumbers[index];
        }
    })()

    return operations;
}

