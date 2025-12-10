import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

// CRITICAL: Fixed container to prevent layout shift
const MainContainer = styled.div`
  /* Fixed padding for bottom nav */
  padding-bottom: 90px;
  
  /* Prevent layout shift */
  min-height: 100vh;
  position: relative;
  isolation: isolate;
  
  /* For devices with safe area */
  @supports (padding: max(0px)) {
    padding-bottom: calc(90px + env(safe-area-inset-bottom));
  }
  
  @media (max-width: 480px) {
    padding-bottom: 85px;
    
    @supports (padding: max(0px)) {
      padding-bottom: calc(85px + env(safe-area-inset-bottom));
    }
  }
`;

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
      <MainContainer>
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
      </MainContainer>

      <BottomNav />
    </>
  );
};

export default Home;
