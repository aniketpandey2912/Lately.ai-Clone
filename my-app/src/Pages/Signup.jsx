import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

// temporary from here
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
// temporary till here

// import { useState } from "react";
// import { Navigate } from "react-router-dom";

// const initialState = {
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   confirmed_password: "",
// };

export function Signup() {
  // temporary from here
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const handleClick = () => {
    toggleAuth();
    alert("Signup Success");
  };

  if (isAuth) {
    return <Navigate to={"/"}></Navigate>;
  }
  // temporary till here

  // const [formData, setFormData] = useState(initialState);
  // const [users, setUsers] = useState([]);

  // const handleChange = (event) => {
  //   const [type, name, value] = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setUsers([...users, formData]);
  //   setFormData(initialState);
  //   // return <Navigate to="/login"></Navigate>;
  // };

  // const { first_name, last_name, email, password, confirmed_password } =
  //   formData;

  return (
    // main container
    <Container
      maxW={"100vw"}
      h={"auto"}
      // border={"2px solid blue"}
      px={10}
      py={10}
      bg="#f7f7f7"
    >
      {/* box with 80% width */}
      <Box height="auto" w="80%" m="auto" textAlign="left">
        {/* heading */}
        <Heading bg="null" mb="10" p="4">
          Start your free 7-day Lately trial today!
        </Heading>

        {/* flex containing form & contnent box */}
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          {/* Form Box */}
          <Box
            p="4"
            bg="null"
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
          >
            <FormControl>
              {/* first & last name flex */}
              <Flex gap="4%" w="full" mb="8">
                <Box w="48%">
                  <FormLabel fontSize="18px">First Name</FormLabel>
                  <Input
                    type="text"
                    // name="first_name"
                    // value={first_name}
                    // onChange={(event) => handleChange(event)}
                  />
                </Box>
                <Box w="48%">
                  <FormLabel fontSize="18px">Last Name</FormLabel>
                  <Input
                    type="text"
                    // name="last_name"
                    // value={last_name}
                    // onChange={(event) => handleChange(event)}
                  />
                </Box>
              </Flex>
              {/* Email box*/}
              <Box mb="8">
                <FormLabel fontSize="18px">Email address</FormLabel>
                <Input
                  type="email"
                  // name="email"
                  // value={email}
                  // onChange={(event) => handleChange(event)}
                />
              </Box>
              {/* password box */}
              <Box mb="8">
                <FormLabel>Password (must be atleast 8 characters)</FormLabel>
                <Input
                  type="password"
                  // name="password"
                  // value={password}
                  // onChange={(event) => handleChange(event)}
                />
              </Box>
              <Box mb="8">
                <FormLabel fontSize="18px">Confirm Password</FormLabel>
                <Input
                  type="password"
                  // name="confirmed_password"
                  // value={confirmed_password}
                  // onChange={(event) => handleChange(event)}
                />
              </Box>
              <Box mb="8">
                {/* don't delete commented button */}
                {/* <Button
                  colorScheme="green"
                  variant="solid"
                  fontSize="18px"
                  // type="submit"
                  // onClick={(event) => handleSubmit(event)}
                >
                  NEXT
                </Button> */}

                {/* Delete below button later */}
                {/* temporary from here */}
                <Button
                  colorScheme="green"
                  variant="solid"
                  fontSize="18px"
                  onClick={handleClick}
                >
                  NEXT
                </Button>
                {/* temporary till here */}
              </Box>
              <Text>
                Already have an account ? <Link href="/login">Login</Link>
              </Text>
            </FormControl>
          </Box>

          {/* Content Box */}
          <Box
            p="10"
            bg="null"
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            lineHeight="40px"
            border="1px solid lightgrey"
            borderRadius="30"
          >
            <Heading fontSize="28px">
              Psssst! Lately works with any longform text, audio & video!
            </Heading>
            <UnorderedList fontSize="16px" mb="20">
              <ListItem>
                From text, we'll generate dozens of social posts.
              </ListItem>
              <ListItem>
                From audio, we'll generate a transcript and dozens of social
                posts.
              </ListItem>
              <ListItem>
                From video, we'll generate a transcript, and dozens of posts
                with matching video clips.
              </ListItem>
            </UnorderedList>
            <Center>
              <Image
                src="https://app.lately.ai/img/loading.a17ca56e.png"
                h="150"
              ></Image>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
