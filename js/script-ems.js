const table = document.getElementsByTagName('tbody')[0];
let count = 0

// CREATE AN ARRAY OF EMPLOYEES
let employees = []
employees = [
    ["12345678", "Xander Harris", "4746", "xander@email.com", "Administrative"],
    ["18469265", "Willow Rosenberg", "7861", "willow@email.com", "Engineering"],
    ["97518934", "Buffy Summers", "1234", "buffy@email.com", "Executive"],
    ["44875631", "Cordelia Chase", "1178", "cordelia@email.com", "Sales"],
    ["08450649", "Tara Maclay", "0945", "tara@email.com", "Quality Assurance"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
function displayEmployees() {
    let storedEmployees = JSON.parse(localStorage.getItem('employees'))
    // console.log(localStorage.getItem('employees'))
    // console.log(storedEmployees)
    if ("employees" in localStorage) {
        employees = storedEmployees
        // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
        // document.getElementById('empTable').innerHTML = (localStorage.getItem('employees'))
    }
    else {
        return
    }
}
displayEmployees()

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function buildTable() {
    table.innerHTML = ''

    for (var employee of employees) {
        table.innerHTML += (`<tr><td>${employee[0]}</td><td>${employee[1]}</td><td>${employee[2]}</td><td>${employee[3]}</td><td>${employee[4]}</td><td><button class="btn btn-sm btn-danger delete">X</button</td></tr>`)
        count++;
        empCount.value = `(${count})`;
    }

    localStorage.setItem('employees', JSON.stringify(employees))
}

window.onload = buildTable()

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [empID, empName, empExt, empEmail, empDept]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    console.log(employees)
    // BUILD THE GRID
    buildTable()

    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    count++;
    empCount.value = `(${count})`;

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

            // REMOVE EMPLOYEE FROM ARRAY
            // employees.splice(employees, 1)

            // BUILD THE GRID
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);

            // DECREMENT THE COUNTER
            count--;
            empCount.value = `(${count})`;
        }
    }
});
