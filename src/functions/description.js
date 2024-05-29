const { OpenAI } = require("openai");

// Replace 'your-api-key' with your actual OpenAI API key

module.exports = async function (context) {
  // context.log('JavaScript HTTP trigger function processed a request.');

  try {
    // const completion = await openai.chat.completions.create({
    //     messages: [
    //         {
    //             role: "system",
    //             content: "Ce faci?",
    //         },
    //     ],
    //     model: "gpt-3.5-turbo",
    // });

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: "hello",
    };
  } catch (error) {
    context.log.error("Error calling OpenAI API:", error);
    context.res = {
      status: 500,
      body: "Error calling OpenAI API: " + error.message,
    };
  }
};
