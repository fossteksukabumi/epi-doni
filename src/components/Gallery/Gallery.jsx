import { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
  Grid,
  ImgBox,
  Modal,
  ModalImg,
  CloseBtn,
} from "./Gallery.style";
import ModalPortal from "./ModalPortal";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [img1, img2, img3, img4];

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "";
  }, [selectedImg]);

  const handleClose = () => setSelectedImg(null);

  return (
    <Wrapper id="gallery">
      <Title>Galeri</Title>
      <Grid>
        {images.map((src, i) => (
          <ImgBox key={i} onClick={() => setSelectedImg(src)}>
            <img src={src} alt={`gallery-${i + 1}`} />
          </ImgBox>
        ))}
      </Grid>

      {selectedImg && (
        <ModalPortal>
          <Modal onClick={handleClose}>
            <ModalImg
              src={selectedImg}
              alt="Fullscreen"
              onClick={(e) => e.stopPropagation()}
            />
            <CloseBtn onClick={handleClose}>×</CloseBtn>
          </Modal>
        </ModalPortal>
      )}
    </Wrapper>
  );
};

export default Gallery;
