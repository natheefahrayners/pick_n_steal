import {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    deleteEmployee,
    updateEmployee
} from './employees.js';

(async () => {
    console.log('All:', await getAllEmployees());

    console.log('ONE:', await getEmployeeById(1));
    
    console.log('ADD:', await addEmployee({
        first_name: 'Sarah',
        last_name: 'Connor',
        email: 'sarah.connor@example.com',
        phone_number: '555-1234',
        department: 'Sales',
        salary: 60000
    }));

    console.log('UPDATE:', await updateEmployee(1, {
        first_name: 'John',
        last_name: 'Adams',
        email: 'john.adams@example.com',
        phone_number: '555-1234',
        department: 'Engineering',
        salary: 88000
    }));

    console.log('DELETE:', await deleteEmployee(2));
})();