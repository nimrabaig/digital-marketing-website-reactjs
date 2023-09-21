import { Header, Text, Flex, Column, Oneliner } from "./index.styled";

const SectionHeader = ({ icon, title, oneliner, color, leftAlign }) => {
  return (
    <Header leftAlign={leftAlign}>
      <img src={icon} alt="" />
      <Column>
        <Flex leftAlign={leftAlign}>
          <Text style={{ color: "#fec90c" }}>{"//"}&nbsp;</Text>
          <Text color={color}>{title}</Text>
        </Flex>
        <Oneliner leftAlign={leftAlign}>{oneliner}</Oneliner>
      </Column>
    </Header>
  );
};

export default SectionHeader;
