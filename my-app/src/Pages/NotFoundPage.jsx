import { Box, Center, Heading } from "@chakra-ui/react";

export function NotFoundPage() {
  return (
    <>
      <Box height="auto" py="100px" bg="red">
        <Center>
          <Heading width="50%" m="auto">
            ERROR 404 : PAGE NOT FOUND
          </Heading>
        </Center>
      </Box>
    </>
  );
}
