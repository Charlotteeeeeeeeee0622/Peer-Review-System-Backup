import React, { useRef, useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Stack, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const DragAndDropFileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    
    if (event.dataTransfer.items) {
      const files = [];
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          const file = event.dataTransfer.items[i].getAsFile();
          files.push(file);
        }
      }
      processFiles([...selectedFiles, ...files]);
    } else {
      processFiles([...selectedFiles, ...Array.from(event.dataTransfer.files)]);
    }
  
    event.dataTransfer.clearData();
  };

  const handleFileInputChange = (event) => {
    processFiles([...selectedFiles, ...Array.from(event.target.files)]);
    fileInputRef.current.value = null;
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const processFiles = (files) => {
    setSelectedFiles(Array.from(files));
    // You can now process the uploaded files or send them to the server
  };

  const handleFileDelete = (indexToDelete) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== indexToDelete));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
        // Todo: upload files to backend
        const response = "ok"
        if (response) {
            console.log('Files uploaded successfully');
            setSnackbarSeverity('success');
            setSnackbarMessage('Files uploaded successfully');
            setSelectedFiles([])
        } else {
            setSnackbarSeverity('error');
            setSnackbarMessage('Error uploading files');
        }
    } catch (error) {
        setSnackbarSeverity('error');
        setSnackbarMessage('Error uploading files');
    }
    setSnackbarOpen(true);
  };

  return (
    <>
    <Stack direction={"row"}  spacing={2}>
        <Stack item sx={{width: '60%',}}>
            <Box
                sx={{
                
                p:2,
                border: isDragging ? '1px dashed #c7c7c7' : '1px solid #c7c7c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                // borderRadius: 4,
                backgroundColor: isDragging ? 'rgba(0, 0, 0, 0.1)' : 'white',
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Typography variant="h6" gutterBottom sx={{fontSize:18}}>
                Drag and drop files here
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                or
                </Typography>
                <Button variant="outlined" onClick={handleClick} sx={{mt:2}}>
                Click to select files
                </Button>
                <input
                ref={fileInputRef}
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
                />
            </Box>
            <Stack direction={"row"} sx={{mt:2}} spacing={3}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={selectedFiles.length === 0}
                >
                    Submit
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={()=>{setSelectedFiles([])}} 
                >
                    Cancel
                </Button>

            </Stack>

        </Stack>
        <Stack item sx={{width: '35%',}}>
            
            <List sx={{maxHeight:180, overflow:"auto"}}>
                {selectedFiles.map((file, index) => (
                    <>
                <ListItem key={index}>
                    <ListItemText primary={file.name} />
                    <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleFileDelete(index)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                    
                </ListItem>
                <Divider/>
                </>
                ))}
            </List>
        </Stack>
    </Stack>
    
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
    </>
  );
};

export default DragAndDropFileUpload;