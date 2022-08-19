class OthersListData {
    get id(){
        return this._id
    }
    set id(id) {
        this._id = id
    }

    get others(){
        return this._others;
    }
    set others(others) {

        let vegRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (vegRegex.test(fruits))
            this._others = others;
        else
            throw new Error("Incorrect other Name");     
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
        return "id=" + this.id + "others = " + this.others + ", othersQuantity = " + this.othersQuantity ;
    } 
}