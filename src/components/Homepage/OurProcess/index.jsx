import { useLayoutEffect, useState } from "react";
import {
  Background,
  Flex,
  ProcessDescription,
  ProcessSection,
  Stage,
  Step,
  StepDescription,
  Divider
} from "./index.styled";
import SectionName from "../../SectionName";
import ProcessIcon from "../../../assets/process-icon.png";
import Process1 from "../../../assets/process-1.png";
import Process2 from "../../../assets/process-2.png";
import Process3 from "../../../assets/process-3.png";

const OurProcess = () => {
  const [mobileView, setMobielView] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 60) {
        setMobielView(true);
      } else {
        setMobielView(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Background>
      <img src={ProcessIcon} alt="" height={80} width={80} style={{marginBottom: 20 }} />
      <SectionName section={"03 . Our Process"} margin={"auto"} />

      <ProcessDescription>
        A simple, yet powerful and efficient process
      </ProcessDescription>
      <Flex>
        <ProcessSection>
          <img src={Process1} alt="" />
          <Step>Work Execution</Step>
          <StepDescription>
            Efficiency in Action Executing Excellence Every Step of the Way.
          </StepDescription>
          <img src={Process3} alt="" />
        </ProcessSection>

        <ProcessSection>
          <Stage style={{ marginTop: 26 }}>1</Stage>
          <Divider />
          <Stage>2</Stage>
          <Divider />
          <Stage>3</Stage>
          <br />
          <br />
        </ProcessSection>

        <ProcessSection>
          <Step>Marketing Plan</Step>
          <StepDescription>
            Inspiring Growth Crafting Your Path to Marketing Success.
          </StepDescription>

          <img src={Process2} alt="" />

          <Step>Growth & Scale</Step>
          <StepDescription>
            Unlocking Growth. From Growth to Greatness, scaling the Summit of
            Success.
          </StepDescription>
        </ProcessSection>
      </Flex>
    </Background>
  );
};

export default OurProcess;
