const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hgwvewl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const Ferrari = client.db("carBazarComDB").collection("FerrariDB");
    const Lamborghini = client.db("carBazarComDB").collection("Lamborghini");
    const Toyota = client.db("carBazarComDB").collection("Toyota");
    const Mercedes = client.db("carBazarComDB").collection("Mercedes");
    const Rolls_Royce = client.db("carBazarComDB").collection("Rolls_Royce");
    const BMW = client.db("carBazarComDB").collection("BMW");
    const Bugatti = client.db("carBazarComDB").collection("Bugatti");
    const Tesla = client.db("carBazarComDB").collection("Tesla");
   


    app.get("/Ferrari", async (req, res) => {
      const result = await Ferrari.find().toArray();
      res.send(result);
    });
    app.get("/Ferrari/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Ferrari.findOne(query);
      res.send(result);
    });
    
    app.get("/Lamborghini", async (req, res) => {
      const result = await Lamborghini.find().toArray();
      res.send(result);
    });
    app.get("/Toyota", async (req, res) => {
      const result = await Toyota.find().toArray();
      res.send(result);
    });
    app.get("/Mercedes", async (req, res) => {
      const result = await Mercedes.find().toArray();
      res.send(result);
    });
    app.get("/Rolls_Royce", async (req, res) => {
      const result = await Rolls_Royce.find().toArray();
      res.send(result);
    });
    app.get("/BMW", async (req, res) => {
      const result = await BMW.find().toArray();
      res.send(result);
    });
    app.get("/Bugatti", async (req, res) => {
      const result = await Bugatti.find().toArray();
      res.send(result);
    });
    app.get("/Tesla", async (req, res) => {
      const result = await Tesla.find().toArray();
      res.send(result);
    });
// -------------------------------------------------------
    app.post("/Ferrari",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Ferrari.insertOne(data);
      res.send(result);
    });
    app.post("/Lamborghini",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Lamborghini.insertOne(data);
      res.send(result);
    });
    app.post("/Toyota",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Toyota.insertOne(data);
      res.send(result);
    });
    app.post("/Mercedes",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Mercedes.insertOne(data);
      res.send(result);
    });
    app.post("/Rolls_Royce",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Rolls_Royce.insertOne(data);
      res.send(result);
    });
    app.post("/BMW",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await BMW.insertOne(data);
      res.send(result);
    });
    
    app.post("/Bugatti",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Bugatti.insertOne(data);
      res.send(result);
    });
    app.post("/Tesla",async(req, res) => {
      const data = req.body;
      console.log(data)
      const result = await Tesla.insertOne(data);
      res.send(result);
    });
    // ------------------------------------------------------
    app.delete('/Ferrari/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Ferrari.deleteOne(query);
      res.send(result)
    })
    app.delete('/Lamborghini/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Lamborghini.deleteOne(query);
      res.send(result)
    })
    app.delete('/Toyota/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Toyota.deleteOne(query);
      res.send(result)
    })
    app.delete('/Mercedes/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Mercedes.deleteOne(query);
      res.send(result)
    })
    app.delete('/Rolls_Royce/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await Rolls_Royce.deleteOne(query);
      res.send(result)
    })
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is running");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
