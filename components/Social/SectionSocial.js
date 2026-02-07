import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import { makeStyles } from "../../styles/makeStyles";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from "../../styles/jss/profilePage.js";
import LinkRedes from './LinkRedes';

const useStyles = makeStyles(styles);

export default function SectionSocial(){
    const classes = useStyles();
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                 <div className={classes.profile}>
                        <div>
                        <img src="./DIEGOFLIBREROS.jpeg" alt="..." className={imageClasses} />
                        </div>
                        <div className={classes.name}>
                        <h3 className={classes.title}>Diego Libreros</h3>
                        <h4>Software developer</h4>
                        <LinkRedes />
                    </div>
                </div>
                </GridItem>
                <div className={classes.description}>
                    <p>
                    Willing to work in a team, contributes and receives ideas.
                    </p>
                    <p>
                    A search engine for optimized solutions. Passionate about being in a
                    implementation phase of a new career of a professional web developer.
                    I am an ambitious, adventurous, tireless and motivated person.
                    </p>
                    
                </div>
            </GridContainer>
}    
