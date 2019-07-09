function solver(input) {
   let rectangles=Array.from(input).map((element) => {
        let width=parseInt(element[0]);
        let height=parseInt(element[1]);

        let rectangle={
            width,
            height,
            area: function () {
                return width*height;
            },
            compareTo: function (otherArea) {
                if (parseInt(this.area()) > parseInt(otherArea)){
                    return 1;
                }else if (parseInt(this.area()) === parseInt(otherArea)){
                    return 0;
                }else{
                    return -1;
                }
            }
        };
        return rectangle;
    });

    rectangles=Array.from(rectangles).sort((a,b) => {
        if(b.area() > a.area()) return 1;
        if(a.area() > b.area()) return -1;
        if(b.width > a.width) return 1;
        if(b.width < a.width) return -1;
        return 0;
    });

   return rectangles;
}

console.log(solver([[10,5],[5,12]]));