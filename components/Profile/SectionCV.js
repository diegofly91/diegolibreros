import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";

// @mui/icons-material
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import AppsIcon from '@mui/icons-material/Apps';
import { makeStyles } from "../../styles/makeStyles";

import UnillanosItem from './unillanosItem'
import UdemyItem from './udemyItem';
import PlatziItem from './platziItem';
import UTNItem from './utnItem';
import ImageGridList from './GridSkill';

import ItemCard from './ItemCard.js';
import experiences from "../../constants/experience.js";

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
                                tabButton: "Briefcase",
                                tabIcon: WorkOutlineIcon,
                                tabContent: (
                                <GridContainer justify="center">
                                    {experiences.map((experience)  => {
                                        return  <ItemCard data={experience} />;
                                    })}
                                </GridContainer>
                                )
                            },
                            {
                                tabButton: "Studies",
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
                                tabButton: "Skills",
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
