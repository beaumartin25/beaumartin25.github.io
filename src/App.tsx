import { Box, Button, Container, Paper, Typography } from "@mui/material";
//import Message from './Message'

const projectList = [
  {
    name: "Flask Backend",
    description: "A Flask-based backend API for a drone delivery service.",
    link: "https://github.com/beaumartin25/dronecones-api",
  },
  {
    name: "Gas Prices Data Analysis Project",
    description: "Analyzing trends in gas prices using Python and Pandas.",
    link: "https://github.com/beaumartin25/Data_Analysis_Project",
  },
  // Add more projects as needed
];

function App() {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Beau Martin
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {projectList.map((project, index) => (
          <Paper key={index} elevation={3} sx={{ width: { xs: 1, md: 600 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{project.name}</Typography>
              <Typography sx={{ mt: 2 }}>{project.description}</Typography>
              <a href={project.link}>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Go to project
                </Button>
              </a>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default App;
