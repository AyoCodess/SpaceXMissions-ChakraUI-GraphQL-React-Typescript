import { ApolloProvider } from "@apollo/client";
import "./styles.css";
import { apollo } from "./infrastructure/apollo";
import { GetMissions, MainHeading, Footer, Wrapper } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

console.clear();

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <ChakraProvider>
        <Wrapper>
          <MainHeading />
          <GetMissions />
          <Footer />
        </Wrapper>
      </ChakraProvider>
    </ApolloProvider>
  );
}
