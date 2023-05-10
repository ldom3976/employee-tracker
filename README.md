# Employee Tracker

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Overview](#overview)
- [Usage and Demonstration](#usage-and-demonstration)
- [Visual Representation](#visual-representation)
- [Links](#links)

## User Story:
`AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business`

## Acceptance Criteria
`GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database`

## Overview
Using Node.js, Inquirer and MySQL, I created an employee management system that can be run on the command line. The user may view and input departments, roles, and employees as well as update an employee's role.

## Usage and Demonstration

To use:
- Download through GitHub
- Open terminal and navigate to the employee-tracker directory
- Enter `npm init -y` into terminal to create a new .json file
- Enter `npm i` into terminal
- Install inquirer with `npm i`
- Install mysql12 with `npm i mysql12`
- Install console table with `npm i console.table`
- Navigate to the db folder
- Enter `mysql -u root -p` into terminal
- Enter your password
- Enter `source schema.sql` into terminal
- Enter `source seeds.sql` into terminal
- Enter `quit` into terminal
- Navigate back to the the employee_tracker folder
- Enter `npm start` into terminal

Link to video walkthrough:

link here

## Visual Representation

screenshots here

## Links

- Github: [Elisha Ballard](https://github.com/ldom3976)