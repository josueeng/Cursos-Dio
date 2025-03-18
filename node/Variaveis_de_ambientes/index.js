import connectToDatabase from './Data/Data.js';

(async function main() {
    await connectToDatabase('josue', '123456');
})();