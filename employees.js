import db from './db.js';

export async function getAllEmployees() {
    const [rows] = await db.query('SELECT * FROM employees');
    return rows;
};

export async function getEmployeeById(id) {
    const [rows] = await db.query(
        'SELECT * FROM employees WHERE employee_id = ?',
        [id]
    );
    return rows[0]
};

export async function addEmployee(employees) {
    await db.query(
        `INSERT INTO employees (first_name, last_name, email, hire_date, job_id) VALUES (?, ?, ?, ?, ?)`,
        [
            employees.first_name,
            employees.last_name,
            employees.email,
            employees.phone_number,
            employees.department,
            employees.salary
        ]
    );

    const [rows] = await db.query('SELECT * FROM employees')
    return rows;
};

export async function deleteEmployee(id) {
    await db.query(
        'DELETE FROM employees WHERE employee_id = ?',
        [id]
    );

    const [rows] = await db.query('SELECT * FROM employees')
    return rows;
}

export async function  updateEmployee(id, emp) {
    await db.query(
        `UPDATE employees 
        SET first_name = ?, last_name = ?, email = ?, phone_number = ?, department = ?, salary = ?
        WHERE employee_id = ?`,
        [
            emp.first_name,
            emp.last_name,
            emp.email,
            emp.phone_number,
            emp.department,
            emp.salary
        ]
    );

    const [rows] = await db.query(
        'SELECT * FROM employees WHERE employee_id = ?'
        [id]
    );

    return rows[0];
};