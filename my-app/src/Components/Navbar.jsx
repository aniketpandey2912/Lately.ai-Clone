import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Stack,
  Heading,
  Text,
  Container,
  Show,
  IconButton,
  Hide,
  Link,
  textDecoration,
} from "@chakra-ui/react";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
  return (
    // navbar container
    <Box
      // border={"1px solid red"}
      h={"auto"}
      bgColor={"rgb(61 66 75 / 7%)"}
      px={{ sm: "5px", md: "15px", lg: "20px" }}
    >
      {/* box containing logo/menu and signin box */}
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr )", md: "repeat(2, 1fr )" }} // responsive grid columns
        gridRowGap={{ sm: "0", md: "6" }}
      >
        {/* logo & menu box */}
        <GridItem w="100%" h="100">
          <Grid
            templateColumns="repeat(2, 2fr)"
            gap={0}
            // border={"2px solid rgb(61 66 75 / 7%)"}
          >
            {/* logo-box */}
            <Center>
              {/* click on image will take back to home page */}
              <Link href="/">
                <Image
                  src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd8f444e5106349b4570e0b_lately-nav-logo.svg"
                  boxSize="100px"
                ></Image>
              </Link>
            </Center>

            {/* Menu box - using show and hide as per screen size */}
            <Show breakpoint="(min-width: 1000px)">
              <Grid
                templateColumns="repeat(4, 1fr )"
                gap={2}
                // border="1px solid rgb(61 66 75 / 7%)"
                alignItems={"center"}
              >
                <Center>
                  <GridItem w="100%" h="auto">
                    <Menu p={10}>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        p={1}
                      >
                        Product
                      </MenuButton>
                      <MenuList>
                        <Grid templateColumns="repeat(4, 1fr )" gap={6}>
                          <GridItem w="100%" bgColor={"#F0FFF4"}>
                            <MenuItem fontWeight={"bold"}>
                              PARTNERS & INTEGRATIONS
                            </MenuItem>

                            <MenuItem>
                              Find social media platform <br />
                              integrations and content <br />
                              extensions to enhance your AI <br />
                              content creation experience.
                            </MenuItem>
                            <MenuItem fontWeight={"semibold"} color={"teal"}>
                              {/* it will take to my product page and rest of the link under product section are linked to original website */}
                              <Link href="/product">HubSpot Marketing Hub</Link>
                            </MenuItem>
                            <MenuItem fontWeight={"semibold"} color={"teal"}>
                              <Link href="https://www.lately.ai/integrations/social-content-integration-with-hootsuite">
                                Hotsuite
                              </Link>
                            </MenuItem>
                            <MenuItem fontWeight={"semibold"} color={"teal"}>
                              <Link href="https://www.lately.ai/integrations/social-content-integration-with-upcontent">
                                UpContent
                              </Link>
                            </MenuItem>
                          </GridItem>

                          <GridItem w="100%">
                            <MenuItem fontWeight={"bold"}>
                              AI CONTENT WRITER
                            </MenuItem>

                            <MenuItem>
                              Automatically writes and pre- <br />
                              tests content for your social <br />
                              media programs
                            </MenuItem>

                            <MenuItem fontWeight={"bold"}>
                              SOCIAL ANALYTICS
                            </MenuItem>

                            <MenuItem>
                              Informs your content strategy <br />
                              and make your content more <br />
                              engaging with content analytics
                            </MenuItem>
                          </GridItem>

                          <GridItem w="100%">
                            <MenuItem fontWeight={"bold"}>
                              SOCIAL MEDIA MARKETING
                            </MenuItem>

                            <MenuItem>
                              Everything you need to scale <br />
                              your social media marketing <br />
                              program
                            </MenuItem>

                            <MenuItem fontWeight={"bold"}>
                              SOCIAL SELLINGS
                            </MenuItem>

                            <MenuItem>
                              Extend your social content <br />
                              across executives, sales, <br />
                              employees, franchises, <br />
                              and more
                            </MenuItem>
                          </GridItem>

                          <GridItem w="100%" bgColor={"#F0FFF4"}>
                            <MenuItem fontWeight={"bold"}>
                              VIDEO AUTOGENERATOR
                            </MenuItem>

                            <MenuItem>
                              Turn your company videos into <br />
                              bite-sized social media video <br />
                              clips and social media posts
                            </MenuItem>

                            <MenuItem fontWeight={"bold"}>
                              PARENT ACCOUNTS
                            </MenuItem>

                            <MenuItem>
                              Easily manage parent-child <br />
                              social media accounts
                            </MenuItem>
                          </GridItem>
                        </Grid>
                      </MenuList>
                    </Menu>
                  </GridItem>
                </Center>

                <Center>
                  <GridItem w="100%" h="10">
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        p={1}
                      >
                        Resources
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/customer-stories">
                            Customer Stories
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/lately-office-hours-signup">
                            Lately Office Hours Sign-Up
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/lately-live-videos">
                            Lately LIVE Replays
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/how-to-position-anything">
                            How to Position ANYTHING
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/ebooks">
                            Ebooks
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/blog">
                            Blog
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/resources/help-center">
                            Help Center
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </GridItem>
                </Center>

                <Center>
                  <GridItem w="100%" h="10">
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        p={1}
                      >
                        Company
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link href="/company"> About</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/company/team">
                            Team Lately
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/company/press">
                            Press & News
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/company/lately-professional-services">
                            Lately Professional Services
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="https://www.lately.ai/company/contact">
                            Contact Us
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </GridItem>
                </Center>

                <Center>
                  <GridItem w="100%">
                    <Menu>
                      {/* <MenuButton as={Link} p={1}> */}
                      <Link
                        href="/pricing"
                        _hover={{ textDecoration: "none" }}
                        fontWeight="500"
                      >
                        {" "}
                        Pricing
                      </Link>
                      {/* </MenuButton> */}
                    </Menu>
                  </GridItem>
                </Center>
              </Grid>
            </Show>

            <Hide breakpoint="(min-width: 999px)">
              <Center>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    boxSize={{ base: "9", sm: "9", md: "10" }}
                    bgColor="green.400"
                    _active={{ bgColor: "green.400" }}
                    borderRadius="100%"
                  />
                  <MenuList>
                    <MenuItem>
                      <Link href="/product">Prdoducts</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="https://www.lately.ai/industries/industry-overview">
                        Industries
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      {/* dummy link */}
                      <Link href="https://www.lately.ai/integrations/social-content-integration-with-hubspot-marketing-hub">
                        Partners
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      {/* Pricing - dummy link */}
                      <Link href="/pricing">Resources</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/company">Company</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Center>
            </Hide>
          </Grid>
        </GridItem>

        {/* Login/Signup button  box*/}
        <GridItem
          w="100%"
          h={"auto"}
          border={"0px solid red"}
          bgColor={{
            base: "gray.200",
            sm: "gray.200",
            md: "rgb(61 66 75 / 0%)",
          }}
        >
          <Center>
            <Stack
              direction="row"
              spacing={2}
              align="center"
              mt={{ sm: 2, md: 8 }}
            >
              <Button
                colorScheme="teal"
                variant="outline"
                _hover={{ bgColor: "green.400", color: "white" }}
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
              >
                <Link href="/signup" _hover={{ textDecoration: "none" }}>
                  Get Started
                </Link>
              </Button>
              <Button
                color={"black"}
                _hover={{ color: "green.400" }}
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
              >
                <Link href="/login" _hover={{ textDecoration: "none" }}>
                  LOG IN
                </Link>
              </Button>
            </Stack>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
