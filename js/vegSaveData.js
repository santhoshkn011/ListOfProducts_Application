//on save
const saveVeg = () => {
  let foodList = createVegetableList();
  createAndUpdateStorage(foodList);
  // let fruitsList = createFruitsList();  
  // createAndUpdateStorage(fruitsList);
  // let othersList = createOthersList();
  // createAndUpdateStorage(othersList);
  alert("Details Saved");
}
//Save for Vegetables

const createVegetableList = () => {
  let foodList = new VegetableListData();
  foodList.food = getInputValueById('#vegetable');
  foodList.foodQuantity = getInputValueById('#vegetableQuantity')
  alert("Save Vegetable List");
  return foodList;
}

function createAndUpdateStorage(foodList) {
  let vegList = JSON.parse(localStorage.getItem("ListOfItems"));
  if (vegList != undefined) {
      vegList.push(foodList);
  } else {
      vegList = [foodList];
  }
  //alert(vegList.toString());
  localStorage.setItem("ListOfItems", JSON.stringify(vegList));
}


// const getInputValueById = (id) => {
//   let value = document.querySelector(id).value;
//   return value;
// }