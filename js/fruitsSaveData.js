//on save
  const saveFruits = () => {
    let fruitsList = createFruitsList();  
    createAndUpdateStorage(fruitsList);
    alert("Details Saved");
  }
  
  //Save for Fruits
  
  const createFruitsList = () => {
    let fruitsList = new FruitsListData();
  
    fruitsList.fruits = getInputValueById('#fruits');
    fruitsList.fruitsQuantity = getInputValueById('#fruitsQuantity')
    alert("Save Fruits List");
    return fruitsList;
  }
  
  function createAndUpdateStorage(fruitsList) {
    let frList = JSON.parse(localStorage.getItem("ListOfItems"));
    if (frList != undefined) {
        frList.push(fruitsList);
    } else {
        frList = [fruitsList];
    }
    //alert(frList.toString());
    localStorage.setItem("ListOfItems", JSON.stringify(frList));
  }
  
//   const getInputValueById = (id) => {
//     let value = document.querySelector(id).value;
//     return value;
//   }