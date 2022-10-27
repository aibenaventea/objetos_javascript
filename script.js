// inicio desafio 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function desafio1 (element){
    for(let i = 0; i < element.length; i++){
        console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
    }
}

desafio1(students);

// fin desafio 1

// inicio desafio 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
    {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
    {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function desafio2 (element){
    console.log("EMPLOYEES");
    for(let i = 0; i < users.employees.length; i++){
        console.log((i+1) + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + (users.employees[i].last_name.length + users.employees[i].first_name.length))
    }
    console.log("MANAGERS")
    for(let i = 0; i < users.managers.length; i++){
        console.log((i+1) + " - " + users.managers[i].last_name + ", " + users.managers[i].first_name + " - " + (users.managers[i].last_name.length + users.managers[i].first_name.length))
    }
}

desafio2(users);

// fin desafio 1