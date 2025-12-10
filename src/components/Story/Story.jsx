import { Wrapper, Title, Timeline, Item, Circle, Content, DateText } from "./Story.style";

const Story = () => {
  return (
    <Wrapper id="story">
      <Title>Perjalanan Cinta Kami</Title>

      <Timeline>
        <Item>
          <Circle />
            <Content>
            <DateText>Pertemuan Pertama</DateText>
            <p>
                Di hari pertamanya bekerja, seorang pria tak menyangka bahwa hari itu akan 
                mengubah hidupnya. Saat memasuki ruangan, pandangannya terpaku pada seorang 
                gadis yang sibuk di mejanya. Senyum lembut dan tatapan hangat gadis itu 
                membuat waktu seolah berhenti.
            </p>
            </Content>
        </Item>

        <Item>
          <Circle />
          <Content>
            <DateText>Mulai Dekat</DateText>
             <p>
                Hari demi hari, keduanya semakin dekat melalui percakapan kecil dan perhatian sederhana 
                yang tumbuh tanpa disadari. Perlahan, rasa kagum berubah menjadi perasaan yang tulus.
            </p>
          </Content>
        </Item>

        <Item>
          <Circle />
          <Content>
            <DateText>Menuju Serius</DateText>
            <p>
            Mereka saling mengenal, saling menguatkan, hingga akhirnya mantap melangkah ke hubungan 
            yang lebih serius menuju pelaminan.
            </p>
          </Content>
        </Item>
      </Timeline>
    </Wrapper>
  );
};

export default Story;
