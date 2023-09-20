import { Flex, Text } from "./index.styled";

const SectionName = ({ section, margin,  mobileViewAlignment, color }) => {
  return (
    <Flex mobileViewAlignment={mobileViewAlignment} margin={margin}>
      <Text style={{color: "#fec90c" }}>
        {"//"}&nbsp;
      </Text>
      <Text color={color}>{section}</Text>
    </Flex>
  )
}

export default SectionName;