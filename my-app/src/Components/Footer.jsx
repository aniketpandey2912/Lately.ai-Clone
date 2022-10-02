import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  Link,
  Divider,
  Flex,
  Spacer,
  Center,
  Image,
} from "@chakra-ui/react";

const col_1 = [
  [
    { text: "About", page_link: "https://www.lately.ai/company/about" },
    { text: "Leadership", page_link: "https://www.lately.ai/company/team" },
    {
      text: "Professional Services",
      page_link: "https://www.lately.ai/company/lately-professional-services",
    },
    { text: "Press & News", page_link: "https://www.lately.ai/company/press" },
    { text: "Contact Us", page_link: "https://www.lately.ai/company/contact" },
  ],
  [
    {
      text: "HubSpot Marketing Hub",
      page_link:
        "https://www.lately.ai/integrations/social-content-integration-with-hubspot-marketing-hub",
    },
    {
      text: "Hootsuite",
      page_link:
        "https://www.lately.ai/integrations/social-content-integration-with-hootsuite",
    },
    {
      text: "UpContent",
      page_link:
        "https://www.lately.ai/integrations/social-content-integration-with-upcontent",
    },
  ],
];

const col_2 = [
  {
    text: "Pricing",
    page_link: "https://www.lately.ai/pricing/lately-pricing",
  },
  {
    text: "Product Overview",
    page_link:
      "https://www.lately.ai/product/lately-social-media-ai-content-platform",
  },
  {
    text: "AI Social Content Writer",
    page_link:
      "https://www.lately.ai/product/social-media-content-writing-ai-software-solution",
  },
  {
    text: "Social Media Marketing",
    page_link:
      "https://www.lately.ai/product/social-media-marketing-ai-software-solution",
  },
  {
    text: "Social Selling",
    page_link:
      "https://www.lately.ai/product/social-selling-ai-software-solution",
  },
  {
    text: "Social Media Analytics",
    page_link:
      "https://www.lately.ai/product/social-media-content-analytics-software",
  },
  { text: "Sample AI Autogenerator", page_link: "https://www.lately.ai/" },
  {
    text: "Autogenerator Chrome Extension",
    page_link:
      "https://chrome.google.com/webstore/detail/generate-to-lately/bcghcdjbnjhbpokejekampjgnhchcapl?hl=en",
  },
  {
    text: "Parent Accounts",
    page_link: "https://www.lately.ai/product/parent-child-accounts",
  },
];

const col_3 = [
  [
    {
      text: "Customer Stories",
      page_link: "https://www.lately.ai/resources/customer-stories",
    },
    { text: "Ebooks", page_link: "https://www.lately.ai/resources/ebooks" },
    { text: "Blog", page_link: "https://www.lately.ai/resources/blog" },
    {
      text: "Help Center",
      page_link: "https://www.lately.ai/resources/help-center",
    },
  ],
  [
    {
      text: "Lately Office Hours Sign-Up",
      page_link: "https://www.lately.ai/resources/lately-office-hours-signup",
    },
    {
      text: "Lately LIVE Replays",
      page_link: "https://www.lately.ai/resources/lately-live-videos",
    },
    {
      text: "How to Position ANYTHING",
      page_link: "https://www.lately.ai/resources/how-to-position-anything",
    },
    {
      text: "Lately 101",
      page_link: "https://www.youtube.com/c/LatelyAI/videos",
    },
  ],
];

const col_4 = [
  [
    {
      text: "Global Enterprises",
      page_link:
        "https://www.lately.ai/industries/enterprise-social-content-management-software-for-global-companies",
    },
    {
      text: "Franchises",
      page_link:
        "lately.ai/industries/distributed-social-media-solutions-for-franchises",
    },
    {
      text: "Small Businesses",
      page_link:
        "https://www.lately.ai/industries/social-media-marketing-tools-for-small-businesses",
    },
  ],
  [
    {
      text: "Technology",
      page_link:
        "https://www.lately.ai/industries/organic-social-media-program-solutions-for-tech-companies",
    },
    {
      text: "Professional Services",
      page_link:
        "https://www.lately.ai/industries/social-selling-platform-for-professional-services-firms",
    },
    {
      text: "Financial Services",
      page_link:
        "https://www.lately.ai/industries/compliant-social-media-content-for-financial-services-agents-advisers-brokers",
    },
    {
      text: "Media & Entertainment",
      page_link:
        "https://www.lately.ai/industries/social-media-marketing-products-for-media-and-entertainment-companies",
    },
    {
      text: "News & Public Agencies",
      page_link:
        "https://www.lately.ai/industries/social-media-marketing-applications-for-news-and-public-information-agencies",
    },
    {
      text: "Consumer Brands",
      page_link:
        "https://www.lately.ai/industries/social-media-marketing-platform-for-consumer-brands-and-b2c",
    },
    {
      text: "Education",
      page_link:
        "https://www.lately.ai/industries/social-media-tools-schools-and-universities",
    },
    {
      text: "Healthcare & Pharma",
      page_link:
        "https://www.lately.ai/industries/social-media-products-healthcare-pharma",
    },
    {
      text: "Social Media Agencies",
      page_link:
        "https://www.lately.ai/industries/social-media-agency-ai-software",
    },
  ],
];

