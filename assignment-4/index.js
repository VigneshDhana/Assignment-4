const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (num1 || num2) {
    if (!(isNaN(num1) || isNaN(num2))) {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      if (num1 < 1000000 && num2 < 1000000) {
        if (num1 > -1000000 && num2 > -1000000) {
          res.status(200).json({
            status: "success",
            message: "the sum of given two numbers",
            sum: num1 + num2,
          });
        } else {
          res.status(404).json({
            status: "error",
            message: "Underflow",
          });
        }
      } else {
        res.status(404).json({
          status: "error",
          message: "Overflow",
        });
      }
    } else {
      res.status(404).json({
        status: "error",
        message: "Provide valid Input",
      });
    }
  } else {
    res.status(404).json({
      status: "error",
      message: "Provide Input",
    });
  }
});

app.post("/sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (num1 || num2) {
    if (!(isNaN(num1) || isNaN(num2))) {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      if (num1 < 1000000 && num2 < 1000000) {
        if (num1 > -1000000 && num2 > -1000000) {
          res.status(200).json({
            status: "success",
            message: "the difference of given two numbers",
            difference: num1 - num2,
          });
        } else {
          res.status(404).json({
            status: "error",
            message: "Underflow",
          });
        }
      } else {
        res.status(404).json({
          status: "error",
          message: "Overflow",
        });
      }
    } else {
      res.status(404).json({
        status: "error",
        message: "Provide valid Input",
      });
    }
  } else {
    res.status(404).json({
      status: "error",
      message: "Provide Input",
    });
  }
});

app.post("/divide", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (num1 || num2) {
    if (!(isNaN(num1) || isNaN(num2) || Number(num2) == 0)) {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      if (num1 < 1000000 && num2 < 1000000) {
        if (num1 > -1000000 && num2 > -1000000) {
          res.status(200).json({
            status: "success",
            message: "The division of given numbers",
            result: num1 / num2,
          });
        } else {
          res.status(404).json({
            status: "error",
            message: "Underflow",
          });
        }
      } else {
        res.status(404).json({
          status: "error",
          message: "Overflow",
        });
      }
    } else {
      res.status(404).json({
        status: "error",
        message: "Provide valid Input",
      });
    }
  } else {
    res.status(404).json({
      status: "error",
      message: "Provide Input",
    });
  }
});

app.post("/multiply", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  if (num1 || num2) {
    if (!(isNaN(num1) || isNaN(num2) || Number(num2) == 0)) {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      if (num1 < 1000000 && num2 < 1000000) {
        if (num1 > -1000000 && num2 > -1000000) {
          res.status(200).json({
            status: "success",
            message: "The product of given numbers",
            result: num1 * num2,
          });
        } else {
          res.status(404).json({
            status: "error",
            message: "Underflow",
          });
        }
      } else {
        res.status(404).json({
          status: "error",
          message: "Overflow",
        });
      }
    } else {
      res.status(404).json({
        status: "error",
        message: "Provide valid Input",
      });
    }
  } else {
    res.status(404).json({
      status: "error",
      message: "Provide Input",
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: "failure",
    message: "Page Not Found",
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
