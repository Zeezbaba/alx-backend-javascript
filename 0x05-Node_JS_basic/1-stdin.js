console.log('Welcome to Holberton School, what is your name?');

// user input from stdin
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    // Display the user's name
    const userName = data.toString();
    process.stdout.write(`Your name is: ${userName}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    // Display the user's name
    const userName = data.toString();
    process.stdout.write(`Your name is: ${userName}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
