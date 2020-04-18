import React from 'react';
import Employees from '../components/Employees';
import '../components/Headerstyle.css';

class Home extends React.Component {

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
                    employees, allEmployees: employees
                })

            }).catch((error) => {
                this.setState({ isLoading: false, error });
            })
    }

    filterEmployees = (event) => {
        const filterValue = event.target.value;
        if (filterValue === 'All') {
            this.setState({ employees: this.state.allEmployees });
        }
        else {
            this.setState({
                employees: this.state.allEmployees.filter(function (employee) {
                    if (employee.stack === filterValue) {
                        return true;
                    }

                    return false;
                })
            })
        }
    }

    sortEmployees = () => {
        this.setState({
            employees: this.state.employees.sort(function (employee1, employee2) {
                var employee1LastName = employee1.name.split(' ')[1];
                var employee2LastName = employee2.name.split(' ')[1];

                if (employee1LastName > employee2LastName) {
                    return 1;
                }

                if (employee2LastName > employee1LastName) {
                    return -1;
                }

                return 0;
            })
        })
    }


    render() {
        const { isLoading, employees } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <React.Fragment>
                <div className="main">
                    <div className="headDiv">
                        <h1>Current Stack Employees</h1>
                        <div className="btnDiv">

                            <button className="sort-btn btn " type="submit" onClick={this.sortEmployees}> Sort by Last Name</button>

                            <label>FILTER BY</label>
                            <select onChange={this.filterEmployees}>
                                <option value="All" />
                                <option value="Full-Stack">Full-Stack</option>
                                <option value="Front-End">Front-End</option>
                                <option value="Back-End">Back-End</option>
                            </select>

                        </div>
                    </div>
                </div>


                <Employees employees={employees} />
            </React.Fragment >

        );
    }
}


export default Home;