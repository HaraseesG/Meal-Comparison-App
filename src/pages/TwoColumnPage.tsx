import { Box, Paper, Typography } from '@mui/material';

const TwoColumnPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        height: 'calc(100vh - 100px)', // Accounting for AppBar and padding
      }}
    >
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Left Column
        </Typography>
        <Typography>
          This is the content for the left column. You can customize this content.
        </Typography>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Right Column
        </Typography>
        <Typography>
          This is the content for the right column. You can customize this content.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TwoColumnPage; 