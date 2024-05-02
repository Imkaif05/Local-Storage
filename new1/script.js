$(document).ready(function(){
    console.log("getdata");
    $("#btnaddstudent").click(function(){
        function getdata(){
            let student={
                fname:$("#firstname").val(),
                lname:$("#lastname").val()
            };
            $("#studentForm")[0].reset();
            return student;
        }
        
        function storedatatoLocalstorage(){
            if(localStorage.getItem("student")){
                console.log("done") 
                localStorage.setItem("student",JSON.stringify(getdata()));
            }
            else{
                localStorage.removeItem("student");
                localStorage.setItem("student",JSON.stringify(getdata()));
            }
        }

        //send data to server with AJAX request 
        function senddata(){
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getdata());
            xhr.open("POST","http://localhost:4000/storedata",true);
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(data);
        }

        //call storedatatolocalstorage and senddata functions
        storedatatoLocalstorage();
        // senddata();
        window.location.href="display-data.html";

    });
});