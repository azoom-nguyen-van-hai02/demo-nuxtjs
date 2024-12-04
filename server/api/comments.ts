export default defineEventHandler(async (event) => {
  // Simulate fetching data (could be from a database or an external API)
  const comments = [
    { id: 1, title: 'First Post', body: 'This is the first post.' },
    { id: 2, title: 'Second Post', body: 'This is the second post.' },
    { id: 3, title: 'Third Post', body: 'This is the third post.' },
  ]
  console.log('calling to comments')
  // Return the comments as JSON response
  return comments
})
