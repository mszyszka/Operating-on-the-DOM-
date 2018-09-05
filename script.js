    let elements = document.querySelectorAll('.btn');

    function toggleClass() {
        
    }

    for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let elementId = "element" + i;

            element.setAttribute('id', elementId);
            element.addEventListener('click', toggleClass());
        }
    
    
    
    // let elements = document.querySelectorAll('.btn');

    // for (let i = 0; i < elements.length; i++) {
    //     // let element = elements[i];
    //     elements[i].addEventListener('click', function toggleClass() {
            
    //     });
    // }



