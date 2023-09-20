import { Header, Text, Flex, Column } from "./index.styled";

const SectionHeader = ({ icon, title, oneliner, color, margin }) => {
  return (
    <Header>
      <img src={icon} alt="" />
      <Column>
        <Flex margin={margin}>
          <Text style={{ color: "#fec90c" }}>{"//"}&nbsp;</Text>
          <Text color={color}>{title}</Text>
        </Flex>
        <span>{oneliner}</span>
      </Column>
    </Header>
  );
};

export default SectionHeader;
