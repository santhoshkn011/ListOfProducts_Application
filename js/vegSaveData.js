//on save
const saveVeg = () => {
  let vegetableList = createVegetableList();
  createAndUpdateStorage(vegetableList);
  // let fruitsList = createFruitsList();  
  // createAndUpdateStorage(fruitsList);
  // let othersList = createOthersList();
  // createAndUpdateStorage(othersList);
  alert("Details Saved");
}
//Save for Vegetables

const createVegetableList = () => {
  let vegetableList = new VegetableListData();
  vegetableList.vegetable = getInputValueById('#vegetable');
  vegetableList.vegetableQuantity = getInputValueById('#vegetableQuantity')
  alert("Save Vegetable List");
  return vegetableList;
}

function createAndUpdateStorage(vegetableList) {
  let vegList = JSON.parse(localStorage.getItem("ListOfItems"));
  if (vegList != undefined) {
      vegList.push(vegetableList);
  } else {
      vegList = [vegetableList];
  }
  //alert(vegList.toString());
  localStorage.setItem("ListOfItems", JSON.stringify(vegList));
}


// const getInputValueById = (id) => {
//   let value = document.querySelector(id).value;
//   return value;
// }