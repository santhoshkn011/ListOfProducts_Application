let foodList;
window.addEventListener('DOMContentLoaded', (event) => {
    foodList = getFoodlistFromStorage();
    createInnerHtml();
});

getFoodlistFromStorage = () => {
    return localStorage.getItem('ListOfItems') ? 
                    JSON.parse(localStorage.getItem('ListOfItems')) : [];
}
    
const createInnerHtml = () => {
    if(foodList.length == 0) {
        return;
    }
    const HeaderHtml = "<tr><th>Item Name</th><th>Quantity</th><th>Options</th></tr>";
    let innerHtml = `${HeaderHtml}`;  
    for(let itemData of foodList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${itemData._food}</td>
                <td>${itemData._foodQuantity}</td>
                <td>
                    <img id="${itemData._food}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${itemData._food}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </tr>
        `;
    }             
    document.querySelector('#display').innerHTML = innerHtml;
}