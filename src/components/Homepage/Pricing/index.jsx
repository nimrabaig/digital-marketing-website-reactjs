import {
  Container,
  Wrapper,
  Package,
  Row,
  Column,
  PackageType,
  Price,
  Text,
  Button,
  Tag,
} from "./index.styled";
import PricingIcon from "../../../assets/pricing-icon.png";
import { Separator } from "../AboutUs/index.styled";
import Package1 from "../../../assets/package-1.png";
import Package2 from "../../../assets/package-2.png";
import Package3 from "../../../assets/package-3.png";
import Check from "../../../assets/check.png";
import UnCheck from "../../../assets/uncheck.png";
import SectionHeader from "../../Section/SectionHeader";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const CheckList = ({ primary, check, service }) => {
    return (
      <Row>
        <img src={check ? Check : UnCheck} alt="" />
        <Text primary={primary ?? false}>{service}</Text>
      </Row>
    );
  };
  return (
    <Wrapper>
      <SectionHeader
        icon={PricingIcon}
        title={"06 . Price & Plan"}
        oneliner={"Our Flexible Pricing Plans"}
        onelinerwidth={"100%"}
      />

      <Container>
        <Package>
          <br />
          <br />
          <Row>
            <img src={Package1} alt="" width={55} />
            <Column>
              <PackageType>Basic</PackageType>
              <Row>
                <Price>$500</Price>
                <Text style={{ marginTop: 13 }}>/Per Month</Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList check service={"Email Marketing"} />
          <CheckList check service={"Social Media Marketing"} />
          <CheckList check service={"Voice OptimizeSEO "} />
          <CheckList service={"Consulting Video"} />
          <CheckList service={"Marketing Advertising"} />

          <Button onClick={() => navigate("/contact-us")}>Purchase Plan</Button>
        </Package>

        <Package primary={true}>
          <Tag>POPULAR</Tag>
          <Row>
            <img src={Package2} alt="" width={55} />
            <Column>
              <PackageType primary={true}>Basic Plus</PackageType>
              <Row>
                <Price primary={true}>$800</Price>
                <Text primary={true} style={{ marginTop: 13 }}>
                  /Per Month
                </Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList primary check service={"Email Marketing"} />
          <CheckList primary check service={"Social Media Marketing"} />
          <CheckList primary check service={"Voice OptimizeSEO "} />
          <CheckList primary check service={"Consulting Video"} />
          <CheckList primary service={"Marketing Advertising"} />

          <Button primary={true} onClick={() => navigate("/contact-us")}>
            Purchase Plan
          </Button>
        </Package>

        <Package>
          <br />
          <br />
          <Row>
            <img src={Package3} alt="" width={55} />
            <Column>
              <PackageType>Premium</PackageType>
              <Row>
                <Price>$1000</Price>
                <Text style={{ marginTop: 13 }}>/Per Month</Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList check service={"Email Marketing"} />
          <CheckList check service={"Social Media Marketing"} />
          <CheckList check service={"Voice OptimizeSEO "} />
          <CheckList check service={"Consulting Video"} />
          <CheckList check service={"Marketing Advertising"} />

          <Button onClick={() => navigate("/contact-us")}>Purchase Plan</Button>
        </Package>
      </Container>
    </Wrapper>
  );
};

export default Pricing;
