import React from 'react';
import './Employee.css';


class Employee extends React.Component {

    render() {
        const { employees } = this.props;


        return (
            <table className="table">
                <thead>
                    <tr className="table2">
                        <th className="table1">Name</th>
                        <th className="table1">Stack</th>
                        <th className="table1">Phone</th>
                        <th className="table1">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <React.Fragment key={employee.id}>
                            <tr className="table">
                                <td className="table">{employee.name}</td>
                                <td className="table">{employee.stack}</td>
                                <td className="table">{employee.phone}</td>
                                <td className="table">{employee.email}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        )
    }
}



export default Employee;