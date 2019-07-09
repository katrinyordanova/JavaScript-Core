function sortArray(array,string) {
    if (string==="asc"){
        return array.sort((a,b) => a-b);
    }else{
        return array.sort((a,b) => b-a);
    }
}

function sortArray(array,string) {

   let ascendingOrder=function (a,b) {
       return a-b;
   };

   let descendingOrder=function (a,b) {
       return b-a;
   };

   let sortBy={
        "asc": ascendingOrder,
        "desc": descendingOrder
    };

   return array.sort(sortBy[string]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));