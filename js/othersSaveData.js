//on save
  const saveOthers = () => {
    let othersList = createOthersList();
    createAndUpdateStorage(othersList);
    alert("Details Saved");
  }
  //For Others and Save all to local storage
  
  const createOthersList = () => {
    let othersList = new OthersListData();
  
    othersList.food = getInputValueById('#others');
    othersList.foodQuantity = getInputValueById('#othersQuantity')
    alert("Save Othes");
    return othersList;
  }
  
  function createAndUpdateStorage(othersList) {
    let othList = JSON.parse(localStorage.getItem("ListOfItems"));
    if (othList != undefined) {
        othList.push(othersList);
    } else {
        othList = [othersList];
    }
    //alert(othList.toString());
    localStorage.setItem("ListOfItems", JSON.stringify(othList));
  }
  
  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }