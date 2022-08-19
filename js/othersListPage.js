let itemList;
window.addEventListener('DOMContentLoaded', (event) => {
    othersList = getOtherslistFromStorage();
    createInnerHtml();
});

getOtherslistFromStorage = () => {
    return localStorage.getItem('ListOfItems') ? 
                    JSON.parse(localStorage.getItem('ListOfItems')) : [];
}
    
const createInnerHtml = () => {
    if(othersList.length == 0) {
        return;
    }
    const HeaderHtml = "<tr><th>Other Item Name</th><th>Quantity</th><th>Options</th></tr>";
    let innerHtml = `${HeaderHtml}`;  
    for(let itemData of othersList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${itemData._others}</td>
                <td>${itemData._othersQuantity}</td>
                <td>
                    <img id="${itemData._others}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${itemData._others}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </tr>
        `;
    }             
    document.querySelector('#display').innerHTML = innerHtml;
}