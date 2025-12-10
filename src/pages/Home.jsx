import React, { useState, useEffect } from "react";
import Cover from "../components/Cover/Cover";
import Info from "../components/Information/Information";
import Countdown from "../components/Countdown/Countdown";
import Location from "../components/Location/Location";
import Gallery from "../components/Gallery/Gallery";
import Story from "../components/Story/Story";
import Gift from "../components/Gift/Gift";
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/BottomNav/BottomNav";

const Home = () => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby_Fuwyae9RW4U8ImRsEERk5Nz0Q6XrJzY3e1XqsgGzYjzayVgpoTSGpV7XfQpW/exec"
      );
      const data = await res.json();
      setComments(data.reverse());
    } catch (err) {
      console.error("Error fetch:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  return (
    <>
    
      <div style={{ paddingBottom: "90px" }}>
        <Cover />
        <Info />
        <Countdown />
        <Story />
        <Location />
        <Gallery />
        <Gift />
        <CommentForm onSuccess={() => setRefresh((r) => !r)} />
        <CommentList comments={comments} />
        <Footer />
      </div>

      <BottomNav />
    </>
  );
};

export default Home;
