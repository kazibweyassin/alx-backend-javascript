// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input from stdin
process.stdin.on('data', (data) => {
    // Trim the input to remove any extra new lines or spaces
    const name = data.toString().trim();

    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Close the stdin stream and exit the program gracefully
    process.stdin.end();
});

// Handle the stdin 'end' event to display the closing message
process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
