window.addEventListener('load', () => {
    
    let globalNames = ['Jonas', 'Martha', 'Franziska', 'Magnus', 'Mikkel'];
    let inputName = null;
    let currentIndex = null;
    let isEditing = false;

    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();

    function preventFormSubmit() {
        function formHandleSubmit(event) {
            event.preventDefault();
        }
        let form = document.querySelector('form');
    
        form.addEventListener('submit', formHandleSubmit);
    }
    
    function activateInput() {
        function insertName(newName) {
            globalNames.push(newName);
        }
    
        function updateName(newName) {
            globalNames[currentIndex] = newName;
        }

        function handleTyping(event) {
            let typedName = event.target.value;
            let hasText = !!event.target.value && event.target.value.trim() !== '';

            if (!hasText){
                return;
            }

            if (event.key === 'Enter') {
                if(isEditing) {
                    updateName(typedName);
                } else {
                    insertName(typedName);
                }

                isEditing = false;
                inputName.value = '';
                render();
            }
        }
        
        inputName.addEventListener('keyup', handleTyping);
        inputName.focus();
    }

    function render() {
        function createDeleteButton(index) {
            function deleteName() {
                globalNames.splice(index, 1);
                render();
            }

            let button = document.createElement('button');
            button.classList.add('clickable');
            button.classList.add('deleteButton');
            button.textContent = `x`;

            button.addEventListener('click', deleteName);

            return button;
        }

        function createSpan(index) {
            function editItem() {
                inputName.value = span.textContent;
                inputName.focus();
                isEditing = true;
                currentIndex = index;
            }

            let span = document.createElement('span');
            span.classList.add('clickable');
            span.textContent = `${globalNames[i]}`;

            span.addEventListener('click', editItem);

            return span;
        }

        let divNames = document.querySelector('#names');
        divNames.innerHTML= "";

        let ul = document.createElement('ul');
        
        for (i=0; i<globalNames.length; i++) {
            let li = document.createElement('li');
            let button = createDeleteButton(i);    

            let span = createSpan(i);

            ul.appendChild(li);
            li.appendChild(button);
            li.appendChild(span);
        }

        divNames.appendChild(ul);
        inputName.value = '';
    }

})