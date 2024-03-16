import app from "./app.js";


const PORT = process.env.PORT || 7020; // Default to port 7020 if PORT is not set
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});
