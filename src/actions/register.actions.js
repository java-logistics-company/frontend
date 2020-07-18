import { registerConstants } from '../constants/register.constants';
import { registerService } from '../services/register.services';
// import { loginActions } from './login.actions';

const getUserDetails = registerId => dispatch => {
  dispatch({ type: registerConstants.GET_USER_DETAILS });

  return registerService.getUserDetails(registerId).then(
    data =>
      dispatch({ type: registerConstants.GET_USER_DETAILS_SUCCESS, data }),
    error =>
      dispatch({ type: registerConstants.GET_USER_DETAILS_FAILURE, error })
  );
};

const checkPhoneNumber = phoneNumber => dispatch => {
  dispatch({ type: registerConstants.CHECK_PHONE_NUMBER });
  return registerService.checkPhoneNumber(phoneNumber).then(
    data =>
      dispatch({
        type: registerConstants.CHECK_PHONE_NUMBER_SUCCESS,
        data
      }),
    error =>
      dispatch({
        type: registerConstants.CHECK_PHONE_NUMBER_FAILURE,
        error
      })
  );
};

const checkCompanyName = companyName => dispatch => {
  dispatch({ type: registerConstants.CHECK_COMPANY_NAME });
  return registerService.checkCompanyName(companyName).then(
    data =>
      dispatch({
        type: registerConstants.CHECK_COMPANY_NAME_SUCCESS,
        data
      }),
    error =>
      dispatch({
        type: registerConstants.CHECK_COMPANY_NAME_FAILURE,
        error
      })
  );
};

const submitForm = (formData, role) => dispatch => {
  dispatch({ type: registerConstants.SUBMIT_REGISTRATION_FORM });

  return registerService.submitForm(formData, role).then(
    data => {
      // dispatch(loginActions.userLogin(formData.email, formData.password));
      return dispatch({
        type: registerConstants.SUBMIT_REGISTRATION_FORM_SUCCESS,
        data
      });
    },
    error =>
      dispatch({
        type: registerConstants.SUBMIT_REGISTRATION_FORM_FAILURE,
        error
      })
  );
};

export const registerActions = {
  getUserDetails,
  checkPhoneNumber,
  checkCompanyName,
  submitForm
};
