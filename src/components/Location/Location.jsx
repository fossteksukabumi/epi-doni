import { Wrapper, Title, Address, MapContainer } from "./Location.style";

const Location = () => {
  return (
    <Wrapper>
      <Title>Lokasi Acara</Title>

      <Address>
        Kp. Babakan Tugu, RT 11 / RW 06  
        Desa Cibodas, Kecamatan Palabuhanratu  
        Kabupaten Sukabumi
      </Address>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5110.388239002622!2d106.5430128!3d-6.959434700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6829152f7ec647%3A0xa4e76f06a5e03c32!2sMebel%20pak%20henhen!5e1!3m2!1sen!2sid!4v1765340952320!5m2!1sen!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </Wrapper>
  );
};

export default Location;
