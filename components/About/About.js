import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import { useText } from 'theme/common';
import useStyles from './about-style';

function About() {
  const theme = useTheme();
  const { classes } = useStyles();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.prev}>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/contact1.svg" alt="badge" />
                  </figure>
                  <Typography component="h6" className={text.paragraph}>(+966)534055078</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/contact2.svg" alt="badge" />
                  </figure>
                  <Typography component="h6" className={text.paragraph}>bhesmarkperez@gmail.com</Typography>
                </div>
                <div className={classes.item}>
                  <figure>
                    <img src="/images/maskulino/contact3.svg" alt="badge" />
                  </figure>
                  <Typography component="h6" className={text.paragraph}>San Manuel Pangasinan, PH</Typography>
                </div>
              </div>
              {!isDesktop && (
                <Fragment>
                  <div className={classes.socmed}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-google" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
                    </IconButton>
                  </div>
                  <Typography variant="h5">
                    {t('maskulino-landing.banner_desc')}
                  </Typography>
                </Fragment>
              )}
              <Paper elevation={0} className={classes.photo}>
                <figure>
                  <img src="/images/maskulino/profile.svg" alt="profile" />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
