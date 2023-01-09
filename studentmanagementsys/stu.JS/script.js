var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["location"] = document.getElementById("location").value;
    formData["email"] = document.getElementById("email").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["edu"] = document.getElementById("edu").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.edu;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("location").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("edu").value = "";

    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
    document.getElementById("edu").value = selectedRow.cells[5].innerHTML;

}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.dob;
    selectedRow.cells[5].innerHTML = formData.dob;

}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("firstname").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
        // userName validation
        if (document.getElementById("lastname").value == "") {
            isValid = false;
            document.getElementById("userNamevalidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
            {
                document.getElementById("userNamevalidationError").classList.add("hide");
            }
        }
    // location validation
    if (document.getElementById("location").value == "") {
        isValid = false;
        document.getElementById("locationvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("locationvalidationError").classList.contains("hide"))
        {
            document.getElementById("locationvalidationError").classList.add("hide");
        }
    }
    // email validation
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        {
            document.getElementById("emailvalidationError").classList.add("hide");
        }
    }
    // dob validation
    if (document.getElementById("dob").value == "") {
        isValid = false;
        document.getElementById("dobvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("dobvalidationError").classList.contains("hide"))
        {
            document.getElementById("dobvalidationError").classList.add("hide");
        }
    }
    // edu validation
    if (document.getElementById("edu").value == "") {
        isValid = false;
        document.getElementById("eduvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("eduvalidationError").classList.contains("hide"))
        {
            document.getElementById("eduvalidationError").classList.add("hide");
        }
    }
    return isValid;
}