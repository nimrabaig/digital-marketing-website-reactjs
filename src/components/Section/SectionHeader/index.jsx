import { Header, Text, Flex, Column, Oneliner } from "./index.styled";

const SectionHeader = ({
  icon,
  title,
  oneliner,
  onelinerwidth,
  color,
  leftAlign,
  style,
}) => {
  return (
    <Header leftAlign={leftAlign} style={{ ...style }}>
      {icon && <img src={icon} alt="" />}
      <Column>
        <Flex leftAlign={leftAlign}>
          <Text style={{ color: "#fec90c" }}>{"//"}&nbsp;</Text>
          <Text color={color}>{title}</Text>
        </Flex>
        {oneliner && (
          <Oneliner
            onelinerwidth={onelinerwidth}
            leftAlign={leftAlign}
            color={color}
          >
            {oneliner}
          </Oneliner>
        )}
      </Column>
    </Header>
  );
};

export default SectionHeader;
