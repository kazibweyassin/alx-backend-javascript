const fs = require('fs').promises;

async function countStudents(path) {
    try {
        // Read the file asynchronously
        const data = await fs.readFile(path, 'utf8');

        // Split the file into lines and filter out any empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        // Extract the header and the student data
        const header = lines[0].split(',');
        const students = lines.slice(1).map(line => line.split(','));

        // Count the total number of students
        console.log(`Number of students: ${students.length}`);

        // Create an object to store the students by field
        const fields = {};

        students.forEach(student => {
            const field = student[3]; // Assuming the 4th column is the field
            const firstName = student[0]; // Assuming the 1st column is the first name

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        });

        // Log the number of students in each field and their names
        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
        throw error;
    }
}

module.exports = countStudents;
