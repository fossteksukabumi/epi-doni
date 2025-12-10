import { Wrapper, Overlay, Names, Subtitle, ButtonOpen } from "./Opening.style";
import imageBg from "../../assets/images/background2.jpg";

const Opening = ({ onOpen }) => {
  return (
    <Wrapper bg={imageBg}>
      <Overlay />
      <Names>Epi & Doni</Names>
      <Subtitle>We invite you to celebrate our wedding</Subtitle>
      <ButtonOpen onClick={onOpen}>Buka Undangan</ButtonOpen>
    </Wrapper>
  );
};

export default Opening;

