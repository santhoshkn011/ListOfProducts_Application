class FruitsListData {
    get id(){
        return this._id
    }
    set id(id) {
        this._id = id
    }

    get fruits(){
        return this._fruits;
    }
    set fruits(fruits) {

        let vegRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (vegRegex.test(fruits))
            this._fruits = fruits;
        else
            throw new Error("Incorrect fruit Name");     
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
    toString() {
        return "id=" + this.id + "fruits = " + this.fruits + ", fruitsQuantity = " + this.fruitsQuantity ;
    } 
}