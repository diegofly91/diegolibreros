import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                        <h4>DEVELOPER FULL STACK JS</h4>
                        <LinkRedes />
                    </div>
                </div>
                </GridItem>
                <div className={classes.description}>
                    <p>
                    Dispuesto a trabajar en equipo, aporta y recibir ideas.    
                    </p>
                    <p>
                    Un buscador de soluciones optimizadas. Apasionado por estar en una 
                    fase de implementación de una carrera nueva de un desarrollador web profesional. 
                    Soy una persona ambiciosa, aventurera, incansable y motivada.
                    </p>
                    
                </div>
            </GridContainer>
}    
