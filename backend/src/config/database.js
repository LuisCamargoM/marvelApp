/* DATABASE CONFIGURATION FILE */
module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root@123",
  database: "marvel",
  define: {
    timestamps: true,
    underscored: true,
    underscored_All: true
  }
};