const socialMediaIcons = [
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98ca57d5a01f8b06ac_lately-footer-facebook-icon.svg",
    alt: "facebook-icon",
    page_link: "https://www.facebook.com/LatelyAI/",
  },
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d033dccb4e0c5c8a_lately-footer-twitter-icon.svg",
    alt: "twitter-icon",
    page_link: "https://twitter.com/LatelyAI",
  },
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98a46fb9298adb10cf_lately-footer-linkedin-icon.svg",
    alt: "linkedin-icon",
    page_link: "https://www.linkedin.com/company/latelyai/",
  },
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea981e42d6cdd21dc804_lately-footer-instagram-icon.svg",
    alt: "instagram-icon",
    page_link: "https://www.instagram.com/LatelyAI/",
  },
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98d97acfb972a65b4a_lately-footer-youtube-icon.svg",
    alt: "youtube-icon",
    page_link: "https://www.youtube.com/LatelyAI",
  },
  {
    image:
      "https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7ea98852e65824bc54cf9_lately-footer-email-icon.svg",
    alt: "messege-icon",
    page_link:
      "https://lately.us6.list-manage.com/subscribe?u=394b90fbf3c246b1fbbc04d87&id=ad9e7691eb",
  },
];

export function Footer() {
  return (
    <Container
      h={"auto"}
      // border={"1px solid red"}
      bgColor="skyblue"
      maxW={"container.2xl"}
      bg={"#F0FFF4"}
    >
      <VStack>
        {/* footer section 1 */}
        <Box w={"80%"} h={"auto"} p={10}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={1}
          >
            {/* 1st col */}
            <GridItem w="100%" h="auto" textAlign={"left"} lineHeight={"25px"}>
              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                COMPANY
                {/* col1_index 0 */}
              </Heading>
              {col_1[0].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}

              {/* col1_index 1 */}
              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                PARTNERS & INTEGRATIONS
              </Heading>
              {col_1[1].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}
            </GridItem>

            {/* 2nd col */}
            <GridItem w="100%" h="auto" textAlign={"left"} lineHeight={"25px"}>
              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                PRODUCT
              </Heading>

              {/* col1_index 0 */}
              {col_2.map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}
            </GridItem>

            {/* 3rd col */}
            <GridItem w="100%" h="auto" textAlign={"left"} lineHeight={"25px"}>
              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                RESOURCES
              </Heading>

              {/* col3_index 0 */}
              {col_3[0].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}

              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                LATELY OFFICE HOURS
              </Heading>
              {/* col3_index 1 */}
              {col_3[1].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}
            </GridItem>

            {/* 4th col */}
            <GridItem w="100%" h="auto" textAlign={"left"} lineHeight={"25px"}>
              <Heading color={"#7d7d7d"} fontSize={"14px"}>
                INDUSTRIES
              </Heading>
              <Text fontStyle={"italic"} color={"#7d7d7d"} fontSize={"14px"}>
                Every Size
              </Text>
              {/* col4_index 0 */}
              {col_4[0].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}

              <Text fontStyle={"italic"} color={"#7d7d7d"} fontSize={"14px"}>
                Every Industry
              </Text>
              {/* col4_index 0 */}
              {col_4[1].map((el) => (
                <Text>
                  <Link href={el.page_link} color={"#7d7d7d"} fontSize={"14px"}>
                    {el.text}
                  </Link>
                </Text>
              ))}
            </GridItem>
          </Grid>
        </Box>

        {/* dividing box by gorizontal line */}
        <Divider orientation="horizontal" w={"80%"} />

        {/* footer section 2 */}
        <Box w={"80%"} h={"auto"}>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            {/* logo-left */}
            <Box p="4">
              <Center>
                <Link href="/">
                  <Image
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg"
                    w="100px"
                    h={"auto"}
                  ></Image>
                </Link>
              </Center>
            </Box>

            <Spacer />

            {/* socila media icons- right */}
            <Box p="4">
              <Center>
                {socialMediaIcons.map((el) => (
                  <Link
                    href={el.page_link}
                    _hover={{ bg: "gray.300" }}
                    borderRadius="50%"
                  >
                    <Image src={el.image} w="30px" h={"auto"} p={"2px"}></Image>
                  </Link>
                ))}
              </Center>
            </Box>
          </Flex>
        </Box>

        {/* footer section 3 */}
        <Box
          w={"full"}
          h={"auto"}
          // border={"1px solid black"}
          bg={"green.900"}
          fontSize="14px"
          py={4}
        >
          <Container maxW={"80%"} color="white">
            <Flex
              alignItems={"center"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box p="4">
                <Link href="https://www.lately.ai/terms">Terms</Link>~
                <Link href="https://www.lately.ai/privacy">Privacy</Link>
              </Box>

              <Spacer />
              <Box p="4">
                <Text>Copyright © 2022 Lately, Inc. Stone Ridge, NY, USA</Text>
              </Box>
            </Flex>
          </Container>
        </Box>
      </VStack>
    </Container>
  );
}
