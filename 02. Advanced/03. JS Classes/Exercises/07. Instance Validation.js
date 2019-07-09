class CheckingAccount {
    constructor(clientId, email, firstName, lastName ){
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.products=[];
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        if ((typeof value==="string") && value.length===6){
            this._clientId=value;
            return value;
        }else{
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }

    get email(){
        return this._email;
    }

    set email(value){
        let validEmail=/([A-Za-z0-9]+)@(([A-Za-z]+)|(.+))/;
        if (validEmail.test(value)){
            this._email=value;
            return value;
        }else{
            throw new TypeError("Invalid e-mail");
        }
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        if (value.length<3 || value.length>20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }else{
            let validFirstName=/([A-Za-z]+)/;
            if(!(validFirstName.test(value))){
                throw new TypeError("First name must contain only Latin characters");
            }
        }
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        if (value.length<3 || value.length>20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }else{
            let validLastName=/([A-Za-z]+)/;
            if(!(validLastName.test(value))){
                throw new TypeError("Last name must contain only Latin characters");
            }
        }
    }
}

