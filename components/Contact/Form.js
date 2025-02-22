import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './contact-style';

function Form() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.message === 'Email sent successfully') {
        setNotif(true);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Paper className={classes.formBox}>
        <Grid container spacing={6}>
          <Grid item lg={5} xs={12}>
            <Typography className={cx(classes.title, text.title)} variant="h3">
              Contact
              <span>Me.</span>
            </Typography>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <TextValidator
                  color="secondary"
                  className={classes.input}
                  label={t('maskulino-landing.form_name')}
                  onChange={handleChange('name')}
                  name="Name"
                  value={values.name}
                  variant="standard"
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  color="secondary"
                  className={classes.input}
                  label={t('maskulino-landing.form_email')}
                  onChange={handleChange('email')}
                  name="Email"
                  variant="standard"
                  value={values.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                  color="secondary"
                  multiline
                  rows="6"
                  variant="standard"
                  className={classes.input}
                  label={t('maskulino-landing.form_message')}
                  onChange={handleChange('message')}
                  name="Message"
                  value={values.message}
                />
                <div className={classes.btnArea}>
                  <Button variant="contained" type="submit" color="primary" size="large">
                    {t('maskulino-landing.form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Form;
