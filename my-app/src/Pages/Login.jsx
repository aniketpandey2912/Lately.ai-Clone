import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const handleClick = () => {
    toggleAuth();
    alert("Login Success");
  };

  if (isAuth) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <Container
      maxW={"100vw"}
      h={"auto"}
      // border={"2px solid blue"}
      bg="#f7f7f7"
      textAlign="left"
      mt={0}
      py={20}
    >
      <Box
        height="auto"
        w={{ base: "90%", sm: "90%", md: "80%", lg: "50%" }}
        m="auto"
        bg="yellow"
        p={{ base: "5", sm: "5", md: "10", lg: "10" }}
        // mt={100}
        bgColor="white"
      >
        {/* heading */}
        <Heading bg="null">Welcome back to Lately!</Heading>
        <Text mb="5">Hi there, superstar. We missed ya.</Text>

        {/* form */}
        <FormControl>
          <Box mb="5">
            <FormLabel fontSize="18px">Email address</FormLabel>
            <Input type="email" />
          </Box>
          {/* password box */}
          <Box mb="5">
            <FormLabel>Password (must be atleast 8 characters)</FormLabel>
            <Input type="password" />
          </Box>

          <Box mb="5">
            <Button
              colorScheme="green"
              variant="solid"
              fontSize="18px"
              onClick={handleClick}
            >
              NEXT
            </Button>

            {/* Forgot Password - linked to original website */}
            <Link
              color="teal"
              ml="8"
              fontSize="14px"
              href="https://app.lately.ai/#/app/password"
            >
              Forgot Password
            </Link>
          </Box>
        </FormControl>
        <Text>
          Don't have an account yet?
          <Link href="#" color="teal">
            Sign up now!
          </Link>
        </Text>
      </Box>
    </Container>
  );
}
