const quotes = [
    {
      id: 1,
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      id: 2,
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      id: 3,
      "quote": "Your time is limited, so don’t waste it living someone else’s life.",
      "author": "Steve Jobs"
    },
    {
      id: 4,
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      id: 5,
      "quote": "In the middle of every difficulty lies opportunity.",
      "author": "Albert Einstein"
    }
]

export default defineEventHandler(async (event) => {
      const method = getMethod(event);
      console.log(method, "METHOD");
      

      if(method == "GET") {
        return quotes
      }
      else if(method == "POST") {
        const body = await readBody(event);

        if(!body || !body.quote || !body.author) {
            return {
                status: 400,
                message: "Quote and Author are mandatory"
            }
        }

        const newQuote = {
            id: quotes.length + 1,
            quote: body.quote,
            author: body.author
        }

        quotes.push(newQuote);

        return {
            status: 200,
            message: "Quote added successfully",
            data: newQuote
        }
      }
      else if (method == "DELETE") {
        const body = await readBody(event);

        if(!body || !body.id) {
            return {
                stauts: 400,
                message: "Id must be provided",
                body: body
            }
        }

        const id = body.id;

        quotes.forEach((item, index) => {
            if (item.id == id) {
                quotes.splice(index, 1);
            }
        });

        return {
            status: 200,
            message: "Quote deleted successfully",
            data: quotes
        }
      }
      else {
        return {
            status:  405,
            message: "Method not allowed"
        }
      }
})