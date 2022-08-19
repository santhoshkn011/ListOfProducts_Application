let itemList;
window.addEventListener('DOMContentLoaded', (event) => {
    fruitsList = getFruitslistFromStorage();
    createInnerHtml();
});

getFruitslistFromStorage = () => {
    return localStorage.getItem('ListOfItems') ? 
                    JSON.parse(localStorage.getItem('ListOfItems')) : [];
}
    
const createInnerHtml = () => {
    if(fruitsList.length == 0) {
        return;
    }
    const HeaderHtml = "<tr><th>Fruit Name</th><th>Quantity</th><th>Options</th></tr>";
    let innerHtml = `${HeaderHtml}`;  
    for(let itemData of fruitsList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${itemData._fruits}</td>
                <td>${itemData._fruitsQuantity}</td>
                <td>
                    <img id="${itemData._fruits}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${itemData._fruits}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </tr>
        `;
    }             
    document.querySelector('#display').innerHTML = innerHtml;
}