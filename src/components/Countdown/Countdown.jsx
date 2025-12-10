import { useEffect, useState } from "react";
import { Wrapper, Title, TimerBox, Number, Label } from "./Countdown.style";

const Countdown = () => {
  const targetDate = new Date("2025-12-21T09:00:00+07:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Title>Menuju Hari Bahagia</Title>

      <TimerBox>
        <div>
          <Number>{timeLeft.days}</Number>
          <Label>Hari</Label>
        </div>
        <div>
          <Number>{timeLeft.hours}</Number>
          <Label>Jam</Label>
        </div>
        <div>
          <Number>{timeLeft.minutes}</Number>
          <Label>Menit</Label>
        </div>
        <div>
          <Number>{timeLeft.seconds}</Number>
          <Label>Detik</Label>
        </div>
      </TimerBox>
    </Wrapper>
  );
};

export default Countdown;
