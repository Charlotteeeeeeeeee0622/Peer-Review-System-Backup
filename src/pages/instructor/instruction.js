// ChecklistInputModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const ChecklistInputModal = ({ isOpen, onClose, onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleAddItem = () => {
    onSubmit(inputText);
    setInputText('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Checklist Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Checklist Text"
          type="text"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddItem} disabled={!inputText}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChecklistInputModal;
