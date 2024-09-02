import { Box, Button, Container, Paper, Typography } from "@mui/material";
//import Message from './Message'

const projectList = [
  {
    name: "Flask Backend",
    description:
      "A Flask-based backend API for a drone ice cream delivery service.",
    link: "https://github.com/beaumartin25/dronecones-api",
  },
  {
    name: "Gas Prices Data Analysis Project",
    description:
      "This project provides a comprehensive analysis of trends in U.S. gasoline prices over three decades, examining the impact of economic factors, oil prices, and global events. We utilize extensive datasets to explore seasonal variations, regional differences, and the influence of crude oil prices on gasoline pricing. Our results offer insights into predictive modeling for future price trends, benefiting economic forecasting and policy-making.",
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
