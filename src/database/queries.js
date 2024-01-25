export const queries = {   
    getProducts: `
        SELECT * FROM Product
    `,
    getProductsCount: `
        SELECT COUNT(*) 
        FROM Product
    `,
    getProduct: `
        SELECT * FROM Product
        WHERE Id = @id
    `,
    postProduct: `
        INSERT INTO Product (name, description, quantity) 
        VALUES (@name, @description, @quantity)
    `,
    updateProduct: `
        UPDATE Product
        SET name = @name, description = @description, quantity = @quantity
        WHERE Id = @id
    `,
    deleteProduct: `
        DELETE FROM Product
        WHERE Id = @id
    `,
}