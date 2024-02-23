import React from "react";
// import profetional from "../assets/profetional.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Banner from "../components/Banner";
import { Hero } from "../components/hero/Hero";
import { Box, Button, Heading, Stack, Text, Input } from "@chakra-ui/react";
import "./Home.css"

function Home() {
  return (
    <div name="home"  >
      
      <Hero/>
      <Box>
            <Heading color={"#6504b5"} p={"5% 20%"} fontSize={"26px"} fontWeight={600} >
               Pets Available for Adoption Nearby
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={20}
               bg={"#EDE7F6"}
               padding={30}
            >
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        /* Optional: Position the image within the container */
                        //   position: "absolute",
                        //   top: 0;
                        //   left: 0;
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  {/* <Text fontWeight={600}>Boo</Text> */}
                  <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
            Boo
            </Heading>
                  {/* <h2>Boo</h2> */}
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64094873/1/?bust=1683454882&width=316"
                     alt=""
                  />
               <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
            Rallo
            </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59534213/1/?bust=1683800901&width=316"
                     alt=""
                  />
                <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
           Bravo
            </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316"
                     alt=""
                  />
               <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"purple"}>
            Tullo
            </Heading>
               </Box>
            </Stack>
         </Box>

         <Box p={100} >
            <Stack direction={{ base: "column", md: "row" }} className="dogs_box">
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
                  gap={0}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                     alt=""
                  />
                  <Heading p={5}>Dogs Adoption Article</Heading>
                  <Text p={5}>Learn about caring for your new dog</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 150px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={5}>LEARN MORE</Button> */}
               </Box>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                     alt=""
                  />
                  <Heading p={5}>Cat Adoption Article</Heading>
                  <Text p={5}>Helpful insights on what to expect</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 150px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={5}>LEARN MORE</Button> */}
               </Box>
            </Stack>
         </Box>

         <Box margin={"150px 100px"}>
            <Heading className="adopt"
               textAlign="center"
               fontFamily="arial helvetica "
                line-height=' 1.2'
                font-size= '30px'
                font-weight= '400'
               color="#4d4751"
               //  margin-bottom: 40px;
            >
               Planning to Adopt a Pet?
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={"80px"}
               justifyContent={"center"}
            >
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Checklist for New Adopters
                  </Heading>
                  <Text>Help make the transition, as smooth as possible.</Text>
                  <Button className="learn"
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
               </Box>
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     COVID-19 Resources
                  </Heading>
                  <Text>
                     Get the latest on adoption processes, learn how local
                     shelters and rescue groups are adapting and find out what
                     you can do to help dogs and cats in need right now.
                  </Text>
                  <Button  className="learn"
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={10} >Learn More</Button> */}
               </Box>
               <Box w={300}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Pet Adoption FAQs
                  </Heading>
                  <Text>Get answers to questions you haven't thought of.</Text>
                  <Button  className="learn"
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={10}>Learn More</Button> */}
               </Box>
            </Stack>
         </Box>
      
    </div>
  );
}

export default Home;
