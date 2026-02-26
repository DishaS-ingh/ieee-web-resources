const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Root route (put it AFTER app is created)
app.get("/", (req, res) => {
  res.send("IEEE Web Resources Membership API is running ");
});

// In-memory members list
let members = [
  { name: "Sudha", usn: "1MS23CS001", domain: "Web Resources" },
  { name: "Aman", usn: "1MS23CS002", domain: "Web Resources" }
];

// GET all members
app.get("/members", (req, res) => {
  res.json(members);
});

// POST add member
app.post("/members", (req, res) => {
  const { name, usn, domain } = req.body;

  if (!name || !usn || !domain) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (usn.length !== 10) {
    return res.status(400).json({ error: "USN must be exactly 10 characters" });
  }

  members.push({ name, usn, domain });

  res.status(201).json({
    message: "Member added successfully",
    members
  });
});

// DELETE member by USN
app.delete("/members/:usn", (req, res) => {
  const { usn } = req.params;

  const initialLength = members.length;
  members = members.filter(member => member.usn !== usn);

  if (members.length === initialLength) {
    return res.status(404).json({ error: "Member not found" });
  }

  res.json({
    message: "Member deleted successfully",
    members
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});