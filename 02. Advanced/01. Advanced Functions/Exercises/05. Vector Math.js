let solution=(function () {
    let add=([xa,ya], [xb,yb]) => {
        return [xa+xb, ya+yb];
    }

    let multiply=([xa,xb], scalar) => {
        return [xa*scalar, xb*scalar];
    }

    let length=([xa, xb]) => {
        return  Math.sqrt(xa**2 + xb**2);
    }
    let dot=([xa,ya], [xb,yb]) => {
        return xa*xb+ya*yb;
    }

    let cross=([xa,ya], [xb,yb]) => {
        return xa*yb-ya*xb;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(solution.add([1, 1], [1, 0]));