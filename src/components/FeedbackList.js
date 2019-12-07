import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ScoreIcon from "./ScoreIcon";

import "./FeedbackList.css";

export default function FeedbackList({ feedbackList = [] }) {
  console.log(feedbackList);
  return (
    <List>
      {feedbackList.map(feedback => (
        <ListItem key={feedback.id}>
          <ListItemAvatar>
            <ScoreIcon score={feedback.score} />
          </ListItemAvatar>
          <ListItemText
            primary={feedback.name}
            secondary={
              <>
                {" "}
                {feedback.datetime} / {feedback.text}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
