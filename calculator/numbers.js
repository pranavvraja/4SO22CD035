import { Router } from "express";
const router = Router();

router.get("/:numberid", function (req, res) {
  var id;
  if (req.params.numberid === "p") {
    var id = "primes";
  } else if (req.params.numberid === "e") {
    var id = "even";
  } else if (req.params.numberid === "f") {
    var id = "fibo";
  } else if (req.params.numberid === "r") {
    var id = "rand";
  }

  const getNumbers = async () => {
    const res = await fetch(`http://20.244.56.144/evaluation-service/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "text/html; charset=UTF-8",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODcxNDM3LCJpYXQiOjE3NDY4NzExMzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE4YmQ0MzkzLTdhZWUtNDFhOC04ZjMxLTJkOTMzMWYxN2VjYSIsInN1YiI6InByYW5hdnZyYWphY3BAZ21haWwuY29tIn0sImVtYWlsIjoicHJhbmF2dnJhamFjcEBnbWFpbC5jb20iLCJuYW1lIjoicHJhbmF2diByYWphIGMgcCIsInJvbGxObyI6IjRzbzIyY2QwMzUiLCJhY2Nlc3NDb2RlIjoiS2pKQXhQIiwiY2xpZW50SUQiOiJhOGJkNDM5My03YWVlLTQxYTgtOGYzMS0yZDkzMzFmMTdlY2EiLCJjbGllbnRTZWNyZXQiOiJXSFRwSkJkV0N5VWJCakVCIn0.FmaOyNIPk9L4J2dMq6G4hKsh7xvV38Vioh_ykQw_HeA`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  };

  const data = getNumbers();
  res.send(data);
});

export default router;
