import { Wrapper, Title, Card, Label, Value } from "./Information.style";

const Information = () => {
  return (
    <Wrapper>
      <Title>Akad dan Resepsi</Title>

      <Card>
        <Label>Akad Nikah</Label>
        <Value>Minggu, 21 Desember 2025</Value>
        <Value>Pukul 09:00 - 10:00</Value>
      </Card>

      <Card>
        <Label>Resepsi</Label>
        <Value>Minggu, 21 Desember 2025</Value>
        <Value>Pukul 10:00 - Selesai</Value>
      </Card>
    </Wrapper>
  );
};

export default Information;
