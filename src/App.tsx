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
    name: "AWS Data Orchestrator",
    description:
      'This project uses python to transfer and process data between Amazon S3 buckets, a DynamoDB database, and an SQS queue. The primary functionality includes creating, updating, and deleting records (or "widgets") based on JSON input data.',
    link: "https://github.com/beaumartin25/aws_data_orchestrator",
  },
  {
    name: "Gas Prices Data Analysis Project",
    description:
      "This project leverages Python with the pandas library to deliver a comprehensive analysis of U.S. gasoline price trends over three decades. It incorporates various data cleaning strategies, comparisons, and visuals to effectively analyze these trends. Additionally, the project includes a predictive modeling component using the scikit-learn library, providing insights into future price trends.",
    link: "https://github.com/beaumartin25/Data_Analysis_Project",
  },
  {
    name: "Custom C++ Vector Class with Dynamic Resizing and Iterator Support",
    description:
      "This project developes a custom templated vector class in C++ with dynamic resizing and iterator support. The project demonstrates proficiency in C++ programming, including advanced concepts like smart pointers, function templates, and exception handling.",
    link: "https://github.com/beaumartin25/custom_cpp_vector",
  },
  // Add more projects as needed
];

function App() {
  return (
    <Container>
      <Container sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
        <Typography variant="h1">Beau Martin</Typography>
        <Typography sx={{ textAlign: "center", color: "primary.main" }}>
          Email: beaumartin25@gmail.com
        </Typography>
      </Container>
      <Typography variant="h2">About Me</Typography>
      <Container sx={{ m: 2 }}>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Hi, I&apos;m Beau Martin, a computer science student at Utah State
          University, set to graduate in December 2024.
        </Typography>
      </Container>
      <Typography variant="h2">Projects</Typography>
      <Box
        sx={{
          pt: 4,
          pb: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {projectList.map((project, index) => (
          <Paper key={index} elevation={3} sx={{ width: { xs: 1, md: 0.45 } }}>
            <Box sx={{ m: 3, height: 1 }}>
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
