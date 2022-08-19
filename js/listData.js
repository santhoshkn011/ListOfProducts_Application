class ListData {
    get id(){
        return this._id
    }
    set id(id) {
        this._id = id
    }

    get vegetable(){
        return this._vegetable;
    }
    set vegetable(vegetable) {

        let vegRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (vegRegex.test(vegetable))
            this._vegetable = vegetable;
        else
            throw new Error("Incorrect Vegetable Name");     
    }

    get fruits(){
        return this._fruits;
    }
    set fruits(fruits) {

        let fruitsRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (fruitsRegex.test(fruits))
            this._fruits = fruits;
        else
            throw new Error("Incorrect Fruit Name");    
    }

    get others(){
        return this._others;
    }
    set others(others) {

        let othersRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (othersRegex.test(others))
            this._others = others;
        else
            throw new Error("Incorrect Name"); 
    }

    get vegetableQuantity(){
        return this._vegetableQuantity;
    }
    set vegetableQuantity(vegetableQuantity) {
        let vegQRegex = RegExp('^[a-zA-Z0-9\\s]{2,}$');
        if (vegQRegex.test(vegetableQuantity))
            this._vegetableQuantity = vegetableQuantity;
        else
            throw new Error("Enter vegetable quantity"); 
    }

    get fruitsQuantity(){
        return this._fruitsQuantity;
    }
    set fruitsQuantity(fruitsQuantity) {
        let fruitsQRegex = RegExp('^[a-zA-Z0-9\\s]{2,}$');
        if (fruitsQRegex.test(fruitsQuantity))       
            this._fruitsQuantity = fruitsQuantity;
        else
            throw new Error("Enter Fruit Quantity"); 
    }

    get othersQuantity(){
        return this._othersQuantity;
    }
    set othersQuantity(othersQuantity) {
        let othersQRegex = RegExp('^[a-zA-Z0-9\\s]{2,}$');
        if (othersQRegex.test(othersQuantity))       
            this._othersQuantity = othersQuantity;
        else
            throw new Error("Enter Quantity"); 
    }

    toString() {
        return "id=" + this.id + "vegetable = " + this.vegetable + ", vegetablQuantity = " + this.vegetableQuantity + ", fruits = " + this.fruits + ", fruitsQuantity = " + this.fruitsQuantity + ", Others = " + this.others + 
          ", othersQuantity = " + this.othersQuantity;
    } 
}
