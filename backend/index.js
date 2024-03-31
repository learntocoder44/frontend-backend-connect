import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      setup: "Why don'",
      punchline: "They don't have the guts!",
    },
    {
      setup: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese!",
    },
    {
      setup: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },
  ];

  res.json(jokes);
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
