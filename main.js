const container = document.querySelector('.container');
const button = document.querySelector('button');


function createGrid(height = 16, width = 16) {
    const insideContainer = document.createElement('div');
    insideContainer.classList.add('inside-Container');
    container.appendChild(insideContainer); 
    for (i = 0; i < height; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        insideContainer.appendChild(row);
        
        
    
        for (j = 0; j < width; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-column');
            row.appendChild(column);
            
            column.addEventListener('mouseover', function(){
                column.style.backgroundColor = 'black'
            })
        }
 
    } 
    
}




button.addEventListener('click', () => {
    let askHeight = Number(prompt("What height do you want?"));
    let askWidth = Number(prompt("What width do you want?"));
    let insideContainer = document.querySelector('.inside-Container')

    while (askHeight > 100 || askWidth > 100) {
        alert("Pick a height and width below 100")
        askHeight = Number(prompt("What height do you want?"));
        askWidth = Number(prompt("What width do you want?"));
   }

    
    if (!insideContainer) {
        createGrid(askHeight, askWidth);
    }
    
    else {
        insideContainer.remove();
        createGrid(askHeight, askWidth);

    }
    
})











