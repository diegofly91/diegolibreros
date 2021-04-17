import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";

// @material-ui/icons
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';
import AppsIcon from '@material-ui/icons/Apps';
import { makeStyles } from "@material-ui/core/styles";

import UnillanosItem from './unillanosItem'
import UdemyItem from './udemyItem';
import PlatziItem from './platziItem';
import UTNItem from './utnItem';
import IngelmecItem from './ingelmecItem';
import ColpegasusItem from './colpegasusItem';
import BairesServiciosItem from './bairesserviciosItem';
import PostaItem from './postaenlineaItem';
import ImageGridList from './GridSkill';

import styles from "../../styles/jss/profilePage.js";

const useStyles = makeStyles(styles);

export default function SectionCV(){
    const classes = useStyles();
    return<GridContainer justify="center"  pad>
                <GridItem xs={12} sm={12} md={8} >
                    <NavPills
                        alignCenter
                        color="primary"
                        tabs={[
                            {
                                tabButton: "Portafolio",
                                tabIcon: WorkOutlineIcon,
                                tabContent: (
                                <GridContainer justify="center">
                                    <GridItem 
                                      className={classes.containerGrid} 
                                      xs={12} sm={6} md={5}>                                    
                                        <IngelmecItem />
                                        <ColpegasusItem />
                                    </GridItem>
                                    <GridItem 
                                      className={classes.containerGrid} 
                                      xs={12} sm={6} md={5}>                                   
                                        <BairesServiciosItem />
                                        <PostaItem />
                                    </GridItem>
                                </GridContainer>
                                )
                            },
                            {
                                tabButton: "Estudios",
                                tabIcon: SchoolIcon,
                                tabContent: (
                                <GridContainer justify="center">
                                    <GridItem 
                                      className={classes.containerGrid} 
                                      xs={12} sm={6} md={5}>
                                        <UnillanosItem />
                                        <UdemyItem />
                                    </GridItem>
                                    <GridItem 
                                      className={classes.containerGrid} 
                                      xs={12} sm={6} md={5}>                                    
                                        <PlatziItem />
                                        <UTNItem />
                                    </GridItem>
                                </GridContainer>
                                )
                            },
                            {
                                tabButton: "Habilidades",
                                tabIcon: AppsIcon,
                                tabContent: (
                                <GridContainer justify="center">
                                    <GridItem 
                                      className={classes.containerGrid} 
                                      xs={12} sm={12} md={12}>
                                        <ImageGridList />
                                    </GridItem>
                                </GridContainer>
                                )
                            },
                        ]}
                    />
                </GridItem>
            </GridContainer>      
}
