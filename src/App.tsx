import { Box, Button, Container, Paper, Typography } from "@mui/material";
//import Message from './Message'

const projectList = [
  {
    name: "Drone Cones API",
    description:
      "This project develops a Flask-based backend API for a drone ice cream delivery service, using SQL for data management. It supports creating user accounts, employee drone registration and income, store manager for inventory control, and customer order placement.",
    link: "https://github.com/beaumartin25/dronecones-api",
  },
  {
    name: "Gas Prices Data Analysis Project",
    description:
      "This project leverages Python with the pandas library to deliver a comprehensive analysis of U.S. gasoline price trends over three decades. It incorporates various data cleaning strategies, comparisons, and visuals to effectively analyze these trends. Additionally, the project includes a predictive modeling component using the scikit-learn library, providing insights into future price trends.",
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
      <Typography variant="h2">About Me</Typography>
      <Container sx={{ m: 2 }}>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Hello, my name is Beau Martin and I am a student at Utah State
          University. I will be graduating with my degree in computer science in
          December 2024.
        </Typography>
      </Container>
      <Typography variant="h2">Projects</Typography>
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
