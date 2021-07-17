function addNewEdu(){
    let addNewEdu = document.createElement("textarea");
    addNewEdu.classList.add("form-control");
    addNewEdu.classList.add("mt-2");
    addNewEdu.classList.add("edField");
    addNewEdu.setAttribute("placeholder", "Enter Your Education")
    addNewEdu.setAttribute("cols", "30");
    addNewEdu.setAttribute("rows", "3");

    let edForm = document.getElementById("ed");
    let edbtn = document.getElementById("edBtn");

    edForm.insertBefore(addNewEdu, edbtn);
}
function addNewWork(){
    let addNewEdu = document.createElement("textarea");
    addNewEdu.classList.add("form-control");
    addNewEdu.classList.add("mt-2");
    addNewEdu.classList.add("weField");
    addNewEdu.setAttribute("placeholder", "Enter Work Experience")
    addNewEdu.setAttribute("cols", "30");
    addNewEdu.setAttribute("rows", "3");

    let edForm = document.getElementById("we");
    let edbtn = document.getElementById("weBtn");

    edForm.insertBefore(addNewEdu, edbtn);
}
function generate(){
    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;
    document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;

    document.getElementById('phoneT').innerHTML = document.getElementById('phoneField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;
    document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;
    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;

    //for education
    let eq = document.getElementsByClassName("edField");
    
    /* for(let e of document.getElementsByClassName("edField"))
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("edT").innerHTML = str;  */
    
    let str = '';
    for (var i = 0; i < eq.length; i++) {
        var a = eq[i];
        str = str + `<li> ${a.value} </li>`;
    }
    document.getElementById("edT").innerHTML = str;

    //for work Experiences
    let we = document.getElementsByClassName("weField");
    
    let str1 = '';
    for (var i = 0; i < we.length; i++){
        var a = we[i];

        str1 = str1 + `<li>${a.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str1;

    //hiding the input fields
    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}
function printCv(){
    window.print();
}

