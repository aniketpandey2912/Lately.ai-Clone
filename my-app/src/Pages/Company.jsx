import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

export function Company() {
  return (
    <>
      {/* Banner-1 first letter - 'About' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
        px={40}
        bg="green.900"
      >
        <Box color="white" h={"auto"} w="80%" m="auto" textAlign={"center"}>
          <Center w={{ base: "100%", md: "100%" }} h="auto" px={10} py={20}>
            <Box>
              <Heading fontSize="17px">ABOUT</Heading>
              <Heading mb="5" fontSize="44px">
                AI fueled by the neuroscience of music?
              </Heading>
            </Box>
          </Center>
        </Box>
      </Container>

      {/* Banner-2 section starting with image */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"1px solid blue"}
        px={10}
        bg="#daece6"
      >
        <Box>
          <Flex
            color="#174c43"
            h={"auto"}
            w={{ base: "70%", sm: "70%", md: "50%", lg: "50%" }}
            m="auto"
            textAlign={{ base: "center", md: "left" }}
            flexDirection="column"
          >
            <Box mb="40px">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1ca4f99c05d00ccde0d83_katephones-p-1080.png"
                h={{ base: 150, sm: 170, md: 200, lg: 400 }}
                m="40px 0px 40px 0px"
              ></Image>
            </Box>

            <Box mb="40px">
              <Heading
                mb="5"
                fontSize={{ base: "23px", sm: "30px", md: "34px" }}
              >
                Here’s how it works:
              </Heading>
              <Text>
                Once upon a time, there was a rock ‘n roll dj, broadcasting to
                20 million listeners a day for Sirius/XM. And she learned how to
                turn listeners into fans (a.k.a. customers into evangelists) by
                tapping into old-school trigger points and tying them together
                with new ideas. <br />
                <br />
                ‍ That was our CEO, Kate, back in the day. <br />
                <br />
                Then Kate started a marketing agency and used the same
                methodology with words and an overwhelming amount of (ugh)
                spreadsheets for then-client, Walmart. <br />
                <br />
                Well, not just Walmart. It was a partnership between Walmart,
                United Way Worldwide, National Disability Institute, and tens of
                thousands of local, small business and nonprofit affiliates. In
                other words, every size business across for-profit, nonprofit
                and government.
                <br />
                <br />
                With Kate’s system, they achieved a 130%, three year,
                year-over-year ROI.
                <br />
                <br />
                In fact, Kate found similar success with all of her clients,
                regardless of industry or company size. So, along with one
                heckuva team, she created Lately to automate the whole kit and
                caboodle with AI
                <br />
                <br />
              </Text>
            </Box>

            <Box mb="40px">
              <Heading
                mb="5"
                fontSize={{ base: "23px", sm: "30px", md: "34px" }}
              >
                Here’s how it works:
              </Heading>
              <Text>
                Lately helps humans write better marketing content in
                collaboration with artificial intelligence and software
                automation. (That collaboration part is key, btw. And is the
                basis of everything we do.)
              </Text>
              <UnorderedList>
                <ListItem>
                  Each time your brain hears a new song, it automatically
                  accesses every song you’ve ever heard before.
                </ListItem>
                <ListItem>
                  Your brain then looks for familiar touch points in order to
                  index that new song in your memory banks.
                </ListItem>
                <ListItem>
                  Every voice has a frequency, like a musical note. When you
                  read text, you hear that voice inside your head.
                </ListItem>
                <ListItem>
                  Like a rock ‘n’ roll dj, it’s the writer's job to give you
                  familiar touch points in order to sell you something new.
                </ListItem>
                <ListItem>
                  Lately’s AI studies familiar touch points in order to create a
                  writing model and then applies this writing model to transform
                  longform content into something new.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box mb="40px">
              <Center>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f1c2e6312c3754f634dacb_stones-p-800.png"
                  h={{ base: 150, sm: 170, md: 200, lg: 400 }}
                  m="40px"
                ></Image>
              </Center>
            </Box>

            <Box mb="40px">
              <Heading
                mb="5"
                fontSize={{ base: "23px", sm: "30px", md: "34px" }}
              >
                Next...
              </Heading>
              <Text>
                Lately’s artificial intelligence studies what your social media
                audience wants to watch, hear or read and then builds you a
                custom writing model, based on what it learns. <br />
                <br />
                Then it uses that writing model to automatically repurpose any
                longform video, audio or text into DOZENS of pre-tested social
                media posts, based on what it learns. (Yes, way!)
              </Text>
            </Box>

            <Box mb="40px">
              <Heading
                mb="5"
                fontSize={{ base: "23px", sm: "30px", md: "34px" }}
              >
                Vision
              </Heading>
              <Text>
                Lately helps humans write better marketing content in
                collaboration with artificial intelligence and software
                automation. (That collaboration part is key, btw. And is the
                basis of everything we do.) <br />
                <br />
                Leading by example is core to our product and our belief. We
                walk the talk. And we do it, together. <br />
                <br />
                Because Lately is a community. We see ourselves as an extension
                of our customers' marketing teams and we prioritize relatability
                and listening so they see us as not AI-powered software but as
                humans. We actively try to get to know each and every one of
                them and make ourselves available for them to get to know us.{" "}
                <br />
                <br />
                Most importantly, we emphasize these beliefs internally, as
                well. Authenticity through honesty, collaboration, productive
                dialogue and a genuine desire to solve problems together is our
                lifeblood. As we are a community to our customers, we are also a
                community to ourselves; we recognize the magnitude of the
                journey we're on and rely upon each other to both acknowledge
                successes and work through challenges. <br />
                <br />
                Together, in partnership with our customers, we’re growing
                Lately into a new evolution of AI-content creation software that
                humans truly love.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>

      {/* Contact Us Section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
        px={10}
        bg="#e8f8f2"
      >
        <Box h="auto" py="30px" w="80%" m="auto" color="#174c43">
          <Heading mb="5" fontSize={{ base: "23px", sm: "30px", md: "32px" }}>
            Contact us
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            <GridItem
              w="100%"
              boxShadow="md"
              p="6"
              rounded="md"
              bg="white"
              h="auto"
              py="40px"
              borderRadius="10px"
            >
              <Heading
                mb="5"
                fontSize={{ base: "20px", sm: "20px", md: "24px" }}
              >
                Sales & Partnerships
              </Heading>
              <Link href="#" color="green" fontSize="20px">
                sales@lately.ai
              </Link>
            </GridItem>
            <GridItem
              w="100%"
              boxShadow="md"
              p="6"
              rounded="md"
              bg="white"
              h="auto"
              py="40px"
              borderRadius="10px"
            >
              <Heading
                mb="5"
                fontSize={{ base: "20px", sm: "20px", md: "24px" }}
              >
                Press Inquiries
              </Heading>
              <Link href="#" color="green" fontSize="20px">
                press@lately.ai
              </Link>
            </GridItem>
            <GridItem
              w="100%"
              boxShadow="md"
              p="6"
              rounded="md"
              bg="white"
              h="auto"
              py="40px"
              borderRadius="10px"
            >
              <Heading
                mb="5"
                fontSize={{ base: "20px", sm: "20px", md: "24px" }}
              >
                Contact us
              </Heading>
              <Link href="#" color="green" fontSize="20px">
                support@lately.ai
              </Link>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      {/* Careers Section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"1px solid blue"}
        bg="#daece6"
      >
        <Flex
          // bg="yellow"
          color="#174c43"
          h={"auto"}
          w="50%"
          m="auto"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          justifyContent={"center"}
          gap={{ base: 5, sm: 10, md: 10, lg: 20 }}
          p={{ base: 5, sm: 5, md: 5, lg: 20 }}
        >
          <Heading>Careers at Lately</Heading>
          <Button colorScheme="green" variant={"solid"}>
            <Link
              href="https://www.linkedin.com/company/latelyai/"
              _hover={{ textDecoration: "none" }}
            >
              JOIN OUR TEAM
            </Link>
          </Button>
        </Flex>
      </Container>
    </>
  );
}
