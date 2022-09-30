import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Product() {
  return (
    <>
      {/* Banner-1 first letter - 'The Lately' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={40}
        bg="green.900"
      >
        <Box color="white" h={"auto"} w="80%" m="auto" textAlign={"left"}>
          <Center w={{ base: "100%", md: "100%" }} h="auto" p={10}>
            <Box>
              <Heading fontSize="17px" color="#00c66b">
                PRODUCT OVERVIEW
              </Heading>
              <Heading mb="5" fontSize="44px">
                Take the Guesswork Out of What to Say on Social Media
              </Heading>
              <Text mb="5" fontSize="22px">
                Lately’s all-in-one solution uses A.I. to generate the most
                effective content for scaling your social media marketing and
                social selling programs.
              </Text>

              <Button
                colorScheme="green.400"
                variant="outline"
                borderColor={"lightgreen"}
                _hover={{ bg: "green.400" }}
              >
                TRY IT FREE
              </Button>
            </Box>
          </Center>
        </Box>
      </Container>

      {/* Banner-2 first letter - 'The Lately' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"1px solid blue"}
        px={10}
        bg="#daece6"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={{ base: "center", md: "left" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe8f07f305f86dca9eb1d69_lately_product_wheel-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading
                  mb="5"
                  fontSize={{ base: "23px", sm: "30px", md: "34px" }}
                >
                  The Lately Social A.I. Management Content Platform
                </Heading>
                <Text>
                  The Lately Social A.I. Management Content Platform In addition
                  to a full-service platform of scheduling, analytics and
                  enterprise-wide syndication features, Lately's artificial
                  intelligence generates dozens and even hundreds of custom,
                  pre-tested social posts automatically.
                </Text>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-3 first letter - 'A.I. Content Writing' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">A.I. Content Writing - How it Works</Heading>
                <Text mb="5">
                  First, Lately studies what words and phrases best resonate
                  with your target audience by analyzing the social channels you
                  connect to our platform. We then build a writing model based
                  on what we learn and apply this writing model to each piece of
                  longform content that you feed the A.I. brain.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7a906e969ea8c00a347d8_home-bowtie-content-to-gold.png"
                  w={300}
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-4 first letter - 'Feeding the Lately' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">Feeding the Lately A.I. Brain</Heading>
                <Text mb="5">
                  Upload longform content files like blogs, webpages, news
                  articles, white papers, newsletters or any kind of text
                  imaginable. You can also upload audio and video like podcasts,
                  workshops, conference panels, keynotes and more. We'll then
                  automatically transcribe your audio and video files for the
                  brain to ingest.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-5 first letter - 'Unlock the Gold' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">Unlock the Gold</Heading>
                <Text mb="5">
                  In minutes, Lately transforms your longform content into
                  dozens or even hundreds of quotes that our A.I. knows will get
                  you the highest engagement. Users have the opportunity to edit
                  and enhance all quotes, which, in the case of video files,
                  include the matching video clips of the speakers voicing the
                  text of each quote.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-6 first letter - 'Social Media Marketing' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29a7d50a96f863c3cb607_SocialMediaMarketing-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">Social Media Marketing</Heading>
                <Text mb="5">
                  Accelerates the preparation, approvals and scheduling steps
                  needed to publish droves of social media posts across your
                  channels.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-7 first letter - 'Social Selling' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">Unlock the Gold</Heading>
                <Text mb="5">
                  Ensures messaging is on point as you scale your social media
                  content across sales teams, executives and employees.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c07bcae60a0f0063646_SocialSelling-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Banner-8 first letter - 'Social Media Analytics' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29c543d22be5e1c68aaf2_SocialMediaAnalytics-01.svg"
                  w={300}
                ></Image>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading mb="5">Social Media Analytics</Heading>
                <Text mb="5">
                  Gives you performance analytics for each piece of social media
                  content and helps you shape your A.I. writing model to
                  constantly improve your shortform content.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
          </Flex>
        </Box>
        <Image
          src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe29d706767c54673422575_AndTheresMore_Text-01.svg"
          w={300}
          m="100px auto 100px auto"
        ></Image>
      </Container>

      {/* Banner-8 having 3 boxes */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        // bg="green.900"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w="80%"
            m="auto"
            gap={3}
            textAlign={"center"}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Center
              w={{ base: "100%", sm: "100%", md: "100%", lg: "30%" }}
              p="10px 0px 10px 0px"
            >
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a107354a9a53719df14e_Icon_Circles_AI.svg"
                  h={150}
                  m="10px auto 30px auto"
                ></Image>
                <Heading fontSize="36px" mb="30px">
                  Artificial Social Intelligence Engine
                </Heading>
                <Text fontSize="16px" mb="30px">
                  Our AI constantly learns from your past social media posts and
                  builds a writing model based on what is most engaging for your
                  audience.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
            <Center w={{ base: "100%", sm: "100%", md: "100%", lg: "30%" }}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a106b3d5038e3fa9b20f_Icon_Circles_Parent_Child.svg"
                  h={150}
                  m="10px auto 30px auto"
                ></Image>
                <Heading fontSize="36px" mb="30px">
                  Parent-Child Accounts
                </Heading>
                <Text fontSize="16px" mb="30px">
                  Make it easy to manage, publish and analyze all of your social
                  media content across multiple products, brands, regions,
                  franchises, and users all from one centralized place.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
            <Center
              w={{ base: "100%", sm: "100%", md: "100%", lg: "30%" }}
              p="10px 0px 10px 0px"
            >
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fe2a1073d22be4b6068b0ff_Icon_Circles_Pricing.svg"
                  h={150}
                  m="10px auto 30px auto"
                ></Image>
                <Heading fontSize="36px" mb="30px">
                  Just-right Pricing
                </Heading>
                <Text fontSize="16px" mb="30px">
                  Whether you’re just starting to scale your social media
                  marketing program or you’re ready to extend it across
                  executives and sales teams, we have an edition right-sized for
                  your needs.
                </Text>

                <Button
                  colorScheme="lightgreen"
                  variant="outline"
                  border={"1px solid lightgreen"}
                  _hover={{ bg: "green.400", color: "white" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* Review Section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        bg="green.900"
      >
        <Box>
          <Flex
            color="white"
            h={"auto"}
            w="80%"
            m="auto"
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                {/* his words */}
                <Heading mb="5">
                  Generate meaningful words that convert with the world’s most
                  human AI.
                </Heading>
                <Text mb="5">
                  “Before Lately, social media was a weak point for me to do
                  super consistently – because I didn’t have the time and didn’t
                  want to sound dumb or boring. Now I have confidence because
                  Lately takes the pressure off and makes me sound smart!”
                </Text>

                {/* his company logo */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6001c93ce5e6851d13888269_saplogowhite-p-500.png"
                  w={70}
                  mb={2}
                ></Image>

                {/* his name */}
                <Text mb="1" fontWeight="bold">
                  Alicia Jimenez :
                </Text>
                {/* designation descreption */}
                <Text>
                  Senior Vice President, Global Head of Technology & Platform
                  Services Delivery, SAP
                </Text>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                {/* his image */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000f81ed69a057cba01da03_1516314003757.jpeg"
                  w={300}
                  borderRadius="50%"
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
