export default defineEventHandler((event) => {

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


    const id = getRouterParam(event, 'id');
    const filtered = quotes.filter((e) => {
      return e.id == id
    })
    return {filtered}
})