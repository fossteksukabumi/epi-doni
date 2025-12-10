import { useState } from "react";
import { Wrapper, Title, Grid, ImgBox, Modal, ModalImg, CloseBtn } from "./Gallery.style";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

const images = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [img1, img2, img3, img4];

  return (
    <Wrapper id="gallery">
      <Title>Galeri</Title>

      <Grid>
        {images.map((src, i) => (
          <ImgBox key={i} onClick={() => setSelectedImg(src)}>
            <img src={src} alt={`images-${i}`} />
          </ImgBox>
        ))}
      </Grid>

      {selectedImg && (
        <Modal onClick={() => setSelectedImg(null)}>
          <ModalImg src={selectedImg} />
          <CloseBtn onClick={() => setSelectedImg(null)}>×</CloseBtn>
        </Modal>
      )}
    </Wrapper>
  );
};

export default images;
