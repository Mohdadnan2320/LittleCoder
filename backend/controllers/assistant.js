const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.MY_TEST_KEY,
});

exports.check = async (req, res) => {
  const { code, lesson } = req.body;
  console.log(code, lesson);
  try {
    if (!code && !lesson) {
      return res
        .status(400)
        .json({ error: "Please provide both code and lesson" });
    }

    const completion = openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        {
          role: "system",
          content: "You are an interactive Python tutor for kids.",
        },
        {
          role: "user",
          content: `Check the following Python code for lesson "${lesson}" and provide feedback with hints: ${code}`,
        },
      ],
    });
    completion.then((result) =>
      res.status(201).json(result.choices[0].message)
    );
  } catch (error) {
    res.status(500).json({ error: "Error checking code" });
  }
};

exports.description = async (req, res) => {
  const lesson = req.query.lesson;
  try {
    if (!lesson) {
      return res.status(404).json({ description: "Lesson  not found!" });
    }
    const completion = openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        {
          role: "system",
          content: "You are an interactive Python tutor for kids.",
        },
        {
          role: "user",
          content: `suggest more information about ${lesson} with bullet points `,
        },
      ],
    });
    completion.then((result) =>
      res.status(201).json(result.choices[0].message)
    );
  } catch (error) {
    res.status(500).json({ error: "Error checking code" });
  }

};

// exports.quiz = async (req, res) => {
//   const { title } = req.params;
//   const quiz = title;
// console.log(quiz)
//   try {
//     if (!quiz) {
//       return res.status(404).json({ error: "Quiz not found for this lesson." });
//     }
//     const completion = openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         store: true,
//         messages: [
//           {
//             role: "system",
//             content: "You are an interactive Python tutor for kids.",
//           },
//           {
//             role: "user",
//             content: `suggest basic mcq quiz questions ${title} and answers `,
//           },
//         ],
//       });
//       completion.then((result) =>
//         res.status(201).json(result.choices[0].message)
//       );
//   } catch (error) {
//     res.status(500).json({ error: "Error checking code" });
//   }
// };

