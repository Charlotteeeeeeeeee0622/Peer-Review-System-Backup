import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

type Submission = {
  id: number;
  title: string;
  author: string;
  score?: number;
  comment?: string;
};

const GradeModal = ({
  submission,
  isOpen,
  onClose,
  onSubmit,
}: {
  submission: Submission | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (submission: Submission | null) => void;
}) => {
  const [score, setScore] = useState(submission?.score || '');
  const [comment, setComment] = useState(submission?.comment || '');

  const handleSubmit = () => {
    if (submission) {
      onSubmit({
        ...submission,
        score: Number(score),
        comment,
      });
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, maxWidth: '500px', margin: 'auto', mt: '10%' }}>
        <h2>{submission?.author}'s Submission</h2>
        {/* <p>
          <a href={submission?.downloadLink} target="_blank" rel="noreferrer">
            {submission?.downloadLink}
          </a>
        </p> */}
        <TextField label="Score" type="number" value={score} onChange={(e) => setScore(e.target.value)} fullWidth />
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GradeModal;