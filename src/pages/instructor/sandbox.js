import { React, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RouterData } from '../../mockData/routeData';
import Header from '../../components/Header';
import { Stack } from '@mui/system';
import {
    Box,
    Typography,
    Divider,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GradeModal from './score.tsx';
import ChecklistInputModal from './instruction';

const checkList = [
    {
        id: 1,
        text: "Abstract: The abstract provides a brief summary of the paper, including the purpose of the study, methodology, results, and conclusions. Pay attention to the main findings and the research question.",
        completed: true
    }, {
        id: 2,
        text: "Introduction: Understand the background and context of the research, the motivation behind the study, and the research question or hypothesis the authors aim to address. Literature review: Examine the existing research on the topic and how the authors ",
        completed: false
    }, {
        id: 3,
        text: "sldkfhsdkjfjdsf",
        completed: false
    }, {
        id: 4,
        text: "sldkfhsdkjfjdsf",
        completed: true
    }, {
        id: 5,
        text: "sldkfhsdkjfjdsf",
        completed: true
    }
]

const submission = [
    {
        id: 1,
        title: "The abstract provides a brief summary of the paper",
        author: 'John Doe',
        submitTime: new Date('2023-04-07T10:30:00'),
        comments: [
            { id: 1, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Hey there!' },
            { id: 2, author: 'John Do', time: new Date('2023-04-07T11:45:00'), text: 'How is your day going?' },
        ],
    },
    {
        id: 2,
        title: "The abstract provides a brief summary of the paper",
        author: 'Jane Smith',
        submitTime: new Date('2023-04-07T10:32:00'),
        comments: [
            { id: 3, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Hi, how are you?' },
            { id: 4, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Have you seen the latest news?' },
        ],
    }, {
        id: 3,
        title: "The abstract provides a brief summary of the paper",
        author: 'Jane Smith',
        submitTime: new Date('2023-04-07T10:32:00'),
        comments: [
            { id: 3, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Hi, how are you?' },
            { id: 4, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Have you seen the latest news?' },
        ],
    }, {
        id: 4,
        title: "The abstract provides a brief summary of the paper",
        author: 'Jane Smith',
        submitTime: new Date('2023-04-07T10:32:00'),
        comments: [
            { id: 3, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Hi, how are you?' },
            { id: 4, author: 'Johna Doe', time: new Date('2023-04-07T11:30:00'), text: 'Have you seen the latest news?' },
        ],
    },
    // Add more messages here...
];


// const drawerWidth = 240;
export default function Sandbox(props) {
    const { id } = useParams();
    const sandboxID = parseInt(id)
    const item = RouterData.find((element) => element.id === sandboxID);
    // const location = useLocation();
    // const [isSubmitted, setIsSubmitted] = useState(item.status === "Submitted");
// Add a new state for managing the input modal visibility
const [inputModalVisible, setInputModalVisible] = useState(false);
const [checkList, setCheckList] = useState([]);


// Add a new function to handle adding a new checklist item
const handleAddChecklistItem = (text) => {
  const newItem = {
    id: Math.max(...checkList.map((item) => item.id)) + 1,
    text: text,
    completed: false,
  };
  setCheckList([...checkList, newItem]);
};

    const getInitialChecked = () => {
        return checkList
            .filter((item) => item.completed)
            .map((item) => item.id);
    };

    const [checked, setChecked] = useState(getInitialChecked);

    const handleToggle = (value) => () => {
        const currentIndex = checked.findIndex((item) => item === value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    const CheckList = (
        <>
            <List>
                {checkList.map(each => (
                    <ListItem
                        key={each.id}
                        disablePadding
                        dense
                    >
                        <ListItemButton onClick={handleToggle(each.id)} sx={{ display: 'flex', alignItems: 'flex-start', }}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.findIndex((item) => item === each.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    style={{
                                        color: 'black',
                                    }}
                                />
                            </ListItemIcon>
                            <Box sx={{ alignSelf: 'center' }}>
                                <ListItemText id={each.id} primary={each.text} primaryTypographyProps={{ fontSize: 16 }} />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ChecklistInputModal
  isOpen={inputModalVisible}
  onClose={() => setInputModalVisible(false)}
  onSubmit={handleAddChecklistItem}
/>
            </List>
        </>
    )

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;

        return `${month}/${day}/${year} ${hours12}:${minutes} ${amPm}`;
    };

    const handleDownloadClick = (event) => {
        event.stopPropagation();
        // Add your download logic here
    };
    const [submissions, setSubmissions] = useState([
        submission
    ]);
    const [viewModalVisible, setViewModalVisible] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState(null);


    const handleGradeSubmission = (updatedSubmission) => {
        if (!updatedSubmission) return;

        const updatedSubmissions = submissions.map((submission) =>
            submission.id === updatedSubmission.id ? updatedSubmission : submission
        );
        setSubmissions(updatedSubmissions);
        setViewModalVisible(false);
    };
    const handleOpenModal = (submission) => {
        setSelectedSubmission(submission);
        setViewModalVisible(true);
    };

    const HistorySumission = (

        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <List sx={{ maxHeight: 700, overflow: 'auto' }}>
                    {submission.map((message) => (
                        <ListItem key={message.id}>
                            <ListItemText>
                                <Typography variant="caption">{formatDate(message.submitTime)}</Typography>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`message-content-${message.id}`}
                                        id={`message-header-${message.id}`}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                            <Typography sx={{ width: '88%', flexShrink: 0, mr: 1 }}>{message.title}</Typography>
                                            <Typography sx={{ color: 'text.secondary' }}>{message.author}</Typography>
                                        </Box>
                                        <IconButton edge="end" color="inherit" sx={{ mx: 1 }} onClick={handleDownloadClick}>
                                            <DownloadIcon />
                                        </IconButton>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {message.comments.map((comment) => (
                                            <Box key={comment.id} mb={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ml: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Typography sx={{ marginRight: 1 }}>
                                                        {comment.author}:
                                                    </Typography>
                                                    <Typography>{comment.text}</Typography>
                                                </Box>
                                                <Typography variant="caption">{formatDate(comment.time)}</Typography>
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            </ListItemText>
                            <Button edge="end" color="inherit" onClick={() => handleOpenModal(message)}>
                                <Typography>Grade</Typography>
                            </Button>

                        </ListItem>
                    ))}
                    
                    <GradeModal
                        submission={selectedSubmission}
                        isOpen={viewModalVisible}
                        onClose={() => setViewModalVisible(false)}
                        onSubmit={handleGradeSubmission}
                    />
                </List>

            </Box>
        </>
    )



    return (
        <>

            <Header text={item.name} />
            <Stack spacing={2} sx={{ p: 2, overflow: "auto" }}>
                <Stack spacing={2} sx={{ m: 2, }}>

                    <Stack item sx={{ borderRadius: 5, border: '2px solid #c7c7c7', p: 1, maxHeight: "80%" }}>
                        <Typography variant="h6" component="div" sx={{ fontFamily: "Arial", ml: 2 }}>
                            Instruction
                        </Typography>
                        <Divider sx={{ mt: 1, }} />

                        <Box sx={{ overflow: "auto" }}>
                            {CheckList}
                            <Button onClick={() => setInputModalVisible(true)}>Add Checklist Item</Button>
                        </Box>
                    </Stack>
                    <Stack item sx={{ borderRadius: 5, border: '2px solid #c7c7c7', p: 2, }}>
                        <Typography variant="h6" component="div" sx={{ fontFamily: "Arial", ml: 2 }}>
                            Submissions
                        </Typography>
                        <Divider sx={{ mt: 1, }} />
                        {HistorySumission}

                    </Stack>
                    <Stack>
                        <Box>
                            <Button href="/addStudents" variant="contained">
                                Add Students
                            </Button>

                            <Button style={{ marginLeft: '10px' }} href="/createAssignments" variant="contained">
                                Add Assignments
                            </Button>

                            <Button style={{ marginLeft: '10px' }} href="/displayAssignmentsPage" variant="contained">
                                View Assignments
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )

}