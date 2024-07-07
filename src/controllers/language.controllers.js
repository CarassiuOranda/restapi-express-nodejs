import { getConnection } from "../database/database"

const  getLanguages = async (req,res) => {
    try {
    const connection = await getConnection();
    const result = await connection.query("SELECT id,name,programers FROM language");
    console.log(result);
    res.json(result);
    }
    catch(err) {
        res.status(500);
        res.send(err.message)
    }
};

const addLanguage = async (req,res) => {
    try {
    const {name,programers} = req.body;
    if(id===undefined || programers===undefined) {
        res.status(400).json({ message: "Bad request. Pease fill all field"});

    }
    const language = {name,programers};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO language SET ?",language);
    res.json("addLanguage")
    }
    catch(err) {
        res.status(500);
        res.send(err.message)
    }
};

export const methods = {
    getLanguages,
    addLanguage
}; 