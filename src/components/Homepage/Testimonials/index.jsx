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
import SectionName from "../../SectionName";
import TestimonialIcon from "../../../assets/testimonials-icon.png";
import { Separator } from "../AboutUs/index.styled";
import User1 from "../../../assets/testimonial-1.png";

const Testimonials = () => {
  return (
    <Wrapper>
      <Header>
        <img src={TestimonialIcon} alt="" />
        <Column>
          <SectionName section={" 04. Testimonials"} mobileViewAlignment={"left"} />
          <span>We work with customers across all industries</span>
        </Column>
      </Header>

      <CardContainer>
        <OuterCard>
          <InnerCard>
            <CardHeader>
              <Comapny>
                <img src={TestimonialIcon} alt="" height={45} width={45} />
                <span>Company</span>
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
              Lorem Ipsum has been the industry's standard from dummy text ever
              since the unknown printer to galley of type and make a type
              specimen book.{" "}
            </Text>
          </InnerCard>
          <Header style={{ width: "100%", marginLeft: 20 }}>
            <Avatar src={User1} alt="" />
            <Column>
              <ClientName>John Carter</ClientName>
              <Text>Marketing Lead at Google</Text>
            </Column>
          </Header>
        </OuterCard>
        <OuterCard>
          <InnerCard>
            <CardHeader>
              <Comapny>
                <img src={TestimonialIcon} alt="" height={45} width={45} />
                <span>Company</span>
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
              Lorem Ipsum has been the industry's standard from dummy text ever
              since the unknown printer to galley of type and make a type
              specimen book.{" "}
            </Text>
          </InnerCard>
          <Header style={{ width: "100%", marginLeft: 20 }}>
            <Avatar src={User1} alt="" />
            <Column>
              <ClientName>John Carter</ClientName>
              <Text>Marketing Lead at Google</Text>
            </Column>
          </Header>
        </OuterCard>
      </CardContainer>
    </Wrapper>
  );
};

export default Testimonials;
