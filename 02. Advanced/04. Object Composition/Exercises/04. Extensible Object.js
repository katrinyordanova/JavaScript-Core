function solve() {
    let object={
        extend: function (template) {
            let entries=Object.entries(template);
            for (let [key,value] of entries) {
                if (typeof value === "function"){
                    Object.getPrototypeOf(this)[key]=value;
                }else{
                    this[key]=value;
                }
            }
        }
    };

    return object;
}