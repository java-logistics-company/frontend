import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ChooseRole extends React.Component {

    componentDidUpdate() {
              this.props.history.push({ pathname: '/register' });
      }

    handleClick = e => {
        e.preventDefault();
        // this.props.userLogin(this.state.email, this.state.password);
        this.setState({ ...this.state, [e.target.name]: e.target.value });//TODO set user role to state
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