import React, { useState } from "react";
import { FormWrapper, Input, Textarea, Button } from "./CommentForm.style";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const photo = name.charAt(0).toUpperCase();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("photo", photo);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby_Fuwyae9RW4U8ImRsEERk5Nz0Q6XrJzY3e1XqsgGzYjzayVgpoTSGpV7XfQpW/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Reset form
      setName("");
      setMessage("");

      // 👉 REFRESH PAGE
      window.location.reload();

    } catch (error) {
      console.error("Error submit:", error);
    }

    setLoading(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit} id="wish">
      <Input
        placeholder="Nama kamu"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Textarea
        placeholder="Tulis ucapan..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Mengirim..." : "Kirim Ucapan"}
      </Button>
    </FormWrapper>
  );
};

export default CommentForm;
