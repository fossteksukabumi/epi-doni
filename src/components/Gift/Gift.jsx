import React, { useState } from "react";
import {
  GiftSection,
  GiftTitle,
  GiftText,
  GiftList,
  GiftItem,
  GiftBank,
  GiftNumber,
  GiftName,
  CopyButton,
  CopiedText,
} from "./Gift.style";

const Gift = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);

    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <GiftSection id="gift">
      <GiftTitle>Amplop Digital</GiftTitle>
      <GiftText>
        Jika berkenan memberikan hadiah, berikut nomor rekening yang dapat
        digunakan. Terima kasih atas doa dan restunya.
      </GiftText>

      <GiftList>
        {/* Dana */}
        <GiftItem>
          <GiftBank>Dana</GiftBank>
          <GiftNumber>0896-5753-6629</GiftNumber>
          <GiftName>a.n Doni</GiftName>

          <CopyButton onClick={() => copyToClipboard("089657536629")}>
            Salin Nomor
          </CopyButton>
          <CopiedText show={copied === "089657536629"}>Disalin!</CopiedText>
        </GiftItem>

        {/* Mandiri Doni */}
        <GiftItem>
          <GiftBank>Bank Mandiri</GiftBank>
          <GiftNumber>1820009909458</GiftNumber>
          <GiftName>a.n Doni Kusuma</GiftName>

          <CopyButton onClick={() => copyToClipboard("1820009909458")}>
            Salin Nomor
          </CopyButton>
          <CopiedText show={copied === "1820009909458"}>Disalin!</CopiedText>
        </GiftItem>

        {/* Mandiri Epi */}
        <GiftItem>
          <GiftBank>Bank Mandiri</GiftBank>
          <GiftNumber>1820004040515</GiftNumber>
          <GiftName>a.n Epi Lelawati</GiftName>

          <CopyButton onClick={() => copyToClipboard("1820004040515")}>
            Salin Nomor
          </CopyButton>
          <CopiedText show={copied === "1820004040515"}>Disalin!</CopiedText>
        </GiftItem>
      </GiftList>
    </GiftSection>
  );
};

export default Gift;
