import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @mui/material components
import { makeStyles } from "../../styles/makeStyles";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";

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
                  <img src="api-gql.png" alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Api Graphql
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="ingelmec.png" alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Ingelmec
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="colpegasus.png" alt="First slide" className="slick-image" />
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
                    src="soec.png"
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src="postaenlinea.png" alt="Third slide" className="slick-image" />
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
