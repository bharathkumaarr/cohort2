let globalId = 0




function addTodo(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    console.log(title);
    console.log(description);
    
    // const container = document.getElementById('container');

    
    // ugly methood
    // container.innerHTML+=`
    // <div>
    //     ${title} <br>
    //     ${description} <br> 
    //     <button>Mark as done!</button>
    // </div> <br>`


    container.appendChild(createChild(title,description,globalId++ ));
}

// .createElement .appendChild globalId .setAttribute 

function createChild(title, description,id) {
    const child = document.createElement('div');

    const firstGrandChild = document.createElement('div');
    firstGrandChild.innerHTML = title;

    const secondGrandChild = document.createElement('div');
    secondGrandChild.innerHTML = description;

    const thirdGrandChild = document.createElement('button');
    thirdGrandChild.innerHTML = 'Mark as Done!';

    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);

    thirdGrandChild.setAttribute('onclick',`markAsDone(${id})`);

    return child;
}

// function markAsDone(todoId) {
//     const container = document.getElementById(todoId);
//     container.children[2].innerHTML = 'Done!';
// }



// state
// state is always an arr
// every element in a state would have a title, description, id


function updateDomAccToState(state) {
    const parent = document.getElementById('container')
    parent.innerHTML = '';

    for (let i=0; i<state.length; i++) {
        const child = createChild(state[i].title,state[i].description,state[i].id );
        parent.appendChild(child);
    }
}

updateDomAccToState([
    {title: 'Buy Milk', description: 'Buy milk from the store', id:1},
    {title: 'Buy soda', description: 'Buy soda from the store', id:2},
    {title: 'Buy chips', description: 'Buy chips from the store', id:3}

])























// let globalId = 0
    
    // function addTodo(){
    //   const title = document.getElementById('title').value;
    //   const description = document.getElementById('description').value;


    //   const parent = document.getElementById('container');
      
    //   parent.appendChild(createChild(title, description, globalId++));
    // }

    // function createChild(title,description, id) {
    //   const child = document.createElement('div');
    //   const firstGrandChild = document.createElement('div');
    //   firstGrandChild.innerHTML = title;

    //   const secondGrandChild = document.createElement('div');
    //   secondGrandChild.innerHTML = description;

    //   const thirdGrandChild = document.createElement('button');
    //   thirdGrandChild.innerHTML = 'Mark as Done';

    //   thirdGrandChild.setAttribute('onclick', `markAsDone(${id})`);
    //   child.appendChild(firstGrandChild);
    //   child.appendChild(secondGrandChild);
    //   child.appendChild(thirdGrandChild);
    //   child.setAttribute('id', id);

    //   return child;
    // }

    // function markAsDone(todoId) {
    //   const parent = document.getElementById(todoId);
    //   parent.children[2].innerHTML = 'Done!'
    // }

 