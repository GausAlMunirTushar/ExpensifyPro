const app = require('./app')
// PORT
const PORT = process.env.PORT || 8080;

// Server Listening
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})