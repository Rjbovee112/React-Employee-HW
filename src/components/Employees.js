import React from 'react';
import './Employee.css';


class Employee extends React.Component {

    render() {
        const { employees } = this.props;


        return (
            <table className="table">
                <thead>
                    <tr>
                        <th className="table">Name</th>
                        <th className="table">Stack</th>
                        <th className="table">Phone</th>
                        <th className="table">Email</th>
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