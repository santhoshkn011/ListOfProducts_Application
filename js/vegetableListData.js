class VegetableListData {
    get id(){
        return this._id
    }
    set id(id) {
        this._id = id
    }

    get Item(){
        return this._food;
    }
    set food(food) {

        let vegRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (vegRegex.test(food))
            this._food = food;
        else
            throw new Error("Incorrect Vegetable Name");     
    }
    get foodQuantity(){
        return this._foodQuantity;
    }
    set foodQuantity(foodQuantity) {
        let vegQRegex = RegExp('^[a-zA-Z0-9\\s]{2,}$');
        if (vegQRegex.test(foodQuantity))
            this._foodQuantity = foodQuantity;
        else
            throw new Error("Enter vegetable quantity"); 
    }
    toString() {
        return "id=" + this.id + "food = " + this.food + ", foodQuantity = " + this.foodQuantity ;
    } 
}