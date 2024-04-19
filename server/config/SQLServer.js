import sql from 'mssql/msnodesqlv8.js';

const SQLconfig = {
    server: "localhost",
    database: "assignment2",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

// Kết nối tới cơ sở dữ liệu
export async function connectToDatabase() {
    try {
        const pool = await sql.connect(SQLconfig);
        console.log("Connected to the database");
        return pool;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Re-throw the error to handle it outside this function
    }
}
// Sử dụng async/await để kết nối và xử lý lỗi