# Node.js File Streaming Project

A demonstration of efficient file handling using Node.js streams for copying large files without excessive memory consumption.

## Overview

This project showcases the use of **Node.js Streams** to handle large file operations efficiently. Instead of loading an entire file into memory, streams process data in chunks, making it suitable for large files and reducing memory overhead.

## Project Structure

```
Day-23/
├── readme.md              # Project documentation
├── stream.js              # Main streaming implementation
└── docs/
    ├── LargeF.txt         # Source file (read stream)
    └── CopyLarge.txt      # Destination file (write stream)
```

## Features

- ✅ Efficient file copying using Node.js Streams
- ✅ Minimal memory footprint regardless of file size
- ✅ Uses the `pipe()` method for automatic backpressure handling
- ✅ UTF-8 encoding support

## How It Works

The script uses `fs.createReadStream()` and `fs.createWriteStream()` to efficiently copy files:

```javascript
const readStream = fs.createReadStream('./docs/LargeF.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/CopyLarge.txt');

// Pipe the read stream to the write stream
readStream.pipe(writeStream);
```

The `pipe()` method automatically manages:
- Data chunking
- Flow control
- Backpressure handling
- Stream events

## Installation & Setup

### Prerequisites
- Node.js (v12 or higher)

### Running the Project

```bash
# Copy a large file using streams
node stream.js
```

The script will read `./docs/LargeF.txt` and create a copy at `./docs/CopyLarge.txt`.

## Code Explanation

### Active Implementation
The current implementation uses the `pipe()` method, which is the recommended approach:
- Automatic memory management
- Built-in error handling
- Simple and clean syntax

### Alternative Approach (Commented Out)
The code includes a commented example showing manual event handling:
```javascript
readSteamer.on("data", (buffer) => {
    console.log('\nNewBuffer\n');
    writeSteamer.write(buffer);
});
```

## Performance Benefits

| Approach | Memory Usage | Speed | Suitability |
|----------|---|---|---|
| **Streams (pipe)** | Low (constant) | Fast | Large files |
| **fs.readFile()** | High (entire file) | Moderate | Small files |
| **Manual buffering** | Variable | Moderate | Learning/debugging |

## When to Use Streams

- Processing large files (videos, logs, archives)
- Real-time data processing
- Reducing memory footprint
- Building scalable applications

## Common Stream Events

```javascript
// Data event (manual approach)
stream.on('data', (chunk) => { /* process chunk */ });

// End event
stream.on('end', () => { /* cleanup */ });

// Error event
stream.on('error', (err) => { /* handle error */ });
```

## Troubleshooting

- **File not found**: Ensure `./docs/LargeF.txt` exists
- **Permission denied**: Check file permissions
- **Out of memory**: Switch to streaming approach (already implemented)

## Resources

- [Node.js Stream Documentation](https://nodejs.org/api/stream.html)
- [fs Module Documentation](https://nodejs.org/api/fs.html)
- [Understanding Node.js Streams](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)

## License

This project is part of the Fullstack Journey learning series.

## Author

Created as part of Day-23 learning exercise.
