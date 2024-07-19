document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const tableBody = document.getElementById('tableBody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const studentName = document.getElementById('studentName').value;
        const studentID = document.getElementById('studentID').value;
        const email = document.getElementById('email').value;
        const contactNo = document.getElementById('contactNo').value;

        // Validate inputs (basic validation)
        if (!studentName || !studentID || !email || !contactNo) {
            alert('Please fill in all fields.');
            return;
        }

        // Create table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${studentID}</td>
            <td>${email}</td>
            <td>${contactNo}</td>
            <td class="actions">
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);

        // Clear form inputs after submission
        form.reset();

        // Save to local storage (you can enhance this to save in a more structured way)
        saveToLocalStorage();

        // Add event listeners to new edit and delete buttons
        const editBtn = newRow.querySelector('.editBtn');
        const deleteBtn = newRow.querySelector('.deleteBtn');

        editBtn.addEventListener('click', function() {
        });

        deleteBtn.addEventListener('click', function() {
            newRow.remove();
            saveToLocalStorage(); // Update local storage after deletion
        });
    });

    // Load existing records from local storage on page load
    loadFromLocalStorage();

    // Function to save data to local storage
    function saveToLocalStorage() {
        const rows = tableBody.innerHTML;
        localStorage.setItem('studentRecords', rows);
    }

    // Function to load data from local storage
    function loadFromLocalStorage() {
        const rows = localStorage.getItem('studentRecords');
        if (rows) {
            tableBody.innerHTML = rows;
            // Add event listeners to edit and delete buttons of loaded rows
            tableBody.querySelectorAll('tr').forEach(row => {
                const editBtn = row.querySelector('.editBtn');
                const deleteBtn = row.querySelector('.deleteBtn');

                editBtn.addEventListener('click', function() {
                   
                });

                deleteBtn.addEventListener('click', function() {
                    // Implement delete functionality for loaded rows
                    row.remove();
                    saveToLocalStorage(); // Update local storage after deletion
                });
            });
        }
    }
});



// for phone number lmit upto 10 digit and no alphabet to be usedd

document.addEventListener('DOMContentLoaded', function() {
    const contactNo = document.getElementById('contactNo');

    contactNo.addEventListener('input', function() {
        // Remove any non-digit characters
        const cleanedValue = contactNo.value.replace(/\D/g, '');

        // Limit to 10 digits
        const limitedValue = cleanedValue.slice(0, 10);

        // Update the input value
        contactNo.value = limitedValue;
    });
});
