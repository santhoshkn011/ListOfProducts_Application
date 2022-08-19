//on save
const save = () => {
    let vegetableList = createVegetableList();
    createAndUpdateStorage(vegetableList);
    let fruitsList = createFruitsList();  
    createAndUpdateStorage(fruitsList);
    let othersList = createOthersList();
    createAndUpdateStorage(othersList);
    alert("Details Saved");
  }
  //Save for Vegetables
  
  const createVegetableList = () => {
    let vegetableList = new ListData();
  
    vegetableList.vegetable = getInputValueById('#vegetable');
    vegetableList.vegetableQuantity = getInputValueById('#vegetableQuantity')
    alert("Save Vegetable List");
    return vegetableList;
  }
  
  function createAndUpdateStorage(vegetableList) {
    let vegList = JSON.parse(localStorage.getItem("ListOfProducts"));
    if (vegList != undefined) {
        vegList.push(vegetableList);
    } else {
        vegList = [vegetableList];
    }
    //alert(vegList.toString());
    localStorage.setItem("ListOfProducts", JSON.stringify(vegList));
  }

  //Save for Fruits

  const createFruitsList = () => {
    let fruitsList = new ListData();
  
    fruitsList.fruits = getInputValueById('#fruits');
    fruitsList.fruitsQuantity = getInputValueById('#fruitsQuantity')
    alert("Save Fruits List");
    return fruitsList;
  }

  function createAndUpdateStorage(fruitsList) {
    let frList = JSON.parse(localStorage.getItem("ListOfProducts"));
    if (frList != undefined) {
        frList.push(fruitsList);
    } else {
        frList = [fruitsList];
    }
    //alert(frList.toString());
    localStorage.setItem("ListOfProducts", JSON.stringify(frList));
  }

  //For Others and Save all to local storage

  const createOthersList = () => {
    let othersList = new ListData();
  
    othersList.others = getInputValueById('#others');
    othersList.othersQuantity = getInputValueById('#othersQuantity')
    alert("Save Othes");
    return othersList;
  }

  function createAndUpdateStorage(othersList) {
    let othList = JSON.parse(localStorage.getItem("ListOfProducts"));
    if (othList != undefined) {
        othList.push(othersList);
    } else {
        othList = [othersList];
    }
    //alert(othList.toString());
    localStorage.setItem("ListOfProducts", JSON.stringify(othList));
  }

  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }