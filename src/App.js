import React, { useEffect, useState } from "react";
import FeedbackList from "./components/FeedbackList";
import VideoStream from "./components/VideoStream";
import PageBox from "./layout/PageBox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import PageControls from "./components/PageControls";
import AddFeedbackForm from "./components/AddFeedbackForm";
import * as feedbackStorage from "./service/feedbackStorage";

import "./App.css";

function App() {
  /*const feedbackList = [
    {
      id: "01",
      name: "Jonas",
      datetime: "YYYY-MM-DD",
      score: 1,
      text: "komentaras kaip vertina Jonas"
    },
    {
      id: "02",
      name: "Aldona",
      datetime: "YYYY-MM-DD",
      score: -1,
      text: "komentaras kaip vertina Aldona"
    },
    {
      id: "03",
      name: "Alanas",
      datetime: "YYYY-MM-DD",
      score: -1,
      text: "komentaras kaip vertina Alanas"
    },
    {
      id: "04",
      name: "Matas",
      datetime: "YYYY-MM-DD",
      score: 1,
      text: "komentaras kaip vertina Matas"
    }
 ];*/
  const DEFAULT_EVENT_ID = "WUWz6xmSzbk";
  //const eventId = "WUWz6xmSzbk";

  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);

  const [eventId, setEventId] = useState(DEFAULT_EVENT_ID);

  useEffect(() => {
    feedbackStorage.initialize();
    const pathEventId = window.location.pathname.replace("/", "");
    if (pathEventId) {
      setEventId(pathEventId);
    }
  }, []);

  useEffect(() => {
    feedbackStorage.listenForListChanges(eventId, newList =>
      setFeedbackList(newList)
    );
  }, [eventId]);

  function addFeedback(feedbackInput) {
    const now = new Date();
    const newEntry = {
      id: Math.random(),
      name: feedbackInput.name,
      datetime: now.toUTCString(),
      score: feedbackInput.score,
      text: feedbackInput.text
    };
    setFeedbackList(prevFeedbackList => [newEntry, ...prevFeedbackList]);
    hideFeedbackForm();
  }

  function hideFeedbackForm() {
    setFeedbackFormVisible(false);
  }
  function showFeedbackForm() {
    setFeedbackFormVisible(true);
  }

  return (
    <>
      <CssBaseline />
      <div className="main-content">
        <div className="main-content__left">
          <PageBox>
            <FeedbackList feedbackList={feedbackList} />
          </PageBox>
        </div>
        <div className="main-content__right">
          <div className="sub-section">
            <PageBox>
              <VideoStream
                videoUrl={`https://www.youtube.com/embed/${eventId}?controls=0`}
              />
            </PageBox>
          </div>{" "}
          <div className="sub-section">
            <PageBox>
              <Dashboard feedbackList={feedbackList} />
            </PageBox>
          </div>
        </div>
      </div>
      <PageControls buttonAction={showFeedbackForm} />
      {feedbackFormVisible && (
        <AddFeedbackForm onCancel={hideFeedbackForm} onSubmit={addFeedback} />
      )}
    </>
  );
}
export default App;
