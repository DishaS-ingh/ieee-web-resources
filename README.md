**TASK 3:**

PART A:
**Corrected code:**
function Counter() {
  let count = 0;

  const handleIncrement = () => {
    count = count + 1;
    console.log("Count is now: " + count);
    document.getElementById('display').innerText = count;
  };

  for (let i = 0; i < 3; i++) {  // changed var → let
    setTimeout(() => {
      console.log("Iteration: " + i);
    }, 1000);
  }
}

**Explanation**
var shares the same variable inside a loop,
which can cause unexpected results.
let creates a new variable for each loop iteration,
so it works correctly especially with things like setTimeout.


PART B:
**Corrected Code**
const express = require('express');
const app = express();
app.get('/user/:id', async (req, res) => {// made async
  try {
    const userData = await fetchUserFromDB(req.params.id);// added await
    if (!userData) {
      return res.status(404).send("User not found");// added return
    }
    res.json({
      status: "success",
      data: userData   // fixed typo
    });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
  }
});
async function fetchUserFromDB(id) {
  return { id, name: "IEEE Member" };
}

**Explanation**
The function that gets user data was not properly waited for,
so it could cause wrong output.
There was also a small spelling mistake in the variable name. 
Additionally, the code did not stop after sending a 404 error, 
which could cause another response to be sent.
