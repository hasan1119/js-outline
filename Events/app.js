const deleteBtn = document.getElementById('deleteBtn')
const list = document.getElementById('list')
const btn = document.getElementById('btn')

// console.log(list.children);

// // list.children.addEventlistner() 
// list.addEventListener('click', function (e) {
//     e.target.remove()
// })


list.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target == deleteBtn) {
        e.target.parentElement.remove()
    }
    // console.log(this.contains(deleteBtn));

    // this.parentElement.remove()
})


// list.addEventListener('click', function (e) {
//     console.log(e);
// })


// for (var li of list.children) {
//     li.addEventListener('click', function (e) {
//         e.target.remove()
//     })
// }

btn.onclick = function (e) {
    const li = document.createElement('li')
    li.innerHTML = `item-1 
    <button id="deleteBtn">Delete</button>`
    list.appendChild(li)
}


// list.addEventListener('click', function () {
//     console.log("list");
// })


// parent.addEventListener('click', function () {
//     console.log("parent");
// })

// window.addEventListener('click', function () {
//     console.log("widn");
// })






















// btn.onclick = myPrint;
// console.log(heading.style);
// btn.addEventListener('click', function (e) {
//     let headingStatus = heading.style.display;

//     if (headingStatus == 'none') {

//         heading.style.display = 'block'

//     } else if (headingStatus == 'block') {

//         heading.style.display = 'none'

//     } else {
//         heading.style.display = 'none'
//     }
// })





// function myPrint(e) {
//     document.body.style.background = 'red'
//     console.log(e);
// }