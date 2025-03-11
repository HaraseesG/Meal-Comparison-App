import { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Example data structure for accordion items
const defaultAccordionItems = [
  {
    id: 1,
    heading: 'Section 1',
    content: 'This is the content for section 1. You can customize this content.',
  },
  {
    id: 2,
    heading: 'Section 2',
    content: 'This is the content for section 2. You can customize this content.',
  },
  {
    id: 3,
    heading: 'Section 3',
    content: 'This is the content for section 3. You can customize this content.',
  },
];

const AccordionPage = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 800,
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          Accordion Section
        </Typography>
        
        {defaultAccordionItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default AccordionPage; 