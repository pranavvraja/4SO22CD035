import { Router } from "express";
const router = Router();

const windowSize = 10;
var windowPrevState = [];
var windowCurrState = [];
var avg = 0;

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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODc0MzkwLCJpYXQiOjE3NDY4NzQwOTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE4YmQ0MzkzLTdhZWUtNDFhOC04ZjMxLTJkOTMzMWYxN2VjYSIsInN1YiI6InByYW5hdnZyYWphY3BAZ21haWwuY29tIn0sImVtYWlsIjoicHJhbmF2dnJhamFjcEBnbWFpbC5jb20iLCJuYW1lIjoicHJhbmF2diByYWphIGMgcCIsInJvbGxObyI6IjRzbzIyY2QwMzUiLCJhY2Nlc3NDb2RlIjoiS2pKQXhQIiwiY2xpZW50SUQiOiJhOGJkNDM5My03YWVlLTQxYTgtOGYzMS0yZDkzMzFmMTdlY2EiLCJjbGllbnRTZWNyZXQiOiJXSFRwSkJkV0N5VWJCakVCIn0.jblSVRbvNZphCFIxyPCAQgxn7WaZ0gk4O2FbM-94Vw4`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log("fetch: ", data.numbers);
      return data.numbers;
    } else {
      console.error("Unauthorized");
      //   fetchToken();
    }
  };

  //   const fetchToken = async () => {
  //     const res = await fetch(`http://20.244.56.144/evaluation-service/auth`, {
  //       method: "POST",
  //       body: [
  //         {
  //           email: "pranavvrajacp@gmail.com",
  //           name: "pranavv raja c p",
  //           rollNo: "4so22cd035",
  //           accessCode: "KjJAxP",
  //           clientID: "a8bd4393-7aee-41a8-8f31-2d9331f17eca",
  //           clientSecret: "WHTpJBdWCyUbBjEB",
  //         },
  //       ],
  //       headers: {
  //         "Content-type": "text/html; charset=UTF-8",
  //       },
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log("authorized");
  //     }
  //   };

  const data2 = getNumbers();
  console.log("return data: ", data2);

  windowPrevState.unshift(windowCurrState);
  windowCurrState = data2;

  var jsonReturn = {
    windowPrevState,
    windowCurrState,
    data2,
    avg,
  };

  console.log(jsonReturn);
  res.send(jsonReturn);
});

export default router;
