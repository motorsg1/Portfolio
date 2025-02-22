import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './timeline-style';
import brand from 'public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isMobile && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.maskulino.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Motors Gate Company</Typography>
                        <Typography gutterBottom>at Current Company</Typography>
                        <Typography className={classes.time}>2021 -Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Distribution & Marketing Company Ltd</Typography>
                        <Typography gutterBottom>at Second Company</Typography>
                        <Typography className={classes.time}>2016 - 2021</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Bits & Bytes Company</Typography>
                        <Typography gutterBottom>at First Company</Typography>
                        <Typography className={classes.time}>2014 - 2015</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <Typography variant="p" className={text.subtitle2}>Node.js, specializing in RESTful API development, authentication, and real-time applications. In React.js, I focus on building scalable front-end applications with component-based architecture, state management, and performance optimization.</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <Typography variant="p" className={text.subtitle2}>PHP & WordPress, including custom theme and plugin development, API integration, and optimizing WordPress for performance and security.</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <Typography variant="p" className={text.subtitle2}>SEO Optimization, implementing best practices for on-page and technical SEO, improving website rankings, and enhancing user experience through speed optimization and structured data.</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <Typography variant="p" className={text.subtitle2}>Eloqua Oracle Marketing Tools, leveraging automation, email marketing, lead management, and campaign optimization to drive effective digital marketing strategies.</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <Typography variant="p" className={text.subtitle2}>I have a deep passion for Photography and Videography, capturing stunning visuals that tell compelling stories. I also specialize in Graphic Design using Adobe professional tools such as Photoshop, Illustrator, and Premiere Pro, creating visually engaging content for branding, marketing, and digital experiences.</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
