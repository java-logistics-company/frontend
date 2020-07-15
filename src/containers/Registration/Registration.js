import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Error from '../../components/Error/Error';
import NotFound from '../../components/NotFound/NotFound';
import { registerActions } from '../../actions/register.actions';
import { rolesConstants } from '../../constants/roles.constants';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './Registration.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiGrid-item': {
      flexGrow: 1
    }
  },
  control: {
    padding: theme.spacing(3)
  },
  formControl: {
    width: '100%'
  },
  formTitle: {
    textAlign: 'center',
    padding: '0 0 30px 0',
    color: '#313042'
  },
  textField: {
    width: '100%'
  },
  colWidth: {
    maxWidth: '33.3%',
    flexBasis: '33.3%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '50%',
      flexBasis: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      flexBasis: '100%'
    }
  }
}));

const Registration = ({
  getUserDetails,
  match,
  userRole,
  submitForm
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+359',
    password: '',
    repeatPassword: '',
    officeName: '',
    showError: false
  });

  const {
    name,
    email,
    phone,
    password,
    repeatPassword,
    officeName,
    showError
  } = formData;


  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    officeName: ''
  });

  const errorMessages = {
    name: {
      length: 'Your name is required to finish the registration',
      invalid: 'Invalid format of the name'
    },
    email: {
      length: 'Your email is required to finish the registration',
      invalid: 'Invalid format of the email'
    },
    phone: {
      length: 'Your phone number is required to finish the registration',
      invalid: 'Invalid format of the phone number'
    },
    password: {
      length: 'Your password must be at least 6 characters long'
    },
    repeatPassword: {
      matching: 'Passwords do no match'
    },
    officeName: {
      length: 'Your office name is required to finish the registration',
      invalid: 'Invalid format of the office name'
    }
  };

  const classes = useStyles();

  // useEffect(() => {
  //   getUserDetails(match.params.id).then(
  //     setFormData({ //TODO remove form data
  //       ...formData,
  //       userRole: userRole
  //     })
  //   );
  // }, []);

  const onChange = event => {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validation = field => {
    const phoneNumberValidator = RegExp(
      '(\\+)?(359|0)8[789]\\d{1}\\d{3}\\d{3}'
    );

    const emailValidator = RegExp('.+@.+.[a-z]+');

    switch (field) {
      case 'name':
        errors.name =
          name.trim().length === 0
            ? errorMessages.name.length
            : !isNaN(name) && errorMessages.name.invalid;
        setErrors({
          ...errors,
          name: errors.name
        });
        break;
      case 'email':
        errors.email =
          email.trim().length === 0
            ? errorMessages.email.length
            : !emailValidator.test(email) && errorMessages.email.invalid;
        setErrors({
          ...errors,
          email: errors.email
        });
        break;
      case 'phone':
        errors.phone =
          phone.trim().length === 0
            ? errorMessages.phone.length
            : !phoneNumberValidator.test(phone) &&
            errorMessages.phone.invalid;
        setErrors({
          ...errors,
          phone: errors.phone
        });
        break;
      case 'password':
        errors.password =
          password.trim().length < 6 ? errorMessages.password.length : '';
        setErrors({
          ...errors,
          password: errors.password
        });
        break;
      case 'repeatPassword':
        errors.repeatPassword =
          repeatPassword !== password
            ? errorMessages.repeatPassword.matching
            : '';
        setErrors({
          ...errors,
          repeatPassword: errors.repeatPassword
        });
        break;
      case 'officeName':
        errors.officeName =
          officeName.trim().length === 0
            ? errorMessages.officeName.length
            : !isNaN(officeName) && errorMessages.officeName.invalid;
        setErrors({
          ...errors,
          officeName: errors.officeName
        });
        break;
      default:
        break;
    }
  };

  const clientFields = () => (
    <>
      <Grid item className={classes.colWidth}>
        <TextField
          className={classes.textField}
          id="phone-input"
          required
          label="Mobile number"
          type="text"
          name="phone"
          margin="normal"
          variant="outlined"
          value={phone}
          onChange={onChange}
          error={errors.phone.length > 0}
          helperText={errors.phone}
          onBlur={event => validation(event.target.name)}
        />
      </Grid>
      <Grid item className={classes.colWidth}>
      <TextField
        className={classes.textField}
        id="company-name-input"
        required
        label="Company name"
        type="text"
        name="companyName"
        autoFocus
        margin="normal"
        variant="outlined"
        value={officeName}
        onChange={onChange}
        error={errors.officeName.length > 0}
        helperText={errors.officeName}
        onBlur={event => validation(event.target.name)}
      />
    </Grid>
    </>
  );

const employeeFields = () => (//TODO office id/name
  <TextField
    className={classes.textField}
    id="company-name-input"
    required
    label="Office name"
    type="text"
    name="officeName"
    autoFocus
    margin="normal"
    variant="outlined"
    value={officeName}
    onChange={onChange}
    error={errors.officeName.length > 0}
    helperText={errors.officeName}
    onBlur={event => validation(event.target.name)}
  />
);

const handleSubmit = e => {
  e.preventDefault();
  const errorsArray = Object.values(errors);
  const { userRole } = userRole;//TODO not defined

  switch (userRole) {
    case rolesConstants.CLIENT:
      if (
        errorsArray.some(err => !!err) ||
        name.length === 0 ||
        email.length === 0 ||
        password.length < 6 ||
        phone.length === 0 ||
        repeatPassword.length === 0
      ) {
        setFormData({ showError: !!showError });
        setTimeout(() => {
          setFormData({ showError: false });
        }, 3000);
      } else {
        const formData = {
          name: name,
          email: email,
          password: password,
          repeatPassword: repeatPassword,
          phone: phone
        };
        submitForm(formData, userRole);
      }
      break;
    case rolesConstants.EMPLOYEE:
      if (
        errorsArray.some(err => !!err) ||
        name.length === 0 ||
        officeName.length === 0 ||
        password.length === 0 ||
        repeatPassword.length === 0
      ) {
        setFormData({ showError: true });
        setTimeout(() => {
          setFormData({ showError: false });
        }, 3000);
      } else {
        const formData = {
          name: name,
          email: email,
          password: password,
          repeatPassword: repeatPassword,
          phone: phone,
          officeName: officeName //TODO
        };
        submitForm(formData, userRole);
      }
      break;
    default:
      throw new Error('Invalid user role');
  }
};

const [spacing] = React.useState(2);

return (
  <>
    {/* {registerDetails.formError ? (
      <NotFound />
    ) :  */}
    (
        <main className="main">
          <div className="main-wrapper">
            <Grid container justify="center" className={classes.root}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  component="h1"
                  className={classes.formTitle}
                >
                  Registration
                </Typography>
              </Grid>
              <form onSubmit={handleSubmit}>
                {/* //TODO add disabled choosen role */}
                <Grid container spacing={spacing} justify="center">
                  <Grid item className={classes.colWidth}>
                    <TextField
                      className={classes.textField}
                      id="first-name-input"
                      required
                      label="Name"
                      type="text"
                      name="name"
                      autoFocus
                      margin="normal"
                      variant="outlined"
                      value={name}
                      onChange={onChange}
                      error={errors.name.length > 0}
                      helperText={errors.name}
                      onBlur={event => validation(event.target.field)}
                    />
                  </Grid>
                  <Grid item className={classes.colWidth}>
                    <TextField
                      className={classes.textField}
                      id="email-input"
                      required
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      value=""
                    />
                  </Grid>
                  <Grid item className={classes.colWidth}>
                    <TextField
                      className={classes.textField}
                      id="password-input"
                      required
                      label="Password"
                      type="password"
                      name="password"
                      margin="normal"
                      variant="outlined"
                      onChange={onChange}
                      error={errors.password.length > 0}
                      helperText={errors.password}
                      onBlur={event => validation(event.target.name)}
                    />
                  </Grid>
                  <Grid item className={classes.colWidth}>
                    <TextField
                      className={classes.textField}
                      id="confirm-password-input"
                      required
                      label="Repeat password"
                      type="password"
                      name="repeatPassword"
                      margin="normal"
                      variant="outlined"
                      onChange={onChange}
                      error={errors.repeatPassword.length > 0}
                      helperText={errors.confirmPassword}
                      onBlur={event => validation(event.target.name)}
                    />
                  </Grid>
                    Role fields here
                    <Grid item className={classes.colWidth}>
                    {userRole === 'EMPLOYEE' &&
                      employeeFields()}
                    {userRole === 'CLIENT' &&
                      clientFields()}
                  </Grid>
                  <Grid item xs={12}>
                    {showError && (
                      <Error message="Please fill out all the input fields" />
                    )}
                    <button
                      type="submit"
                      className="primary primary--large primary--margin-top center"
                    >
                      REGISTER
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </div>
        </main>
      )}
  </>
);
};

const mapStateToProps = state => ({
  userRole: state.userRole
  // registerDetails: state.register
});

const mapDispatchToProps = dispatch => ({
  getUserDetails: registerId =>
    dispatch(registerActions.getUserDetails(registerId)), //TODO remove
  submitForm: formData => dispatch(registerActions.submitForm(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);