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
                employees: this.state.employees.filter(function (employee) {
                    if (employee.stack === filterValue) {
                        return true;
                    }

                    return false;
                })
            })
        }
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

                            <button className="sort-btn btn " type="submit"> Sort by Last Name</button>

                            <label>Filter by</label>
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