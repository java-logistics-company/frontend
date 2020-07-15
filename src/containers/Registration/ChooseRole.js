import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ChooseRole extends React.Component {

    state = {
        userRole: ''
    };

    componentDidUpdate() {
        this.props.history.push({ pathname: '/register' });
    }

    handleClick = e => {
        e.preventDefault();
        this.setState({ ...this.state, userRole: e.target.value });
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
                <Button variant="contained"
                    color="blue"
                    href="localhost:3001/Register"
                    onClick={this.handleClick}>
                    Employee
                </Button>
                <Button variant="contained" color="blue" href="#contained-buttons">
                    Supplier
                </Button>

            </React.Fragment>
        );
    }
}
export default ChooseRole;