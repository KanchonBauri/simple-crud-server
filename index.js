const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());



// kanchonbauri1998
// JDvqa4xEDRBLXqbI

// kanchonbauri1998
// WQpAuGuCLnQ3yMGb


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kanchonbauri1998:WQpAuGuCLnQ3yMGb@cluster0.z7eow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("userDB");
        const userCollection = database.collection("users");

        // next step
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log('new user', user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.log);


app.get('/', (req, res) => {
    res.send('SIMPLE CRUD IN RUNNING')
})

app.listen(port, () => {
    console.log(`SIMPLE Crud is running on port: ${port}`)
})