const list1 = new Array();
const add_button = document.getElementById('addButton');

add_button.addEventListener('click' ,function(){
    let task_input = document.getElementById('input__field');
    let task_data = task_input.value;
    if (task_data.trim() != "") {
        list1.push(task_data);
        console.log(list1);
        let task_list = document.getElementById("tasks_list");
    
        let check = document.createElement('input')
        check.type = "checkbox";
        check.setAttribute('id', 'checkbox')

        let tasks_div = document.createElement('div');
        tasks_div.setAttribute('id' , 'task')

        let del_button = document.createElement('button')
        del_button.setAttribute('id' , 'del_button')
        del_button.setAttribute('index' , list1.length-1)

        del_button.innerText = 'DELETE' 
        del_button.addEventListener('click' , ()=>{
            let index = del_button.getAttribute('index');
            list1.splice(index , 1);

            console.log( list1 );
            task_list.removeChild(tasks_div);
        })
        
        let t1 = document.createElement('p');
        t1.innerText = task_data;
        
        tasks_div.appendChild(check)
        tasks_div.appendChild(t1);
        
        task_input.value = "";
        
        tasks_div.appendChild(del_button);
        task_list.appendChild(tasks_div);

    }
    else {
        alert("Add some task") // ""
    }
})












// let del_button = document.getElementById('del_button').addEventListener('click' , ()=>{
//     console.log('button is clicked')
// })
// console.log(del_button)

// function remove_tasks(index){
//     return list1.splice(index-1 , 1);
// }


// document.getElementById("checkbox").addEventListener('change', function () {
//     this.toggleAttribute('checked');
// })

// if(list1.length > 0){
//     document.getElementById("del_button").addEventListener('click'  , ()=>{
//         console.log('delete btn clicked')
//     })
// }












// add_button.addEventListener('click', function () {
//     list.push(task_input);
//     console.log(list);
//     task_input = "";
// })

// function push_data(){
//     let task_input = document.getElementById('input__field');
//     let task_data = task_input.value;
//     list.push(task_data);
//     console.log(list);
//     task_data = "";
// }











// const list1 = [];
// const add_button = document.getElementById('addButton');

// add_button.addEventListener('click', function() {
//     let task_input = document.getElementById('input__field');
//     let task_data = task_input.value;

//     if (task_data.trim() != "") {
//         list1.push(task_data);
//         console.log(list1);
//         let task_list = document.getElementById("tasks_list");

//         let check = document.createElement('input');
//         check.type = "checkbox";

//         let tasks_div = document.createElement('div');

//         let del_button = document.createElement('button');
//         del_button.innerText = 'DELETE';
        
//         // Set an index attribute for tracking
//         del_button.setAttribute('data-index', list1.length - 1); // use data attribute

//         del_button.addEventListener('click', function() {
//             let index = del_button.getAttribute('data-index'); // use data-index
//             list1.splice(index, 1); // Remove from the list
//             console.log(list1);

//             // Remove the task from the DOM
//             task_list.removeChild(tasks_div);
//             // Update indices for remaining buttons
//             updateTaskIndices();
//         });

//         let t1 = document.createElement('p');
//         t1.innerText = task_data;

//         tasks_div.appendChild(check);
//         tasks_div.appendChild(t1);
//         tasks_div.appendChild(del_button);
//         task_list.appendChild(tasks_div);

//         task_input.value = ""; // Clear the input field
//     } else {
//         alert("Add some task");
//     }
// });

// // Function to update indices of the delete buttons
// function updateTaskIndices() {
//     const taskButtons = document.querySelectorAll('#tasks_list button');
//     taskButtons.forEach((button, index) => {
//         button.setAttribute('data-index', index);
//     });
// }
