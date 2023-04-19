function Book(name, author, pages,status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let myLibrary = [];

//dummy input
const saharaBook = new Book('The Book of Strangers','Alexander Knysh','250',true);
const gameBook = new Book('The Tale of Mario','Mayamoto','300',false);
myLibrary.push(saharaBook);
myLibrary.push(gameBook);


function display(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(i);
        let card = document.createElement('div');
        card.className = "card";

        let title = document.createElement('p');
        title.className = "title";
        title.textContent = myLibrary[i].name;
        card.appendChild(title);

        let auth = document.createElement('p')
        auth.textContent = myLibrary[i].author;
        card.appendChild(auth);

        let nOfPage = document.createElement('p')
        nOfPage.textContent = "Pages: " + myLibrary[i].pages;
        card.appendChild(nOfPage);
        console.log(myLibrary[i].name);

        let statusDiv = document.createElement('div');
        statusDiv.className = "statusDiv"
        if(myLibrary[i].status === true){
            let status = document.createElement('p')
            status.textContent = "Status: Read";
            statusDiv.appendChild(status);

        }else{
            let status = document.createElement('p')
            status.textContent = "Status: Not Read" ;
            statusDiv.appendChild(status);
        }

        let swap = document.createElement('img');
        swap.src = './swap.png';
        statusDiv.appendChild(swap);

        card.appendChild(statusDiv);

        let img = document.createElement('img');
        img.src = './delete.png';
        img.className = "deleteThis";
        card.appendChild(img);
    
        //Delete Card;
        img.addEventListener('click', () => {
            myLibrary.splice(i,1);
            localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
            render();
        })

        //swap read status
        swap.addEventListener('click',() => {
            myLibrary[i].status = !myLibrary[i].status;
            localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
            render();
        })
        
        let books= document.getElementById("book");
        books.appendChild(card);
    }
}

display();

function addBookForm(){
    let card = document.createElement('div');
    card.className = "card";

    let title = document.createElement('p');
    title.className = "title";
    title.textContent = "Please enter your book info";
    card.appendChild(title);

    let form = document.createElement('form');
    card.appendChild(form);

    let inputForm = document.createElement('div');
    inputForm.className = "inputForm";
    form.appendChild(inputForm)

    // Book Input Form

    let labelBookName = document.createElement('label');
    labelBookName.for = "bookName";
    labelBookName.textContent = "Book Name: ";
    inputForm.appendChild(labelBookName);

    let bookName = document.createElement('input');
    bookName.id = "bookName";
    bookName.type = "text";
    bookName.name = "bookName";
    inputForm.appendChild(bookName);

    ///Author Input Form

    let labelAuthorName = document.createElement('label');
    labelAuthorName.for = "authorName";
    labelAuthorName.textContent = "Author Name: ";
    inputForm.appendChild(labelAuthorName);

    let authorName = document.createElement('input');
    authorName.id = "authorName"
    authorName.type = "text";
    authorName.name = "AuthorName";
    inputForm.appendChild(authorName);



    // Pages Input Form
    
    let labelPages = document.createElement('label');
    labelPages.for = "numPages";
    labelPages.textContent = "Pages: ";
    inputForm.appendChild(labelPages);

    let numPages = document.createElement('input');
    numPages.id = "numPages";
    numPages.type = "number";
    numPages.name = "numPages";
    numPages.min = "1";
    inputForm.appendChild(numPages);


    /* Status Input Form
    let labelStatus = document.createElement('label');
    labelStatus.for = "status";
    labelStatus.textContent = "Status: ";
    inputForm.appendChild(labelStatus);

    let status = document.createElement('input');
    status.type = "radio";
    status.name = "Status";

    status.id = "read"; */

    //Submit button 
    let submitButton = document.createElement('button')
    submitButton.type = "submit";
    submitButton.name = "button";
    submitButton.value = "click";
    submitButton.textContent = "Add";
    inputForm.appendChild(submitButton);


    let books= document.getElementById("book");
    books.appendChild(card);

    form.addEventListener("submit",function(event){
        const title = document.getElementById('bookName').value
        const author = document.getElementById('authorName').value
        const pages = document.getElementById('numPages').value
        event.preventDefault();
        myLibrary.push(new Book(title, author, pages, true));

        localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
        console.log("im here");
        render();
        
    })

}


function render(){
    const bookContainer = document.getElementById('book');
        const books = document.querySelectorAll('.card');
        
        books.forEach(book => bookContainer.removeChild(book));
        display();

}



console.log(myLibrary);






let addBook = document.getElementById("AddAbook");
addBook.addEventListener("click",addBookForm);




