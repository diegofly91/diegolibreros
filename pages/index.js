import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../components/Grid/GridItem.js";
// core components
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Parallax from "../components/Parallax/Parallax.js";

import styles from "../styles/jss/profilePage.js";
import Prueba from "../components/Prueba/SectionDrawOnDrop.js";
import SectionSocial from "../components/Social/SectionSocial.js";
import SectionCV from "../components/Profile/SectionCV.js";
import SectionCarousel from "../components/Carousel/SectionCarousel.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      /> */}
      <Parallax filter responsive image={require("../public/working-on-code.jpg")} >
        <div className={classes.containerView}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.titleView}>Todo empieza con una idea.</h1>
                <h4>
                  Hasta donde lleges depende de tu constancia y dedicación que coloques en tus proyectos,
                  trazando metas a corto y largo plazo.
                </h4>
              </GridItem>
            </GridContainer>
        </div>
      </Parallax>  
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
           <div className={classes.container}>
             <SectionSocial />
             <SectionCV /> 
             <SectionCarousel />
             <Prueba />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
