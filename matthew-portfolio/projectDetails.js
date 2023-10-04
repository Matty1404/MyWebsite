export const AllProjects = [
    {
      title: "Chess and AI",
      image: "./chess.png",
      group: false,
      description: `I created the game of chess from scratch in java. I learnt how to use the JSWING library to create a GUI for the game. After implementing the game, I created the AI, learning about different algorithms and heuristics to optimise it.
      
      You also get the option to play with a friend instead of the AI. The game is new player friendly, not allowing them to make illegal moves, as well as showing them what moves are available to make by highlighting the squares which the chosen piece can move to.
      
      I learnt about mini-max trees and Alpha-Beta pruning for this project. This was a step up from my A level project which also involved chess, except I did not fully utilise the power of object oriented programming.`,
      tags: ["Java", "AI"],      
    },
    {
      title: "2D Pokemon",
      image: "/pokemonGame.png",
      group: false,
      description: "I started to attempt to recreate a basic pokemon game in Java where you can battle and catch pokemon, solve environmental puzzles and interact with objects.",
      tags: ["Java", "Game"], 
    },
    {
      title: "Discord bots",
      image: "/discordBot.png",
      group: false,
      description: `I sometimes create discord bots in my free time. Some examples of bots that I have created are a language filter bot and a adventure bot which allows the user to use emotes to control the character to get past puzzles in order to get to the end of the level.
      
      This skill become useful when I was working at Terra. Here I used my discord.py knowledge to help rebuild their support system. I created a new forum channel, where once a support ticket was complete, a member of Terra could run a command which would automatically filter all sensative infomation and post the useful resolution to the problem for everyone to see.`,
      tags: ["Python", "discord.py"], 
    },
    {
      title: "Optical Sheet Music Recogniser",
      image: "/sheetRecog.png",
      group: true,
      description: `Working in groups of 4, we created a software in C which takes in an image of sheet music, identifies where all the notes are, as well as if they are sharp or flat, and teaches you how to play it on a piano. This project was shortlisted as a top 10 project in our year group at Imperial College London.

      I worked on trying to develop the ANN from scratch and I designed and implemented the algorithm for identifying where each note was on the sheet. For this I had to work with arrays of pixels, breaking the problem into subproblems in order to create the algorithm.`,
      tags: ["C", "Tensorflow", "AI"],
    },
    {
      title: "Web-Football",
      image: "/web-football.png",
      group: false,
      description: "I created a game on the web which shoots footballs at you using JavaScript. It is your job as the player to save the balls using your real life hands. I used THREE.js to create the scene and tensorflow.js to track the users hands. I then translated the information given by the API into my game.",
      tags: ["JavaScript", "Three.js", "Tensorflow", "AI"],
    },
    {
      title: "Search Engine",
      image: "/web-crawler.png",
      group: false,
      description: `In kotlin, I created a simple search-engine which used a web crawler to search the web.It will return an index of each keyword and a list of all the sites which contain the keyword in order of how many times it was used. I added a max depth of websites to traverse so that it does not take a long time to run.`,
      tags: ["Kotlin", "web-scraping"],
    },
    {
      title: "ARM11 Emulator",
      image: "/rasbpie.png",
      group: true,
      description: `In a group of 4, we used C to create an emulator for a subset of the ARM11 instruction set architecture. We had to read data in from a binary file, create its own memory and run the program based on the instructions and data we read into memory.`,
      tags: ["C", "ARM11"],
    },
    {
      title: "ARM11 Assembler",
      image: "/assembler.png",
      group: true,
      description:`In a pair, we used C to create an assembler for a subset of the ARM11 instruction set architecture. We had to read a low level language and parse the words into a binary file which a raspberry pi could read. Instructions included branching, data tranfers (loading and storing data into and out of memory), data processing and more.`,
      tags: ["C", "ARM11"],
    },
    {
      title: "11+ Prep App",
      image: "/11plus.png",
      group: false,
      description: `In python, I created an 11+ prep app where a primary school child can train for their 11+. You could add your child to a database and test them on auto-generated tests. The scores are then stored into a database where you can see the childs progress over time.

      It test english and maths, where you can add and remove english words and their definitions that you would like your child to learn. There are also many games for the child to choose from such as hangman, a memory game (with words and definitions) and math puzzles.`,
      tags: ["Python", "MySQL", "Tkinter"],
    },
    {
      title: "Compiler for WACC language",
      image: "/compiler.png",
      group: true,
      description: `I was challenged to create a compiler for the WACC language using Rust, a language which I had no prior experience with. We were first tasked with creating syntax and semantic error checkers, which we split up into pairs to complete.
      
      We then had to convert our tokens into assembly code. Once we had finished that, we were tasked to choose from a vast variety of different extentions of varying difficulty. For the extentions, I personally tackled control flow analysis, constant propagation analysis and adding additional loop control statements to the language such as break, continue and for loops.
      
      Overall, we were told that our group completely broke the unofficial Imperial record for extensions completed`,
      tags: ["Rust", "Compiler"],
    },
    {
      title: "Bulk buy website",
      image: "/bulkbuy.png",
      group: true,
      description: `For this project, we were tasked with creating a product for real world people. Due to escessive food waste (especially of fruit and vegetables from wholesalers), we created an app which aimed to reduce food waste.
      
      The aim of this App was to encourage bulk buying between students. Students would be able to request what produce that they wanted to buy, and if enough people bought the produce, it would be discounted.
      
      For this project, I learnt how to use React and make endpoints using Flask, which allowed our application to communicate with the backend. I also learnt to use Firebase, which was were we stored all the data used for this project. We also communicated with real wholesalers to make sure that whatever we were creating would be viable to use`,
      tags: ["React", "Flask", "Firebase"],
    },
    {
      title: "Improved PintOS",
      image: "/pintos.png",
      group: true,
      description: `We were tasked with improving an operating system. We had to improve the PintOS scheduler, so that it was able to schedule threads based on the priority of the thread. We also had to allow the programs running on PintOS to interact with the OS via system calls. We also had to improve the systems virtual memory. This was an extremely difficult task which we had to perform using C. It involved a lot of understanding of how operating systems work, as well as a lot of teamwork`,
      tags: ["C", "OS", "Concurrency"],
    },
    {
      title: "Chase.io",
      image: "/chase.png",
      group: true,
      description: `This is a fun game which you play in the real world with your friends. It was inspired by Agar.io which we made in Unity. I learnt to use the Unity engine, as well as coding using C++. We had a lot of hickups on the way, such as difficulties working on different parts of projects at different times due to the overly confusing merge conflicts that Unity threw at us`,
      tags: ["C++", "Networking", "Game"],
    },
    // Add more project objects as needed
  ];