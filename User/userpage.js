// const storedObjectString = localStorage.getItem('CurrentUser');

// // Convert the string back to an object
// const storedObject = JSON.parse(storedObjectString);

// document.getElementById('usern').innerHTML = storedObject;

// GLOBAL FUNCTIONS
var noteArr = [];
var isEditing = false;
var editingIndex;
var likeIndex;
var speakingIndex;


// FUNCTION TO GET EXISTING NOTES FROM LOCAL STORGAE
function getExistingNotes(){
    let localNote = localStorage.getItem("notes");
        if(localNote){
            noteArr = JSON.parse(localNote);
        }else{
            noteArr = [];
        }
        displayNote(); 
    }

    // Function to get existing recent notes from the local storage
    function getRecentNotes(){
        let localNote = localStorage.getItem("notes");
        if(localNote){
            noteArr = JSON.parse(localNote);
        }else{
            noteArr = [];
        }
        displayRecentNote(); 
    }
    
// FUNCTION FOR ADD NOTE BUTTON
function addNote(){
    if(isEditing){
        let Title = document.getElementById('titleInput').value;
        let Note = document.getElementById('noteContentInput').value;
        let noteObj = {title:Title, note:Note, date: new Date().toUTCString()}

        noteArr[editingIndex] = noteObj;
// command to clear data from input bar after it has been added to the note book. 
        document.getElementById('titleInput').value = "";
        document.getElementById('noteContentInput').value = "";
            
        updateLocalStorage();
        displayNote();
        displayRecentNote();
    }else{
        let Title = document.getElementById('titleInput').value;
        let Note = document.getElementById('noteContentInput').value;
        let noteObj = {title:Title, note:Note, date: new Date().toUTCString()};
        noteArr.unshift(noteObj);
// command to clear data from input bar after it has been added to the note book. 
        document.getElementById('titleInput').value = "";
        document.getElementById('noteContentInput').value = "";
        
        updateLocalStorage();
        displayNote();
        displayRecentNote();     
        }    
    }

// FUNCTION TO UPDATE LOCAL STORAGE
function updateLocalStorage(){
    localStorage.setItem ("notes", JSON.stringify(noteArr));
    }

//FUNCTION TO LOOP THE CONTENT SUPPLIED AND DISPLAY IT ON THE USERPAGE 
function displayNote(){
    let content = "";
    let i;
    for ( i = 0; i < noteArr.length; i++) {
            
        content +=`<div style="border-bottom:1px solid black;"> 
        <p class="fw-semibold mt-3 fs-4">${noteArr[i].title}</p> 
        <p class="text-primary">${noteArr[i].date}</p> 
        <p>${noteArr[i].note}</p> 
        <button class="btn btn-danger mb-3" onclick="deleteNote(${i})">Delete</button> 
        
        <!-- Button trigger modal -->
            <button type="button" class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editNote(${i})">
                Edit
            </button>
       
        </div>`;
    }

        document.getElementById('showBox').innerHTML = content;
        document.getElementById('addNoteBtn').innerHTML = 'Add Note'
        isEditing = false;
}

// FUNCTION TO DISPLAY RECENT NOTES
function displayRecentNote(){
    let content = "";
    let i;
    for ( i = 0; i < 5; i++) {
            
        content +=`<div style="border-bottom:1px solid black;"> <p class="fw-semibold mt-3 fs-4">${noteArr[i].title}</p> <p class="text-primary">${noteArr[i].date}</p> <p>${noteArr[i].note}</p></div>`;
    }

        document.getElementById('showRecentBox').innerHTML = content;
       
     
}


// FUNTION FOR DELETE BUTTON
function deleteNote(i){
    if(confirm ("Click OK to delete note!!!")) {
        noteArr.splice(i,1);
        
        updateLocalStorage();
        displayNote();
        displayRecentNote();
        }   
    }

    const modal = document.getElementById("exampleModal");
// FUNCTION FOR EDIT BUTTON
function editNote(i){
    if(confirm("Click OK to update your note")) {
        editingIndex = i;
        modal.style.display = "block";
        
        let note = noteArr[i];
        titleInput.value = note.title;
        noteContentInput.value = note.note;

        

        document.getElementById('addNoteBtn').innerHTML = 'Update Note'
       
        isEditing = true;
        }
    }

    // FUNCTION TO INCREASE NUMBER OF LIKES
    let likes = 0;
function likeBtn(i){
    likeIndex = i;
    likes++
    updateLocalStorage();
    // displayNote();
    
    document.getElementById('like-count').innerHTML = likes;
}
    

// // FUNCTION FOR SPEECH
// function speakBtn(i){
//     speakingIndex = i;
//     if('speechSynthesis' in window){
//         var message = new SpeechSynthesisUtterance();
//         var voices = speechSynthesis.getVoices();


//         message.text = document.getElementById('noteContentInput').value;
//         message.voice = voices[2];
//         message.volume = 1;
//         message.rate = 1;
//         message.pitch = 2;
//         message.lang = "en-US";
//         window.speechSynthesis.speak(message);
//     }else{
//         alert("Your Browser does not support speech synthesis !!!")
//     }
    

// }
   

 // <button onclick="likeBtn(${i})">Like</button> 
        // <span id="like-count">0</span> Likes 
        // <button onclick="speakBtn">Speak</button>