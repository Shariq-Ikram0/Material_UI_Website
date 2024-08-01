import { Padding } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/image.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ActionAreaCard from "./Cards";
import Images from "./Images";
import Form from "./Form";

import card1 from '../assets/3.png'
import card2 from '../assets/download.png'
import card3 from '../assets/11.jpg'
import card4 from '../assets/10.png'
import card5 from '../assets/blockchain.jpg'





const Body = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={8} lg={6}>
          <Box
            sx={{
              width: "60%",
              margin: "190px 0px 0px 140px",
              
            }}
          >
            <Typography sx={{ color: "darkgreen" }}>
              <h1>
                Introduction To
                <br />
                Jawan Pakistan
              </h1>
              <Typography sx={{ color: "gray" }}>
                <p>
                  The foundation of every state is the education and skills set
                  of its youth. Jawan Pakistan is such an organization of
                  Pakistan who is not only working on youth education but also
                  enhancing skills set in youth either Free of cost or in a very
                  low cost. This initiative, initially developed by a single
                  person and with almost no seed capital, promotes
                  entrepreneurship and innovation and Sustainable Development
                  Goal, which promotes inclusive and sustainable economic
                  growth.
                </p>
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} sx={{ margin: "250px 0px 0px 0px" }}>
          <img width="80%" height="auto" src={img1} />
        </Grid>

        <Grid item md={12} lg={5} sx={{ margin: "300px 0px 0px 100px" }}>
          <img width="80%" height="auto" src={img2} />
        </Grid>
        <Grid item md={12} lg={5}>
          <Box
            sx={{
              width: "75%",
              margin: "180px 0px 0px 140px",
              
            }}
          >
            <Typography sx={{ color: "darkgreen" }}>
              <h1>
                Mission And Vision
                <br />
                Behind Jawan Pakistan
              </h1>
              <Typography sx={{ color: "gray" }}>
                <p>
                  Our vision is to bring our students into the 21st century
                  through innovation and modern technology. To create a better
                  every day life for every people. This program is not only
                  impacting the youth in monetary perspective but it is also
                  creating some deep-rooted, long-term psychological effects
                  e.g. minimizing frustration among the unemployed youth.
                </p>

                <p>
                  Our mission is to provide high quality education that connects
                  young people with opportunities to transform their lives. The
                  educated youngsters who remain unemployed gets frustrated,
                  depressed and disheartened when they do not succeed in getting
                  their dream jobs. This training reinforces the educated youth
                  to earn well through freelancing, develop variety of skills
                  through specified domains and promote entrepreneurial culture
                  that diverts youths potentials for constructive purposes. This
                  energy diversion definitely make the youth more confident,
                  self-reliant and constructive asset for a progressing economy.
                </p>
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={7}>
            <Box sx={{ margin: "120px 0px 45px 210px" }}>
              <img width="55%" height="auto" src={img3} />
            </Box>
            <Box sx={{ color: "darkgreen" }}>
              <Typography
                align="center"
                variant="h3"
                sx={{ fontWeight: "700" }}
              >
                MUHAMMAD ALI MUGHAL
              </Typography>
              <Typography
                align="center"
                variant="h6"
                sx={{ color: "lightgray" }}
              >
                Founder of Jawan Pakistan<br /><FormatQuoteIcon />
              </Typography>

              <Typography
                align="center"
                variant="h6"
                sx={{ color: "gray" }}
              >
                We aim to be most efficient provider of business process
                outsourcing services by setting the industry standards for cost
                and quality of services. Our long term success will be driven by
                our relentless focus on recruiting and developing the most
                talented pool of human capital in our industry.
              </Typography>

            </Box>

          </Grid>
          <Grid item lg={9} sx={{ color: "darkgreen" }}>
            <Box sx={{ margin: "170px 0px 0px 0px" }}>
              <Typography
                align="center"
                variant="h3"
                sx={{ fontWeight: "700" }}
              >
                IT Trainings Offering In Jawan Pakistan
              </Typography>
            </Box>
          </Grid>



        </Grid>
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Grid item lg={3} sx={{ margin: "120px 0px 0px 0px" }}>
              <ActionAreaCard title={"Web and Mobile Application Development"} image={ card1} />
            </Grid>
            <Grid item lg={3} sx={{ margin: "120px 0px 0px 0px" }}>
              <ActionAreaCard title={"Flutter Mobile Application Development"} image={ card2}/>
            </Grid>
            <Grid item lg={3} sx={{ margin: "120px 0px 0px 0px" }}>
              <ActionAreaCard title={"Graphic Design And Video Editing"} image={ card3}/>
            </Grid>
            </Grid>
        </Container>
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Grid item lg={3} sx={{ margin: "90px 0px 0px 0px" }}>
              <ActionAreaCard title={"Digital And Social Media Marketing"} image={ card4}/>
            </Grid>
            <Grid item lg={3} sx={{ margin: "90px 0px 0px 0px" }}>
              <ActionAreaCard title={"BlockChain Development"} image={ card5}/>
            </Grid>
            </Grid>
        </Container>

        <Grid container justifyContent={"center"}>
        <Grid item lg={9} sx={{ color: "darkgreen" }}>
            <Box sx={{ margin: "170px 0px 0px 0px" }}>
              <Typography
                align="center"
                variant="h3"
                sx={{ fontWeight: "700" }}
              >
                Glimpses of sessions conducted by Jawan Pakistan
              </Typography>
            </Box>
          </Grid>
          
        </Grid>
        <Container>
          <Grid item lg={12} sx={{ margin: "150px 0px 0px 0px" }}>
          <Images/>
            </Grid>
        
        </Container>
        <Grid container justifyContent={"center"}>
        <Grid item lg={5} sx={{border: "none" , boxShadow:"1px 1px 8px 0.1px lightgray" , margin:"90px" }} >
        <Form/>
        </Grid>
        </Grid>


      </Grid>
    </div>
  );
};

export default Body;
