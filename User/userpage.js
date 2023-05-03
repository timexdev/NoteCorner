const storedObjectString = localStorage.getItem('CurrentUser');

// Convert the string back to an object
const storedObject = JSON.parse(storedObjectString);

// document.getElementById('usern').innerHTML = storedObject;

        var noteArr = [];
        var isEditing = false;
        var editingIndex;

       

        
        function getExistingNotes(){
            let localNote = localStorage.getItem("notes");
            if(localNote){
                noteArr = JSON.parse(localNote);
            }else{
                noteArr = [];
            }
            
            displayNote(); 

        }
        

        function addNote(){
            if(isEditing){
                let Title = document.getElementById('titleInput').value;
                let Note = document.getElementById('noteContentInput').value;
                let noteObj = {title:Title, note:Note, date: new Date().toUTCString()}

                noteArr[editingIndex] = noteObj;

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

        function updateLocalStorage(){
            localStorage.setItem ("notes", JSON.stringify(noteArr));
        }

        function displayNote(){
            let content = "";
            let i;
            for ( i = 0; i < noteArr.length; i++) {
                
                    content +=`<div style="border-bottom:1px solid black;"> <p class="fw-semibold mt-3 fs-4">${noteArr[i].title}</p> <p class="text-primary">${noteArr[i].date}</p> <p>${noteArr[i].note}</p> <button class="mb-3 me-2 border-0 bg-danger text-white rounded-1 px-3 py-1" onclick="deleteNote(${i})">Delete</button> <button class="mb-3 border-0 bg-success text-white rounded-1 px-3 py-1" onclick="editNote(${i})">Edit</button></div>`;
                  
            }
            document.getElementById('showBox').innerHTML = content;
            document.getElementById('addNoteBtn').innerHTML = 'Add Note'
            isEditing = false;
        }

        function displayRecentNote(){
            let content = "";
            let i;
            for ( i = 0; i < 5; i++) {
                
                    content +=`<div style="border-bottom:1px solid black;"> <p class="fw-semibold mt-3 fs-4">${noteArr[i].title}</p> <p class="text-primary">${noteArr[i].date}</p> <p>${noteArr[i].note}</p></div>`;
                  
            }
            document.getElementById('showRecentBox').innerHTML = content;
            document.getElementById('addNoteBtn').innerHTML = 'Add Note'
            isEditing = false;
        }

       
        function deleteNote(i){
            if(confirm ("Click OK to delete note!!!")) {
                noteArr.splice(i,1);
            
                updateLocalStorage();
                displayNote();
                displayRecentNote();
            }   
        }


        function editNote(i){
            if(confirm("Click OK to update your note")) {
                editingIndex = i;

                let note = noteArr[i];
                titleInput.value = note.title;
                noteContentInput.value = note.note;

                document.getElementById('addNoteBtn').innerHTML = 'Update Note'
                isEditing = true;
            }
        }
        
       