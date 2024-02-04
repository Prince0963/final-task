let items = [];
let ind = -1;

function additem()
{
    const item = document.getElementById("grocery").value;
    if(ind<0)
    {
        items.push(item);
    }
    else
    {
        items[ind] = item;
    }
    ind = -1;
    display();
}

function display()
{
    let dis = items.map(function(value,index){
        return `<div class="grocery-item ">
        ${value}
        <button class="edit-btn" onclick="edititem(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteitem(${index})">Delete</button>
      </div>`
    })

    document.getElementById("item").innerHTML = dis.join("");

}

function deleteitem(index)
{
    items.splice(index,1);
    display()
}

function clearitem()
{
    items.splice(0);
    display();
}

function edititem(index)
{
    document.getElementById("grocery").value = items[index];
    ind = index;
}