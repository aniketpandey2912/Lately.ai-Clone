import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Pricing() {
  return (
    <>
      {/* banner-1 first letter - 'Lately Pricing' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"1px solid green"}
        px={{ base: 10, lg: 20, lg: 30, lg: 40 }}
        bg="green.900"
      >
        <Box color="white" h={"auto"} w="80%" m="auto" textAlign={"center"}>
          <Center w={{ base: "100%", md: "100%" }} h="auto" px={10} py={10}>
            <Box>
              <Heading mb="5" fontSize="44px">
                Lately Pricing & Plans
              </Heading>
              <Text>
                Repurpose any longform text, audio or video into dozens of
                social posts including matching audiograms or video clips.
              </Text>
            </Box>
          </Center>
        </Box>
        <Box mb="10">
          <Flex flexDirection={"row"} justifyContent="center" gap={4} mb="2">
            <Text color="#00c66b">MONTHLY</Text>
            <Switch size={"lg"} colorScheme="green" />
            <Text color="#00c66b">ANNUALY</Text>
          </Flex>
          <Text color="#00c66b">
            (Save up to 30% on any annual plan with AI that won’t blow out your
            wallet!)
          </Text>
        </Box>
      </Container>

      {/* Pricing section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
        px={{ base: 10, lg: 20, lg: 30, lg: 40 }}
        bg="#fff"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          <GridItem
            w={{ base: "95%", sm: "70%", md: "50%", lg: "100%" }}
            h="auto"
            borderRadius={"30px"}
            m="auto"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <VStack bg={"#e8f8f2"} py={10} h={400}>
              <Box>
                <Heading fontSize={"28px"}>Startly</Heading>
                <Flex flexDirection={"row"} gap={2}>
                  <Image
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/62cc683f72640f7652a4d646_watch_play.png"
                    alt="play-icon"
                    h={"30px"}
                  />
                  <Link href="https://www.youtube.com/watch?v=vRczqA7bLgY">
                    Watch Startly in action!
                  </Link>
                </Flex>
              </Box>
              <Heading>$14/mo</Heading>
              <Text
                as="i"
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                Billed Anually
              </Text>
              <Text
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                For teams. Text, video, audio & advanced editing features.
              </Text>
              <Text as="i">7-day free trial</Text>
              <Button
                colorScheme="green"
                variant="outline"
                _hover={{ bg: "green", color: "white" }}
                w="80%"
              >
                TRY FOR FREE NOW
              </Button>
            </VStack>

            <VStack
              h={{ base: "auto", md: 550, lg: "525" }}
              py="20px"
              px={10}
              textAlign={"left"}
              bg={"#fff"}
            >
              <Heading
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
                as="i"
              >
                Startly includes:
              </Heading>
              <OrderedList>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Generate dozens of social posts from text
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI learning for one brand voice
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI-recommended hashtags
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Single-user
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Email support
                </ListItem>
              </OrderedList>
              <Heading
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
                as="i"
              >
                Startly includes:
              </Heading>
              <OrderedList>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Facebook Company Pages
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Instagram Company Pages
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  LinkedIn Company & Personal Pages
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Twitter Company & Personal Pages
                </ListItem>
              </OrderedList>
            </VStack>
          </GridItem>

          <GridItem
            w={{ base: "95%", sm: "70%", md: "50%", lg: "100%" }}
            h="auto"
            borderRadius={"30px"}
            m="auto"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <VStack bg={"#e8f8f2"} py={10} h={400}>
              <Box>
                <Heading fontSize={"28px"}>Litely</Heading>
                <Flex flexDirection={"row"} gap={2}>
                  <Image
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/62cc683f72640f7652a4d646_watch_play.png"
                    alt="play-icon"
                    h={"30px"}
                  />
                  <Link href="https://www.youtube.com/watch?v=Nab1UUNDQgc">
                    Watch Litely in action!
                  </Link>
                </Flex>
              </Box>
              <Heading>$39/mo</Heading>
              <Text
                as="i"
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                Billed Anually
              </Text>
              <Text
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                For small businesses. Text, video & audio.
              </Text>
              <Text as="i">7-day free trial</Text>
              <Button
                colorScheme="green"
                variant="outline"
                _hover={{ bg: "green", color: "white" }}
                w="80%"
              >
                TRY FOR FREE NOW
              </Button>
            </VStack>

            <VStack
              h={{ base: "auto", md: 550, lg: "525" }}
              py="20px"
              px={10}
              textAlign={"left"}
              bg={"#fff"}
            >
              <Heading
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
                as="i"
              >
                Litely includes everything in Startly plus:
              </Heading>
              <OrderedList>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Generate dozens of social posts from video, audio or text
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Results include matching video clips or audiograms
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI learning for one brand voice
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI-recommended hashtags
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI-assisted scheduling and publishing
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Single-user
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Email support
                </ListItem>
              </OrderedList>
            </VStack>
          </GridItem>

          <GridItem
            w={{ base: "95%", sm: "70%", md: "50%", lg: "100%" }}
            h="auto"
            borderRadius={"30px"}
            m="auto"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <VStack bg={"#d7eef2"} py={10} h={400}>
              <Highlight
                query="MOST POPULAR!"
                styles={{
                  px: "1",
                  py: "1",
                  color: "blue.900",
                  bg: "green.400",
                  fontWeight: "bolder",
                  mt: "-50px",
                  position: "relative",
                }}
              >
                MOST POPULAR!
              </Highlight>
              <Box>
                <Heading fontSize={"28px"}>Professionally</Heading>
                <Flex flexDirection={"row"} gap={2}>
                  <Image
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/62cc683f72640f7652a4d646_watch_play.png"
                    alt="play-icon"
                    h={"30px"}
                  />
                  <Link href="https://www.youtube.com/watch?v=uMaTQjBr1Ec">
                    Watch Professionally in action!
                  </Link>
                </Flex>
              </Box>
              <Heading>$99/mo</Heading>
              <Text as="i">Billed Anually</Text>
              <Text
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                For teams. Text, video, audio & advanced editing features.
              </Text>
              <Text as="i">7-day free trial</Text>
              <Button
                colorScheme="green"
                variant="outline"
                _hover={{ bg: "green", color: "white" }}
                w="80%"
              >
                TRY FOR FREE NOW
              </Button>
            </VStack>

            <VStack
              h={{ base: "auto", md: 550, lg: "525" }}
              py="20px"
              px={10}
              textAlign={"left"}
              bg={"#fff"}
            >
              <Heading
                as="i"
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
              >
                Professionally includes everything in Litely plus:
              </Heading>
              <OrderedList>
                <ListItem fontSize={"14px"}>
                  Video & Audio transcript editing
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Video & Audio captioning
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Add video intros/outros
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI-recommended keywords
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Unlimited posts
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Includes up to 3 users
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Add additional users for $30/mo/user
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Priority support
                </ListItem>
              </OrderedList>
            </VStack>
          </GridItem>

          <GridItem
            w={{ base: "95%", sm: "70%", md: "50%", lg: "100%" }}
            h="auto"
            borderRadius={"30px"}
            m="auto"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <VStack bg={"#e8f8f2"} py={10} h={400}>
              <Box>
                <Heading fontSize={"28px"}>Enterprisely</Heading>
                <Heading fontSize={"28px"} mb={"10"}>
                  Call for pricing
                </Heading>
                <Text
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Request a Demo <br />
                  <br />
                  For enterprise businesses. Employee advocacy, parent/child
                  dashboards and performance engagement analytics at scale.
                </Text>
              </Box>

              <Button
                colorScheme="green"
                variant="outline"
                _hover={{ bg: "green", color: "white" }}
                w="80%"
              >
                REQUEST DEMO
              </Button>
            </VStack>

            <VStack
              h={{ base: "auto", md: 550, lg: "525" }}
              py="20px"
              px={10}
              textAlign={"left"}
              bg={"#fff"}
            >
              <Heading
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
                as="i"
              >
                Enterprisely includes everything in Professionally plus
              </Heading>
              <OrderedList>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  AI learning for multiple brand/employee voices
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Employee advocacy/social selling syndication
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Multi-regional/client campaign governance
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Facilisis in pretium nisl aliquet
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Advanced AI training
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Advanced scheduling suite
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Customizable marketing calendar
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Unlimited users
                </ListItem>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                >
                  Employee training and onboarding support
                </ListItem>
              </OrderedList>
              <Heading
                fontSize={{ base: "18px", sm: "16px", md: "14px", lg: "14px" }}
                as="i"
              >
                Additionally publish to:
              </Heading>
              <OrderedList>
                <ListItem
                  fontSize={{
                    base: "18px",
                    sm: "16px",
                    md: "14px",
                    lg: "14px",
                  }}
                  textAlign={"left"}
                >
                  YouTube Company Pages
                </ListItem>
              </OrderedList>
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      {/* 3 product boxes Us Section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
        px={10}
        bg="#e8f8f2"
      >
        <Box h="auto" py="30px" w="80%" m="auto" color="#174c43">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={5}
          >
            <GridItem w="100%" h="auto">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6318d0aa4a2c8342ebdc729a_hub_hoot-p-500.png"
                mb="5"
                borderRadius={15}
              ></Image>
              <Heading
                fontSize={{ base: "10px", md: "10px", lg: "14px" }}
                textAlign="justify"
              >
                <Highlight
                  query={[
                    "Hootsuite",
                    "Hootsuite Amplify",
                    "HubSpot Marketing",
                  ]}
                  styles={{ color: "#00c66b" }}
                >
                  Already have Hootsuite, Hootsuite Amplify or HubSpot Marketing
                  Hub? Awesome. We integrate with them, too.
                </Highlight>
              </Heading>
            </GridItem>
            <GridItem w="100%" h="auto">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/62741da191fed80058a34875_pricing2-p-500.png"
                mb="5"
                borderRadius={15}
              ></Image>
              <Heading
                fontSize={{ base: "10px", md: "10px", lg: "14px" }}
                textAlign="justify"
              >
                Want to generate from content in a language other than English?
                Just ask!
              </Heading>
            </GridItem>
            <GridItem w="100%" h="auto">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6274254a502a7a424b88694c_pricing3-p-500.png"
                mb="5"
                borderRadius={15}
              ></Image>
              <Heading
                fontSize={{ base: "10px", md: "10px", lg: "14px" }}
                textAlign="justify"
              >
                Don't have text to generate from? Our Discover Articles feature
                will find it for you! Powered by UpContent.
              </Heading>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      {/* Banner-1 first letter - 'About' */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
        // px={10}
        bg="rgb(23 76 67 / 90%)"
      >
        <Box color="white" h={"auto"} w="80%" m="auto" textAlign={"center"}>
          <Center w={{ base: "100%", md: "100%" }} h="auto" px={0} py={10}>
            <Box>
              <Heading fontSize={{ base: "25px", md: "40px" }}>
                <Highlight
                  query="Loved by humans"
                  styles={{ px: "1", py: "1", color: "#00c66b" }}
                >
                  Powered by AI Loved by humans.
                </Highlight>
              </Heading>
            </Box>
          </Center>
        </Box>
      </Container>

      {/* Review Section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        // border={"2px solid blue"}
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
                  “Lately’s ability to learn and contextually identify key
                  moments for social media is crucial for anyone who wants to
                  scale their content output.”
                </Text>

                {/* his company logo */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000ae53329164a22a76b350_logo_vayner_white-p-500.png"
                  w={70}
                  mb={2}
                ></Image>

                {/* his name */}
                <Text mb="1" fontWeight="bold">
                  May Niu :
                </Text>
                {/* designation descreption */}
                <Text>International Media Strategist, VaynerMedia</Text>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                {/* his image */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6000a9b70d1e28af64a0646f_1517402220129.jpeg"
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
