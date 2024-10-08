const list=document.getElementById("list")

function onFormsumbit(e){
    e.preventDefault()
    const inputValue = e.target.children[0].Value

    list.appendChild(createListItem(inputValue))
}

function deletelistitem(e){
    const parent= e.target.parentElement
    list.removeChild(parent )
}

function createListItem(inputValue){
    const item= document.createElement("div")
    item.innerHTML =` 
            <div class="list-item-detail">
                <input type="checkbox" /> 
                <span>${inputValue}</span>
            </div>
            <button onclick="deleteList item(event)">X</button>
    `
    item.setAttribute
    return item
}