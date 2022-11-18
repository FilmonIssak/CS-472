/**
 * HCMC - website
 */

"use strict"

window.addEventListener("DOMContentLoaded", ()=>{

    const form = document.querySelector("#form");
    form.addEventListener("submit", ()=>{
        event.preventDefault();


        let currentRowNo = 0;



        const patientId = document.querySelector("#patientIdNumber");
        const firstName = document.querySelector("#firstName")
        const middleInitial = document.querySelector("#middleInitials");
        const lastName = document.querySelector("#lastName");
        const dateOfBirth = document.querySelector("#dateOfBirth");
        const department = document.querySelector("#ddlDepartment");
        const out_patient = $("input[type='radio']:checked").val();


        const strPatientId = patientId.value;
        const strFirstName = firstName.value;
        const strMiddleInitial = middleInitial.value;
        const strLastName = lastName.value;
        const strDateOfBirth = dateOfBirth.value;
        const strDepartment = department.value;
        const strOut_patient = out_patient;




        tableForm(strPatientId,strFirstName,strMiddleInitial,strLastName,strDateOfBirth,strDepartment,strOut_patient)

        // strPatientId.value = "";
        // strFirstName.value ="";
        // strMiddleInitial.value = "";
        // strLastName.value = "";
        // strDateOfBirth.value = "";
        // strDepartment.valuel = "";
        // strOut_patient["selectedIndex"] = 0;



        function tableForm(patientId,firstName,middleInitial,lastName,dateOfBirth,department){
           

            const table = document.querySelector("#tbodyPatientsList")
            // let raw = document.createElement('tr')

            // let td1 = document.createElement('td')
            // td1.innerHTML = patientId
            // let td2 = document.createElement('td')
            // td2.innerHTML = firstName
            // let td3 = document.createElement('td')
            // td3.innerHTML = middleInitial
            // let td4 = document.createElement('td')
            // td4.innerHTML = lastName
            // let td5 = document.createElement('td')
            // td5.innerHTML = dateOfBirth
            // let td6 = document.createElement('td')
            // td6.innerHTML = department

            // raw.appendChild(td1)
            // raw.appendChild(td2)
            // raw.appendChild(td3)
            // raw.appendChild(td4)
            // raw.appendChild(td5)
            // raw.appendChild(td6)

            // table.appendChild(raw)

            const newRow = table.insertRow(-1);
            const newCellRowNo = newRow.insertCell(0);
            const strNewRowNo = document.createTextNode(`${++currentRowNo}`);
            newCellRowNo.appendChild(strNewRowNo); 

            const newpatientId = newRow.insertCell(1);
            const strpatientId = document.createTextNode(`${patientId}`);
            newpatientId.appendChild(strpatientId); 

            const newFirstName = newRow.insertCell(2);
            const strFirstName = document.createTextNode(`${firstName}`);
            newFirstName.appendChild(strFirstName); 


            const newMiddleInitial = newRow.insertCell(3);
            const strMiddleInitial = document.createTextNode(`${middleInitial}`);
            newMiddleInitial.appendChild(strMiddleInitial); 

            const newLastName = newRow.insertCell(4);
            const strLastName = document.createTextNode(`${lastName}`);
            newLastName.appendChild(strLastName); 

            const newDateOfBirth = newRow.insertCell(5);
            const strDateOfBirth = document.createTextNode(`${dateOfBirth}`);
            newDateOfBirth.appendChild(strDateOfBirth); 

            const newDepartment = newRow.insertCell(6);
            const strDepartment = document.createTextNode(`${department}`);
            newDepartment.appendChild(strDepartment); 

            const newOut_patient = newRow.insertCell(7);
            const strOut_patient = document.createTextNode(`${out_patient}`);
            newOut_patient.appendChild(strOut_patient); 
            




        }


    })
});

elderlyPatient();

function elderlyPatient() {
    let checkBox = document.getElementById("chkElderlyPatients");
    let text = document.getElementById("text");
    if (checkBox.checked == true){
    //   text.style.display = "block";
    const table = document.querySelector("#tbodyPatientsList")

      if(dateOfBirth.value > 65){
        table = tableForm(strPatientId,strFirstName,strMiddleInitial,strLastName,strDateOfBirth,strDepartment,strOut_patient);
      }
      else{
        table = ""
      }
    } 
  }