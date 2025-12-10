import { Wrapper, Photo, Names, WeddingDate, Divider } from "./Cover.style";
import photoCouple from "../../assets/images/1.jpg";

const Cover = () => {
  return (
    <Wrapper id="home">
      <Photo>
        <img src={photoCouple} alt="Couple" />
      </Photo>

      <Names>Epi & Doni</Names>
      <WeddingDate>21 Desember 2025</WeddingDate>

      <Divider />
    </Wrapper>
  );
};

export default Cover;
