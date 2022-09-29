import {
  AspectRatio,
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
  Show,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const partners_img = [
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899d43bfa7a25f8fd57_logo_amerifirst_x.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8992c91187ad248ca38_logo_vayner_x.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8995d4cba780af3d126_logo_husky_x.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdfb04119999916a1844b1_logo_sap_x3.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899f52edc178bc1bae6_logo_dhl_x.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6054c974c47a07d324e73c9a_pwc3.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6127a82ecc42c1a55293539e_googlecloud.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899fdfd512e168afc71_logo_ss_x.png",
  "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60913dc77992896344096de0_sy-p-2000.png",
];

export function Home() {
  return (
    <>
      {/* Banner-1 first letter-"STOP" */}
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
                <Heading mb="5">Stop guessing what to say.</Heading>
                <Text mb="5">
                  Lately’s AI learns which words will get you the most
                  engagement and repurposes video, audio and text into dozens of
                  social posts that contain those words.
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
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f2c835efdcde7733f5dcba_flagkately-p-500.png"
                  w={300}
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* partners image section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"3px solid green"}
        p={10}
        // bg="green.400"
      >
        <Center>
          <Grid
            color="white"
            h={"auto"}
            w="80%"
            m="auto"
            templateColumns={{
              base: `repeat(3, 1fr)`,
              sm: `repeat(${
                partners_img.length - Math.floor(partners_img.length / 2)
              }, 1fr)`,

              md: `repeat(${partners_img.length}, 1fr)`,
            }}
            gap={6}
          >
            {partners_img.map((el) => (
              <GridItem w="100%" h="auto">
                <Image src={el}></Image>
              </GridItem>
            ))}
          </Grid>
        </Center>
      </Container>

      {/* video section 1st show- width above 665px, and below 665px render 2nd show  */}
      <Show breakpoint="(min-width: 665px)">
        <Container
          maxW={"100vw"}
          h={"auto"}
          border={"5px solid pink"}
          px={10}
          bg="#F0FFF4"
        >
          <Box>
            <Flex
              color="black"
              h={"auto"}
              w="80%"
              m="auto"
              flexDirection={{
                base: "column-reverse",
                md: "column-reverse",
                lg: "column-reverse",
                xl: "row",
              }}
            >
              <Center w="100%" h="auto" p={10} border="1px solid black">
                <Box>
                  <iframe
                    width="450"
                    height="250"
                    src="https://www.youtube.com/embed/uMaTQjBr1Ec"
                    title="Lately: Professionally Plan Sneak Peek"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
              </Center>
              <Center w="100%" p={10} border="1px solid black">
                <Box textAlign={"left"}>
                  <Heading fontSize={"30px"}>
                    Works with any longform text, audio & video!
                  </Heading>
                  <UnorderedList>
                    <ListItem fontSize={"16px"}>
                      From text, we'll generate dozens of social posts.
                    </ListItem>
                    <ListItem fontSize={"16px"}>
                      From audio, we'll generate a transcript and dozens of
                      social posts with matching audiograms.
                    </ListItem>
                    <ListItem fontSize={"16px"}>
                      From video, we'll generate a transcript, and dozens of
                      posts with matching video clips.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Center>
            </Flex>
          </Box>
        </Container>
      </Show>

      <Show breakpoint="(max-width: 665px)">
        <Container
          maxW={"100vw"}
          h={"auto"}
          border={"5px solid pink"}
          px={10}
          bg="#F0FFF4"
        >
          <Box>
            <Flex
              color="black"
              h={"auto"}
              w="80%"
              m="auto"
              flexDirection={{
                base: "column-reverse",
                md: "column-reverse",
                lg: "column-reverse",
                xl: "row",
              }}
            >
              <Center w="100%" h="auto" p={10} border="1px solid black">
                <Box>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uMaTQjBr1Ec"
                    title="Lately: Professionally Plan Sneak Peek"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>
              </Center>
              <Center w="100%" p={10} border="1px solid black">
                <Box textAlign={"left"}>
                  <Heading fontSize={"23px"}>
                    Works with any longform text, audio & video!
                  </Heading>
                  <UnorderedList>
                    <ListItem fontSize={"16px"}>
                      From text, we'll generate dozens of social posts.
                    </ListItem>
                    <ListItem fontSize={"16px"}>
                      From audio, we'll generate a transcript and dozens of
                      social posts with matching audiograms.
                    </ListItem>
                    <ListItem fontSize={"16px"}>
                      From video, we'll generate a transcript, and dozens of
                      posts with matching video clips.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Center>
            </Flex>
          </Box>
        </Container>
      </Show>

      {/* Banner-2 first letter-"RUN"*/}
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
            textAlign={"left"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center w={{ base: "100%", md: "50%" }} h="auto" p={10}>
              <Box>
                <Heading
                  mb="5"
                  fontSize={{ base: "23px", sm: "30px", md: "34px" }}
                >
                  Run any content thru Lately. Our AI will slice it up into
                  dozens of high-performing social posts.
                </Heading>
                <UnorderedList>
                  <ListItem>Works with text, audio and video...</ListItem>
                  <ListItem>Works with earned, owned or found media…</ListItem>
                  <ListItem>
                    Works with podcasts, webinars, blogs and more!
                  </ListItem>
                </UnorderedList>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/62fa8517129f4a342f4d5b03_types2-p-500.png"
                  w={300}
                ></Image>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Container>

      {/* some numbers content section */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"1px solid green"}
        p={10}
        bg="#daece6"
      >
        <Heading color="#174c43" mb={10}>
          AI-generated results that don’t muck around.
        </Heading>

        {/* container */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
          w="80%"
          m="auto"
        >
          {/* item 1 */}
          <GridItem w="100%" h="auto">
            {/* each item has flex inside- image & text */}
            <Flex alignItems="center" gap="4">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6002236421b928e945df4385_stat4.png"
                h={150}
              ></Image>
              <Box textAlign={"left"}>
                <Heading fontSize={{ base: "16px", sm: "20px", md: "26px" }}>
                  Generate Social Content the New Way
                </Heading>
                <Text>
                  Stop guessing what to write. Lately’s AI creates organic
                  social media content that it already knows your audience will
                  love.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          {/* item-2 */}
          <GridItem w="100%" h="auto">
            {/* each item has flex inside- image & text */}
            <Flex alignItems="center" gap="4">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60022364b4348190da308534_stat3.png"
                h={150}
              ></Image>
              <Box textAlign={"left"}>
                <Heading fontSize={{ base: "16px", sm: "20px", md: "26px" }}>
                  Unlock the Power of Longform Content
                </Heading>
                <Text>
                  Automatically atomize any longform video, audio, or text into
                  dozens of pre-tested social media posts designed to magnify
                  engagement.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          {/* item-3 */}
          <GridItem w="100%" h="auto">
            {/* each item has flex inside- image & text */}
            <Flex alignItems="center" gap="4">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223648dc79dc41d78513f_stat2.png"
                h={150}
              ></Image>
              <Box textAlign={"left"}>
                <Heading fontSize={{ base: "16px", sm: "20px", md: "26px" }}>
                  Social Selling on Steroids
                </Heading>
                <Text>
                  Generate consistent, engaging content that converts
                  high-quality leads for employees who don’t know a dang thing
                  about copywriting.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          {/* item-4 */}
          <GridItem w="100%" h="auto">
            {/* each item has flex inside- image & text */}
            <Flex alignItems="center" gap="4">
              <Image
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223648dc79dc41d78513f_stat2.png"
                h={150}
              ></Image>
              <Box textAlign={"left"}>
                <Heading fontSize={{ base: "16px", sm: "20px", md: "26px" }}>
                  Game-Changing AI Insights
                </Heading>
                <Text>
                  Learn the key words, phrases and values that make up the
                  messaging your brand’s audience actually wants to watch, hear
                  or read.
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      {/* banner-3 first letter - "AI" */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"3px solid blue"}
        p={5}
        // bg="green.100"
      >
        <Box
          w="60%"
          bg="#e8f8f2"
          m="auto"
          p="2"
          color="#174c43"
          lineHeight="40px"
        >
          <Heading>AI generator available in:</Heading>
          <Text>
            🇺🇸 English, 🇪🇸 Spanish, 🇮🇹 Italian, 🇵🇹 Portuguese, 🇯🇵 Japanese, 🇩🇪
            German, and more – just ask!
          </Text>
        </Box>
      </Container>

      {/* banner-4 first letter - "MAGNIFY" */}
      <Container
        maxW={"100vw"}
        h={"auto"}
        border={"2px solid blue"}
        px={10}
        bg="#e6f6ef"
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
                <Heading mb="5" color="#174c43">
                  Magnify your sales and marketing copy with AI that writes for
                  people, not targets.
                </Heading>
                <Text mb="5" color="#5f5f5f">
                  The right words turn customers into evangelists. So aim higher
                  with artificial intelligence that generates high-performing,
                  transformative social media content.
                </Text>

                <Button
                  colorScheme="white"
                  variant="outline"
                  border={"2px solid lightgreen"}
                  bg="#00c66b"
                  fontWeight="700"
                  _hover={{ bg: "white", color: "#00c66b" }}
                >
                  GIVE IT A WHIRL
                </Button>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61c1fcb478083ac00ef63308_heart-p-800.png"
                  w={300}
                ></Image>
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
                  “Instead of guessing what messages might stick in a vacuum,
                  Lately’s AI counts up all the digital engagement breadcrumbs
                  left behind and predicts what new messages are most likely to
                  get noticed. Brilliant.”
                </Text>

                {/* his company logo */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d28b9e99b6ab737d081_esass-p-500.png"
                  w={70}
                  mb={2}
                ></Image>

                {/* his name */}
                <Text mb="1" fontWeight="bold">
                  Eric Schwartzman :
                </Text>
                {/* designation descreption */}
                <Text>
                  Best-selling author and marketing consultant to Boeing, City
                  National Bank, Hard Rock, Johnson & Johnson, Lucasfilm,
                  Olympics, US Dept. of State and dozens of small and medium
                  businesses.
                </Text>
              </Box>
            </Center>
            <Center w={{ base: "100%", md: "50%" }} p={10}>
              <Box>
                {/* his image */}
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d9fcf3e4c4a4f82bb64_erics-p-500.png"
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
