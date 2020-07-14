import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import './Error.css';

class Error extends React.Component {
  state = {
    open: true
  };

  handleClose = (event, reason) => {
    this.setState({
      ...this.state,
      open: false
    });
  };

  render() {
    const { message } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={this.state.open}
        autoHideDuration={10000}
        onClose={this.handleClose}
        className="position"
      >
        <SnackbarContent
          className="error"
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className="message">
              <ErrorIcon className="icon icon-variant" />
              {message}
            </span>
          }
          action={[
            <IconButton
              className="btn-msg-close"
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon className="icon" />
            </IconButton>
          ]}
        />
      </Snackbar>
    );
  }
}

export default Error;
