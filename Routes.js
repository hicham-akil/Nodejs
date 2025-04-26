const express = require('express');
const app = express();
const port = 3000;
const path=require('path')
const dataFilePath = path.join(__dirname, 'data.json');

const readData = () => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  };
app.use(express.json());

// app.get('/', (req, res) => {
  //     res.send('Hello, World!');
  //   });
  // app.post('/user/:name/:age', (req, res) => {
//     const {name,age}=req.params;
//     res.send(`User ${name} is ${age} years old.`);
// });
app.post('/user', (req, res) => {
  const { name, age } = req.body;
  const data = readData();
  
  const newUser = {
    id: data.users.length + 1, 
    name,
    age
  };
  
  data.users.push(newUser);
  writeData(data);
  
  res.status(201).json(newUser);
});
app.listen(port,()=>{
    console.log('server is runnig')
})