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
    name: "Call of Duty Zombies Quest Guide",
    description:
      "A work-in-progress C# and .NET-based website that catalogs Call of Duty Zombies Quests. It features a React and Material UI frontend for game and map selection, while the backend stores game names, maps, main quests, side quests, and step-by-step details for quest completion.",
    link: "https://github.com/beaumartin25/CODZ_Quest_Guide",
  },
  {
    name: "Crowd Evactuaion Cellular Automata",
    description:
      "Simulated crowd evacuation scenarios using cellular automata integrated with game theory to analyze cooperative and defective strategies. Modeled agent interactions on a grid to study decision-making, behavioral dynamics, and social influence during evacuations, highlighting the intersection of computational modeling and strategic analysis.",
    link: "https://github.com/beaumartin25/crowd_evacuation_cellular_automata",
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
          I am a current Software Developer with a Bachelor&apos;s Degree in
          Computer Science from Utah State University. Experienced in bulding
          robust applications using Python, Java, C++, C#, and Typescript.
          Proficient in designing back-end APIs, managing databases, and
          front-end development.
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
