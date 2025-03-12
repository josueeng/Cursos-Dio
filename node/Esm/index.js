import * as database from "./utils/database.js";

database.connectToDatabase("my_database");
database.disconnectFromDatabase("my_database");
// Output: conectado ao banco de dados my_database
// Output: desconectado do banco de dados my_database