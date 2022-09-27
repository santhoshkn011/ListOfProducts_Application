//on save
  const saveFruits = () => {
    let foodList = createFruitsList();  
    createAndUpdateStorage(foodList);
    alert("Details Saved");
  }
  
  //Save for Fruits
  
  const createFruitsList = () => {
    let foodList = new FruitsListData();
  
    foodList.food = getInputValueById('#fruits');
    foodList.foodQuantity = getInputValueById('#fruitsQuantity')
    alert("Save Fruits List");
    return foodList;
  }
  
  function createAndUpdateStorage(foodList) {
    let frList = JSON.parse(localStorage.getItem("ListOfItems"));
    if (frList != undefined) {
        frList.push(foodList);
    } else {
        frList = [foodList];
    }
    //alert(frList.toString());
    localStorage.setItem("ListOfItems", JSON.stringify(frList));
  }
  
//   const getInputValueById = (id) => {
//     let value = document.querySelector(id).value;
//     return value;
//   }