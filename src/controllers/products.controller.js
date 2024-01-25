import sql from 'mssql'

import { getConnection, queries } from '../database/index.js'

export const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection
            .request()
            .query(queries.getProducts);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductsCount = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection
            .request()
            .query(queries.getProductsCount);
        
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params;

    if (id == null)
        return res.status(400).json({msg: 'Bad Request. Please fill all the required fields.'});

    try {
        const connection = await getConnection();

        const result = await connection
            .request()
            .input('id', sql.Int, id)
            .query(queries.getProduct);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postProduct = async (req, res) => {
    const { name, description } = req.body;
    let { quantity } = req.body;

    if (name == null || description == null)
        return res.status(400).json({msg: 'Bad Request. Please fill all the required fields.'});

    if (quantity == null)
        quantity = 0;

    try {
        const connection = await getConnection();
        await connection
            .request()
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('quantity', sql.Int, quantity)
            .query(queries.postProduct);

        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, quantity } = req.body;    

    if (id == null || name == null || description == null || quantity == null)
        return res.status(400).json({msg: 'Bad Request. Please fill all the required fields.'});    

    try {
        const connection = await getConnection();
        await connection
            .request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('quantity', sql.Int, quantity)
            .query(queries.updateProduct);

        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }    
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (id == null)
        return res.status(400).json({msg: 'Bad Request. Please fill all the required fields.'});

    try {
        const connection = await getConnection();

        const result = await connection
            .request()
            .input('id', sql.Int, id)
            .query(queries.deleteProduct);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
