// Import the express module
const express = require('express');
// Create an instance of express
const app = express();
// Import the path module to work with file and directory paths
const path = require('path');
// Import the fs module to interact with the file system
const fs = require('fs');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the path to the data.json file
const dataFilePath = path.join(__dirname, 'data1.json');
app.get('/', (req, res) => {
    res.send('Server is working!');
});
// Function to read data from the JSON file synchronously
const readFileSync = () => {
    const rawData = fs.readFileSync(dataFilePath); // Read the file
    return JSON.parse(rawData); // Parse and return the JSON data
}

// Function to write data to the JSON file synchronously
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2)); // Write formatted JSON data to file
}
app.post('/addemp',(req,res)=>{
    const {name}=req.body
    const data=readFileSync();
    const newemp={
        id:data.employee.length+1,
        name:name,
    }
    data.employee.push(newemp);
    writeData(data);
    res.send(data)
})
app.get('/employee',(req,res)=>{
    const data=readFileSync();
    res.send(data)
})
app.patch('/update',(req,res)=>{
    const {newname,oldname}=req.body;
    const data=readFileSync();
    data.employee.map((elm)=>{
        if(elm['name']===oldname){
            elm['name']=newname
        }
    })
    writeData(data); 
    res.send(data)
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    const data=readFileSync();
    data.employee=data.employee.filter((emp)=>emp.id!=id)
    writeData(data)
    res.send(data)
})
// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('server is running'); // Log when the server starts
});
