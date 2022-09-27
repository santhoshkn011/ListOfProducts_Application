class OthersListData {
    get id(){
        return this._id
    }
    set id(id) {
        this._id = id
    }

    get food(){
        return this._food;
    }
    set food(food) {

        let otherRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (otherRegex.test(food))
            this._food = food;
        else
            throw new Error("Incorrect other Name");     
    }
    get foodQuantity(){
        return this._foodQuantity;
    }
    set foodQuantity(foodQuantity) {
        let othersQRegex = RegExp('^[a-zA-Z0-9\\s]{2,}$');
        if (othersQRegex.test(foodQuantity))       
            this._foodQuantity = foodQuantity;
        else
            throw new Error("Enter Quantity"); 
    }
    toString() {
        return "id=" + this.id + "food = " + this.food + ", foodQuantity = " + this.foodQuantity ;
    } 
}