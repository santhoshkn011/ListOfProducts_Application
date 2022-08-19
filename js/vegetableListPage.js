let itemList;
window.addEventListener('DOMContentLoaded', (event) => {
    vegetableList = getVegetablelistFromStorage();
    createInnerHtml();
});

getVegetablelistFromStorage = () => {
    return localStorage.getItem('ListOfItems') ? 
                    JSON.parse(localStorage.getItem('ListOfItems')) : [];
}
    
const createInnerHtml = () => {
    if(vegetableList.length == 0) {
        return;
    }
    const HeaderHtml = "<tr><th>Vegetable Name</th><th>Quantity</th><th>Options</th></tr>";
    let innerHtml = `${HeaderHtml}`;  
    for(let itemData of vegetableList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${itemData._vegetable}</td>
                <td>${itemData._vegetableQuantity}</td>
                <td>
                    <img id="${itemData._vegetable}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${itemData._vegetable}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </tr>
        `;
    }             
    document.querySelector('#display').innerHTML = innerHtml;
}