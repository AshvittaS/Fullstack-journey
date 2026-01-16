# Day-22: Node.js Fundamentals

A learning project demonstrating core Node.js concepts including modules, file system operations, and built-in utilities.

## 📚 Overview

This project contains practical examples of essential Node.js features for beginners learning full-stack development. It covers module exports, the file system API, and working with Node.js core modules.

## 🎯 Project Structure

```
Day-22/
├── hello.js              # Arrow functions and basic console output
├── module.js             # Module imports and OS utilities
├── Filesys.js            # File system operations (create, read, write, delete)
├── data.js               # Data export module
├── docs/
│   └── file.txt          # Generated file from Filesys operations
└── readme.md             # Project documentation
```

## 📋 Files Description

### `hello.js`
Demonstrates basic JavaScript arrow functions and console logging.
```javascript
const hello=(n)=>{
    console.log(`Hello ${n}`);
}
hello("Ash");
```

### `data.js`
Creates and exports a custom module containing data arrays.
```javascript
module.exports={names,age};
```

### `module.js`
Shows how to import custom modules and use built-in Node.js modules (like `os`).
```javascript
const names=require('./data');
const os=require('os');
```

### `Filesys.js`
Demonstrates asynchronous file system operations:
- **mkdir()**: Create directories
- **writeFile()**: Write content to files
- **readFile()**: Read file content
- **unlink()**: Delete files
- **rmdir()**: Remove directories
- **existsSync()**: Check if files/folders exist

## 🚀 Usage

### Run Individual Files
```bash
node hello.js          # Run hello function
node module.js         # Import and use custom module
node Filesys.js        # File system operations demo
```

## 🔑 Key Concepts Covered

- **Modules**: `require()` and `module.exports`
- **File System**: Asynchronous file operations with callbacks
- **Core Modules**: Using Node.js built-in modules (fs, os)
- **Arrow Functions**: Modern JavaScript syntax
- **Callbacks**: Async pattern with error handling

## 💡 Learning Notes

- File system operations are **asynchronous** by default
- Always check for errors in callbacks
- Use `existsSync()` to prevent errors when checking file/folder existence
- Module exports allow code reusability across files

## 📖 Resources

- [Node.js File System Documentation](https://nodejs.org/api/fs.html)
- [Node.js OS Module](https://nodejs.org/api/os.html)
- [CommonJS Modules](https://nodejs.org/api/modules.html)

## ✅ Prerequisites

- Node.js installed (v12 or higher)
- Basic JavaScript knowledge

---

**Part of**: Fullstack Journey Learning Path  
**Created**: Day 22  
**Purpose**: Understanding Node.js fundamentals
