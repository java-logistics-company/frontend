import React from "react";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ChooseRole extends React.Component {

    state = {
        userRole: ''
    };



    handleClick = e => {
        e.preventDefault();
    };

    render() {
        return (
            <React.Fragment>
                <Typography
                    gutterBottom //props 
                    variant="h4"
                    component="h6"
                    align="center"
                    className="register-title"
                >
                    Choose role
            </Typography>
                <Link to="/chooseRole/employee/register" >
                    <Button variant="contained"
                        color="blue"
                    >
                        Employee
                </Button>
                </Link>
                <Link to="/chooseRole/client/register">
                    <Button variant="contained"
                        color="blue"
                    >
                        Client
                </Button>
                </Link>

            </React.Fragment>
        );
    }
}
export default ChooseRole;