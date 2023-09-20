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
  Oneliner,
} from "./index.styled";
import PricingIcon from "../../../assets/pricing-icon.png";
import SectionName from "../../SectionName";
import { Separator } from "../AboutUs/index.styled";
import Package1 from "../../../assets/package-1.png";
import Package2 from "../../../assets/package-2.png";
import Package3 from "../../../assets/package-3.png";
import Check from "../../../assets/check.png";
import UnCheck from "../../../assets/uncheck.png";

const Pricing = () => {

  const CheckList = ({ primary, check, service}) => {
    return <Row>
      <img src={check ? Check : UnCheck} alt="" />
      <Text primary={primary ?? false}>{service}</Text>
    </Row>

  }
  return (
    <Wrapper>
      <img
        src={PricingIcon}
        alt=""
        height={80}
        width={80}
        style={{ marginBottom: 20 }}
      />
      <SectionName section={"06 . Price & Plan"} margin={"auto"} />
      <Oneliner>The #1 digital marketing services company</Oneliner>

      <Container>
        <Package>
          <Row>
            <img src={Package1} alt="" />
            <Column>
              <PackageType>Starter</PackageType>
              <Row>
                <Price>$29</Price>
                <Text style={{ marginTop: 13 }}>/Per Month</Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList check service={"Email Marketing"}/>
          <CheckList check service={"Content Marketing"}/>
          <CheckList check service={"Voice OptimizeSEO "}/>
          <CheckList service={"Consulting Video"}/>
          <CheckList service={"Marketing Advertising"}/>

          <Button>Purchase Plan</Button>
        </Package>

        <Package primary={true}>
          <Row>
            <img src={Package2} alt="" />
            <Column>
              <PackageType primary={true}>Starter</PackageType>
              <Row>
                <Price primary={true}>$49</Price>
                <Text primary={true} style={{ marginTop: 13 }}>
                  /Per Month
                </Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList primary check service={"Email Marketing"}/>
          <CheckList primary check service={"Content Marketing"}/>
          <CheckList primary check service={"Voice OptimizeSEO "}/>
          <CheckList primary check service={"Consulting Video"}/>
          <CheckList primary service={"Marketing Advertising"}/>

          <Button primary={true}>Purchase Plan</Button>
        </Package>

        <Package>
          <Row>
            <img src={Package3} alt="" />
            <Column>
              <PackageType>Starter</PackageType>
              <Row>
                <Price>$99</Price>
                <Text style={{ marginTop: 13 }}>/Per Month</Text>
              </Row>
            </Column>
          </Row>
          <Separator />

          <CheckList check service={"Email Marketing"}/>
          <CheckList check service={"Content Marketing"}/>
          <CheckList check service={"Voice OptimizeSEO "}/>
          <CheckList check service={"Consulting Video"}/>
          <CheckList check service={"Marketing Advertising"}/>

          <Button>Purchase Plan</Button>
        </Package>
      </Container>
    </Wrapper>
  );
};

export default Pricing;
