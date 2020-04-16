import React from 'react';
import './Employee.css';


class Employee extends React.Component {
    state = {
        isLoading: true,
        employees: [],
    }

    componentDidMount() {
        //getting the employee from employees.json and adding it to our state
        fetch('./employees.json')
            .then(response => response.json())
            .then((employees) => {
                this.setState({
                    isLoading: false,
                    employees
                })

            }).catch((error) => {
                this.setState({ isLoading: false, error });
            })
    }


    render() {
        const { isLoading, employees } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stack</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <React.Fragment key={employee.id}>
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.stack}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        )
    }
}



export default Employee;