import React from "react";
import {
   Box,
   Container,
   Stack,
   SimpleGrid,
   Text,
   Link,
   VisuallyHidden,
   chakra,
   useColorModeValue,
   Image,
   Button,
} from "@chakra-ui/react";
// import five from "../Images/fo.png"
import logo from '../Assests/petlogonew.png'
import {
   FaTwitter,
   FaYoutube,
   FaInstagram,
   FaLinkedin,
   FaFacebook,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
   return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
         {children}
      </Text>
   );
};

const SocialButton = ({ children, label, href }) => {
   return (
      <chakra.button
         bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
         rounded={"full"}
         w={9}
         h={8}
         cursor={"pointer"}
         as={"a"}
         href={href}
         display={"inline-flex"}
         alignItems={"center"}
         justifyContent={"center"}
         transition={"background 0.3s ease"}
         _hover={{
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   );
};
const Footer = () => {
   return (
      <Box
         bg={useColorModeValue("#6504b5", "gray.900")}
         color={useColorModeValue("#ffffff", "gray.200")}
      >
       {/* <Box> */}
            {/* <img src={logo} style={{backgroundColor:"white",marginLeft:"auto"}} alt="" /> */}
         {/* </Box> */}
         <Container as={Stack} maxW={"7xl"} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={{ base: 10, sm: 5, md: 1 }}>
               <Stack align={"flex-start"}>
         <img src={logo} style={{backgroundColor:"white",width:"40%",borderRadius:"20px"}} alt="logo" srcset="" />
         <Text fontWeight={700} letterSpacing={1}>RESOURCES</Text>
                  <Link href={"#"}>FAQs</Link>
                  <Link href={"#"}>Mobile App Download</Link>
                  <Link href={"#"}>Partnerships</Link>
                  <Link href={"#"}>News Center</Link>
                  <Link href={"#"}>Put Petfinder On Your Site</Link>
                  <Link href={"#"}>For Developers</Link>
                  <Link href={"#"}>Contact Us</Link>
                  {/* <Link href={"#"}>Cookbook</Link> */}
               </Stack>

               <Stack align={"flex-start"}>
               <br />
         <Text fontWeight={700} letterSpacing={1}>ADOPT OR GET INVOLVED</Text>
                  <Link href={"#"}>All Adopt or Get Involved</Link>
                  <Link href={"#"}>Adopting Pets</Link>
                  <Link href={"#"}>Animal Shelters & Rescues</Link>
                  <Link href={"#"}>Other Types of Pets</Link>
                  {/* <Link href={"#"}>Career</Link>
                  <Link href={"#"}>Investors Relations</Link> */}
               </Stack>

               <Stack align={"flex-start"}>
               <br />
         <Text fontWeight={700} letterSpacing={1}>ABOUT DOGS & PUPPIES</Text>
                  <Link href={"#"}>All About Dogs & Puppies</Link>
                  <Link href={"#"}>Dog Adoption</Link>
                  <Link href={"#"}>Dog Breeds</Link>
                  <Link href={"#"}>Feeding Your Dog</Link>
                  <Link href={"#"}>Dog Behavior</Link>
                  <Link href={"#"}>Dog Health & Wellness</Link>
                  <Link href={"#"}>Dog Training</Link>
                  <Link href={"#"}>Other Dog Information</Link>
               </Stack>
               <Stack align={"flex-start"}>
               <br />
         {/* <Text fontWeight={700} letterSpacing={1}>ABOUT CATS & KITTENS</Text> */}
                  <ListHeader>Customer Support</ListHeader>
                  {/* <Link href={"#"}>All About Cats & Kittens</Link>
                  <Link href={"#"}>Cat Adoption</Link> */}
                  <Link href={"#"}>All About Dogs & Kittens</Link>
                  <Link href={"#"}>Cat Adoption</Link>
                  <Link href={"#"}>Cat Breeds</Link>
                  <Link href={"#"}>Feeding Your Cat</Link>
                  <Link href={"#"}>Cat Behavior</Link>
                  <Link href={"#"}>Cat Health & Wellness</Link>
                  <Link href={"#"}>Cat Training</Link>
                  <Link href={"#"}>Other Cat Information</Link>
                  {/* <Link href={"#"}>contact@balancedbite.com</Link> */}
               </Stack>

               <Box bg={"white"} h={200} borderRadius={15} >
                  <Text color={"#6504b5"} p={"40px 2px 0px 3px"}>
                     To get the lastest on pet adoption and pet care, sign up
                     for the Petfinder newsletter.
                  </Text>
                  <Button bg={"#6504b5"} color={"white"} mt={5} w={"80%"} borderRadius={"30px"}>SIGN UP</Button>
               </Box>
               {/* <Stack align={"flex-start"}>
                  <ListHeader>Install App</ListHeader> */}
               {/* <Image src={PlayStoreBadge} width="150px"  alt='Logo' />
          <Image src={AppStoreBadge} width="150px"  alt='Logo' /> */}
               {/* </Stack> */}
            </SimpleGrid>
         </Container>

         <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
         >
            <Container
               as={Stack}
               maxW={"6xl"}
               py={4}
               direction={{ base: "column", md: "row" }}
               spacing={4}
               justify={{ md: "space-between" }}
               align={{ md: "center" }}
            >
               <Text>
                  ©2023 Petfinder.com All trademarks are owned by Société des
                  Produits Nestlé S.A., or used with permission.
               </Text>
               <Stack direction={"row"} spacing={6}>
                  <SocialButton label={"Facebook"} href={"#"}>
                     <FaFacebook />
                  </SocialButton>
                  <SocialButton label={"Twitter"} href={"#"}>
                     <FaTwitter />
                  </SocialButton>
                  <SocialButton label={"YouTube"} href={"#"}>
                     <FaYoutube />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"#"}>
                     <FaInstagram />
                  </SocialButton>
                  <SocialButton label={"Linkedin"} href={"#"}>
                     <FaLinkedin />
                  </SocialButton>
               </Stack>
            </Container>
         </Box>
      </Box>
   );
};

export default Footer;
