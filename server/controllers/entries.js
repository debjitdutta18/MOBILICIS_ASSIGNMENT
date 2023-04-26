const Entry = require("../models/entry");
const redis = require('redis');
const client = redis.createClient()


client.connect();

client.on('connect', () => {
    console.log('Connected to Redis');
})
client.on('error', (err) => {
    console.log(err.message);
})
client.on('ready', () => {
    console.log('Redis is ready');
})


//GET ALL ENTRIES
const getAllEntries = async(req,res) => {
    const entryData = await Entry.find({});
    res.status(200).json(entryData);
};

//GET ALL ENTRIES WITH INCOME LOWER THAN $5 USD AND HAVE A CAR OF BRAND “BMW” OR “MERCEDES”
const getEntryOne = async (req, res) => {
    try {
        let getCacheData = await client.get('key1');
        if (getCacheData) {
            res.status(200).json(JSON.parse(getCacheData))
            console.log("get cache1")
        } else {
            console.log("set cache1")
            const entryData = await Entry.find({
                $and: [{
                        income: {
                            $lt: "$5.00"
                        }
                    },
                    {
                        car: {
                            $in: ["BMW", "Mercedes-Benz"]
                        }
                    }
                ]
            }).select("id first_name last_name email gender income city car quote phone_price -_id").lean();
            client.set('key1', JSON.stringify(entryData), 'EX', 5)
            res.status(200).json(entryData)
        }
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
};

//GET ALL MALE USERS WHICH HAVE PHONE PRICE GREATER THAN 10,000.
const getEntryTwo = async (req, res) => {
    try {
        let getCacheData = await client.get('key2');
        if (getCacheData) {
            res.status(200).json(JSON.parse(getCacheData))
            console.log("get cache2")
        } else {
            console.log("set cache2")
            const entryData = await Entry.find({
                $and: [{
                        gender: 'Male'
                    },
                    {
                        phone_price: {
                            $gt: 10000
                        }
                    }
                ]
            }).select("id first_name last_name email gender income city car quote phone_price -_id");
            client.set('key2', JSON.stringify(entryData), 'EX', 5)
            res.status(200).json(entryData)
        }
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
};

// GET ALL USERS WHOSE LAST NAME STARTS WITH “M” AND HAS A QUOTE CHARACTER LENGTH GREATER THAN 15 AND EMAIL INCLUDES HIS/HER LAST NAME.
const getEntryThree = async (req, res) => {
    try {
        let getCacheData = await client.get('key3');
        if (getCacheData) {
            res.status(200).json(JSON.parse(getCacheData))
            console.log("get cache2")
        } else {
            console.log("set cache2")
            const regex = /^m/i;
            const entryData = await Entry.find({
                last_name: regex,
                quote: {
                    $regex: /^.{16,}$/
                },
            });
            const filteredData = entryData.filter((obj) => {
                return obj.email.toLowerCase().includes(obj.last_name.toLowerCase());
            });
            client.set('key3', JSON.stringify(filteredData), 'EX', 5)
            res.status(200).json(filteredData)
        }
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
};

//GET ALL USERS WHICH HAVE A CAR OF BRAND “BMW”, “Mercedes-Benz” OR “AUDI” AND WHOSE EMAIL DOES NOT INCLUDE ANY DIGIT.
const getEntryFour = async (req, res) => {
    try {
        let getCacheData = await client.get('key4');
        if (getCacheData) {
            res.status(200).json(JSON.parse(getCacheData))
            console.log("get cache2")
        } else {
            console.log("set cache2")
            const entryData = await Entry.find({
                car: {
                    $in: ['BMW', 'Mercedes-Benz', 'Audi']
                },
                email: {
                    $not: {
                        $regex: /\d/
                    }
                }
            }).select("id first_name last_name email gender income city car quote phone_price -_id").lean()
            client.set('key4', JSON.stringify(entryData), 'EX', 5)
            res.status(200).json(entryData)
        }
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
};

//GET ALL SHOW THE DATA OF TOP 10 CITIES WHICH HAVE THE HIGHEST NUMBER OF USERS AND THEIR AVERAGE INCOME.
const getEntryFive = async (req, res) => {
    try {
        let getCacheData = await client.get('key5');
        if (getCacheData) {
            res.status(200).json(JSON.parse(getCacheData))
            console.log("get cache2")
        } else {
            console.log("set cache2")
            const entryData = await Entry.aggregate([{
                    $group: {
                        _id: "$city",
                        count: {
                            $sum: 1
                        },
                        totalIncome: {
                            $sum: {
                                $toDouble: {
                                    $substr: ["$income", 1, -1]
                                }
                            }
                        }
                    }
                },
                {
                    $addFields: {
                        averageIncome: {
                            $divide: ["$totalIncome", "$count"]
                        }
                    }
                },
                {
                    $sort: {
                        count: -1
                    }
                },
                {
                    $limit: 10
                },
                {
                    $project: {
                        _id: 0,
                        city: "$_id",
                        count: 1,
                        averageIncome: {
                            $round: ["$averageIncome", 2]
                        }
                    }
                }
            ]).hint({
                city: 1
            });
            client.set('key5', JSON.stringify(entryData), 'EX', 5)
            res.status(200).json(entryData)
        }
    } catch (error) {
        console.log(e)
        res.status(500).send(e)
    }
};


module.exports = {
    getAllEntries, 
    getEntryOne,
    getEntryTwo,
    getEntryThree,
    getEntryFour,
    getEntryFive,
}


