class VegetableListData {
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
    toString() {
        return "id=" + this.id + "vegetable = " + this.vegetable + ", vegetableQuantity = " + this.vegetableQuantity ;
    } 
}