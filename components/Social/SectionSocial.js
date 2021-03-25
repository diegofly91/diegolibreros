import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/Button.js";

import { makeStyles } from "@material-ui/core/styles";

import Avatar from '@material-ui/core/Avatar';

import styles from "../../styles/jss/profilePage.js";

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
                    {/* <Avatar src="/DIEGOFLIBREROS.jpeg" className={imageClasses}/>     */}
                    <img src="/DIEGOFLIBREROS.jpeg" alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                    <h3 className={classes.title}>Diego Libreros</h3>
                    <h4>DEVELOPER FULL STACK JS</h4>
                    <Button 
                        justIcon 
                        link 
                        href="https://www.whatsapp.com"
                        target="_blank"
                        className={classes.margin5}
                    >
                        <i className={"fab fa-whatsapp"} />
                    </Button>
                    <Button 
                        justIcon 
                        link 
                        className={classes.margin5}
                        href="https://www.instagram.com/"
                        target="_blank"
                    >
                        <i className={"fab fa-instagram"} />
                    </Button>
                    <Button 
                        justIcon 
                        link 
                        className={classes.margin5}
                        href="https://www.facebook.com/dflibreros/"
                        target="_blank"
                    >
                        <i className={"fab fa-facebook"} />
                    </Button>
                    <Button 
                        justIcon 
                        link 
                        className={classes.margin5}
                        href="https://www.github.com/diegofly91"
                        target="_blank"
                    >
                        <i className={"fab fa-github"} />
                    </Button>
                    </div>
                </div>
                </GridItem>
                <div className={classes.description}>
                    <p>
                    Un buscador de soluciones optimizadas. Apasionado por estar en una 
                    fase de implementación de una carrera nueva de un desarrollador web profesional. 
                    Soy una persona ambiciosa, aventurera, incansable y motivada.
                    </p>
                </div>
            </GridContainer>
}    
