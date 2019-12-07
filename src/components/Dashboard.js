import React from "react";
import Typography from "@material-ui/core/Typography";
import DashboardScore from "./DashboardScore";

import "./Dashboard.css";

export default function Dashboard({ feedbackList = [] }) {
  const likes = feedbackList.filter(feedback => feedback.score > 0).length;
  const dislikes = feedbackList.filter(feedback => feedback.score < 0).length;

  return (
    <div className="dashboard">
      <div className="dashboard__event-title">
        <Typography component="h2" variant="h4" align="center">
          MyLiveEvent
        </Typography>
      </div>
      <div className="dashboard__event-description">
        <Typography color="textSecondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div className="dashboard__event-score">
        <DashboardScore likes={likes} dislikes={dislikes} />
      </div>
    </div>
  );
}
