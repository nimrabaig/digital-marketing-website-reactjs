import Button from "../Button";
import { Flex, EmailInput, Column, Text, Wrapper } from "./index.styled";

const Subscribe = () => {
  return (
    <Wrapper>
      <Column>
        <Flex>
          <Text color={"#fff"}>Subscribe to our{" "}
          <span style={{ color: "#FF7503"}}>newsletter</span></Text>
        </Flex>

        <Flex style={{ marginTop: 20 }}>
          <EmailInput placeholder="Enter Your Email..."/>{" "}
          <Button
            style={{
              background: "#fff",
              border: "none",
            }}
          >
            Subscribe
          </Button>
        </Flex>
      </Column>
    </Wrapper>
  );
};

export default Subscribe;
