import {
  Header,
  Column,
  Wrapper,
  CardContainer,
  OuterCard,
  InnerCard,
  CardHeader,
  Text,
  Comapny,
  ClientName,
  Avatar,
} from "./index.styled";
import StarRatings from "react-star-ratings";
import TestimonialIcon from "../../../assets/testimonials-icon.png";
import Company1 from "../../../assets/company-1.png";
import Company2 from "../../../assets/company-2.png";
import Testimonial1 from "../../../assets/testimonial-1.png";
import Testimonial2 from "../../../assets/testimonial-2.png";
import { Separator } from "../AboutUs/index.styled";
import SectionHeader from "../../Section/SectionHeader";

const Testimonials = () => {
  return (
    <Wrapper>
      <SectionHeader 
      style={{ justifyContent: "flex-start"}}
      icon={TestimonialIcon}
      title={"04. Testimonials"}
      oneliner={"We work with customers across all industries"}
      onelinerwidth={"100%"}
      leftAlign={true}/>

      <CardContainer>
        <OuterCard>
          <InnerCard>
            <CardHeader>
              <Comapny>
                <img src={Company1} alt="" height={45} width={45} />
                <span>Amanto</span>
              </Comapny>
              <div style={{ marginTop: 4 }}>
                <StarRatings
                  rating={5}
                  starRatedColor="rgba(255, 181, 69, 1)"
                  changeRating={() => {}}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing={"0"}
                />
              </div>
            </CardHeader>
            <Separator
              style={{
                margin: "10px 0px",
              }}
            />

            <Text>
            Lumenta's SEO work was outstanding improved my site rankings and traffic significantly. Professional, knowledgeable, and highly recommended for online success.{" "}
            </Text>
          </InnerCard>
          <Header style={{ width: "100%", marginLeft: 20 }}>
            <Avatar src={Testimonial1} alt="" />
            <Column>
              <ClientName>Mr. Mubashir</ClientName>
              <Text>CEO Aamanto Technology</Text>
            </Column>
          </Header>
        </OuterCard>
        <OuterCard>
          <InnerCard>
            <CardHeader>
              <Comapny>
                <img src={Company2} alt="" height={45} width={45} />
                <span>Align</span>
              </Comapny>
              <div style={{ marginTop: 4 }}>
                <StarRatings
                  rating={5}
                  starRatedColor="rgba(255, 181, 69, 1)"
                  changeRating={() => {}}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing={"0"}
                />
              </div>
            </CardHeader>
            <Separator
              style={{
                margin: "10px 0px",
              }}
            />

            <Text>
            Lumenta Digital transformed Align social media presence. Their expertise and strategies drove engagement and growth. Highly recommend their services.{" "}
            </Text>
          </InnerCard>
          <Header style={{ width: "100%", marginLeft: 20 }}>
            <Avatar src={Testimonial2} alt="" />
            <Column>
              <ClientName>Klarisse</ClientName>
              <Text>Align Project Coordinator</Text>
            </Column>
          </Header>
        </OuterCard>
      </CardContainer>
    </Wrapper>
  );
};

export default Testimonials;
