let range_value = document.querySelector('#value');
let add_value = document.querySelector('.value');
let grid = document.querySelector('.grid');
let color_value = document.querySelector('#col');
let col = range_value.value;


range_value.addEventListener('input', function() {

    add_value.innerHTML = range_value.value + 'x' + range_value.value;
})




range_value.addEventListener('input', function() {
    while (grid.firstElementChild) {
        grid.removeChild(grid.firstElementChild);
    }

    for (let index = 0; index < range_value.value; index++) {
        for (let index = 0; index < range_value.value; index++) {
            let div = document.createElement('div');
            div.classList.add('div');
            grid.style.gridTemplateRows = 'repeat(' + range_value.value + ',1fr)';
            grid.style.gridTemplateColumns = 'repeat(' + range_value.value + ',1fr)';
            grid.appendChild(div);
        }
    }

});



var isMouseDown = false;

grid.addEventListener('mousedown',() => isMouseDown = true);
grid.addEventListener('mouseup',() => isMouseDown = false);

grid.addEventListener('mousemove',(e) => {
    if(isMouseDown) {
        if (e.target.classList.contains('div') && !eraser.classList.contains('erase')) {
            e.target.style.backgroundColor = color_value.value;
        }
   
    }
});




grid.addEventListener('click', function(e) {
    if(eraser.classList.contains('erase')){
        e.target.style.backgroundColor = 'transparent';
    }
});

grid.addEventListener('dbclick', function(e) {
    if (e.target.classList.contains('div')) {
        e.target.style.backgroundColor = '';
    }
});


let eraser = document.querySelector('.eraser');

eraser.addEventListener('click',()=>{
    eraser.classList.toggle('erase');
    eraser.classList.toggle('eraser');
});




