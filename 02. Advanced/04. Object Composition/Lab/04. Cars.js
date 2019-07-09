function solve(input) {
    let objects=[];

    Array.from(input).forEach((line) => {
        let tokens=line.split(" ");
        let functionality=tokens[0];
        let objectName=tokens[1];

        if (functionality==="create"  && tokens[2] !== "inherit") {
            createObject(objectName);
        }else if (functionality==="create"  && tokens[2] === "inherit") {
            let parentName=tokens[3];
            inherit(objectName,parentName);
        }else if (functionality==="set"){
            //todo

        } else if (functionality==="print"){
            //todo

        }
    })

    function createObject(name) {
        let newObject={name};
        objects.push(newObject);
        return objects;
    }

    function inherit(objectName,parentName) {

    }
}

console.log(solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
));