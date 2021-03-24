import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";

import image1 from "../../public/ingelmec.png";
import image2 from "../../public/colpegasus.png";
import image3 from "../../public/soec.png";
import image4 from "../../public/postaenlinea.png";

import styles from "../../styles/jss/carouselStyles.js";


const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false
  // };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Slider {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Ingelmec
                    </h3>
                  </div>
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Colpegasus
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Soec
                    </h3>
                  </div>
                  <img
                    src={image3}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Postaenlinea
                    </h3>
                  </div>
                </div>
              </Slider>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
