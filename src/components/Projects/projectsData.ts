export interface Project {
  title: string;
  short_description: string;
  long_description: string;
  skills: string[];
  topSkills: string[];
  date: Date;
  githubUrl: string;
  deployedUrl: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'Minesweeper',
    short_description: 'A clone of the classic game, minesweeper.',
    long_description:
      'A browser based clone of minesweeper. Players can choose between 4 levels of difficulty and customize game settings.',
    skills: [
      'HTML5 Canvas',
      'Object Oriented Programming',
      'Game Development',
      'HTML / CSS',
      'JavaScript',
      'Front-End',
    ],
    topSkills: ['Front-End', 'HTML5 Canvas', 'Object Oriented Programming'],
    date: new Date(2021, 0, 20),
    githubUrl: 'https://github.com/josh-W42/minesweeper',
    deployedUrl: 'https://josh-w42.github.io/minesweeper/',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1618349995/explosion_urchi5.png',
  },
  {
    title: 'Crane',
    short_description: 'A full stack social media application.',
    long_description:
      'Crane is a full stack social media application. Users can create posts and flocks (groups) and then comment on posts. My inspiration for making this project was facebook and reddit',
    skills: [
      'Express',
      'Object Relational Mapper (ORM)',
      'Sequelize.js',
      'SQL',
      'PostgreSQL',
      'Authorization',
      'HTML / CSS',
      'JavaScript',
      'Bootstrap.js',
      'Embedded JavaScript (EJS)',
      'APIs',
      'Node.js',
      'Full-Stack',
    ],
    topSkills: ['Full-Stack', 'Express', 'Authorization'],
    date: new Date(2021, 1, 18),
    githubUrl: 'https://github.com/josh-W42/crane',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1613426540/crane_logo_xzo7cm.png',
  },
  {
    title: 'Munch',
    short_description: 'A full stack food delivery application.',
    long_description:
      'Munch is a full stack web app designed to mimic the likes of Uber Eats and Postmates. I worked on this project alongside my General Assembly classmates, Nelson Valerio and Andrew Bith. Some examples of features I worked on were the feed page, account settings page, and the use of a Trie for search bar autocompletion.',
    skills: [
      'Express',
      'Object Document Mapper (ODM)',
      'Mongoose.js',
      'MongoDB',
      'React.js',
      'JavaScript',
      'Material-UI',
      'Authorization',
      'APIs',
      'Node.js',
      'MERN Stack',
      'Data Structures and Algorithms',
      'Full-Stack',
    ],
    topSkills: ['Full-Stack', 'MERN Stack', 'Data Structures and Algorithms'],
    date: new Date(2021, 2, 15),
    githubUrl: 'https://github.com/josh-W42/munch-frontend',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1615689944/possibleLogo_nbghky.svg',
  },
  {
    title: 'React Map',
    short_description: 'A google maps local map in react.',
    long_description:
      "This react map utilizes the google maps places and javascript api to display a map of the user's current location. Users can search and filter local venues and places of interest.",
    skills: [
      'React.js',
      'JavaScript',
      'APIs',
      'HTML / CSS',
      'Google Maps API',
      'Front-End',
    ],
    topSkills: ['Front-End', 'React.js', 'APIs'],
    date: new Date(2018, 7, 15),
    githubUrl: 'https://github.com/josh-W42/Neighborhood-Map-Project',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1618354089/map-min_cgscdw.jpg',
  },
  {
    title: 'Arcade Game',
    short_description: 'A 2D browser based game similar to Frogger.',
    long_description:
      'This game was designed to mimic the classic Frogger game.',
    skills: [
      'HTML5 Canvas',
      'HTML / CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap.js',
      'Game Development',
      'Object Oriented Programming',
      'Front-End',
    ],
    topSkills: ['Front-End', 'HTML5 Canvas', 'Object Oriented Programming'],
    date: new Date(2018, 5, 23),
    githubUrl: 'https://github.com/josh-W42/frontend-nanodegree-arcade-game',
    deployedUrl: 'https://josh-w42.github.io/frontend-nanodegree-arcade-game/',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1618356387/arcade-min_qsxtn6.jpg',
  },
  {
    title: 'Concentration',
    short_description: 'A browser based memory game.',
    long_description:
      'This is small memory game designed after a game by the same. Players flip cards to find pairs as fast as they can to get a better score.',
    skills: [
      'HTML / CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap.js',
      'Game Development',
      'Front-End',
    ],
    topSkills: ['Front-End', 'HTML / CSS', 'JavaScript'],
    githubUrl: 'https://github.com/josh-W42/Memory-Game',
    deployedUrl: 'https://josh-w42.github.io/Memory-Game/',
    date: new Date(2018, 4, 31),
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1618355192/brain_cvaw7j.jpg',
  },
  {
    title: 'TaskShare',
    short_description: 'A real-time productivity app.',
    long_description:
      'TaskShare is a full stack team  communication and productivity application. It allows members to communicate in real time using the socket.io javascript library. Inspired by productivity apps like Slack and GroupMe. Still in development, however a demo that enables real-time chat is available.',
    skills: [
      'Material-UI',
      'Express',
      'Object Document Mapper (ODM)',
      'Mongoose.js',
      'MongoDB',
      'Authorization',
      'React.js',
      'JavaScript',
      'Node.js',
      'MERN Stack',
      'Socket.io',
      'Full-Stack',
    ],
    topSkills: ['Full-Stack', 'Socket.io', 'MERN Stack'],
    date: new Date(2021, 3, 10),
    githubUrl: 'https://github.com/josh-W42/taskshare-frontend',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/v1618357269/stil-vdaJJbls3xE-unsplash_q00wl5.jpg',
  },
  {
    title: 'ChatUp',
    short_description: 'A real time chat application.',
    long_description:
      'ChatUp is a real-time chat application built using React, Redux, and Typescript on the front-end and Express and Typescript on the backend API. Currently using Firebase real-time database and hosting.',
    skills: [
      'Material-UI',
      'Express.js',
      'Authentication',
      'React.js',
      'Redux',
      'Typescript',
      'Node.js',
      'Firebase',
      'Socket.io',
      'Full-Stack',
    ],
    topSkills: ['Full-Stack', 'React', 'Typescript'],
    date: new Date(2021, 6, 1),
    githubUrl: 'https://github.com/josh-W42/chatup',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/sn5kdn9hk7yekj4ieagw',
  },
  {
    title: 'Infinite Jump Game',
    short_description: 'A mobile game built in Godot',
    long_description:
      'I wanted to try something new so I explored how to create a 2D "infinite jumping" type of mobile game where the player is constantly climbing vertically.',
    skills: [
      'Game Development',
      'Godot Engine',
      'GDscript',
      'Mobile',
      'Scripting',
      'Level Design',
      '2D Game',
      'Coursework',
    ],
    topSkills: ['Game Dev', 'Mobile', 'Godot'],
    date: new Date(2024, 5, 2),
    githubUrl: 'https://github.com/josh-W42/infinite-jumper-clone',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/ofktvprfysjvhz99p2qv',
  },
  {
    title: 'Social Media Discord Bot',
    short_description: 'A node.js server that houses a discord bot',
    long_description:
      'The goal of this project was to create a discord bot that would post to a discord server when new social media data was detected. I wanted to also learn about self hosting so I configured it to run on my Raspberry Pi and run it from there.',
    skills: [
      'Experimentation',
      'Node.JS',
      'Discord API',
      'YouTube API',
      'Automation',
      'Backend',
      'TypeScript',
    ],
    topSkills: ['Backend', 'Node.JS', 'TypeScript'],
    date: new Date(2024, 4, 2),
    githubUrl: 'https://github.com/josh-W42/discord_social_bot',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/pp0taolc7sdm482pxyvx',
  },
  {
    title: 'Martian Mike',
    short_description: 'A 2D Platforming Side Scrolling Game.',
    long_description:
      'Just me trying out game dev in Godot! The goal of this game is to reach a finish line and avoid obstacles of increasing difficulty.',
    skills: [
      'Game Development',
      'Godot Engine',
      'GDscript',
      'Scripting',
      'Side Scrolling',
      'Level Design',
      '2D Game',
      'Coursework',
    ],
    topSkills: ['Game Dev', 'Godot', '2D'],
    date: new Date(2024, 4, 30),
    githubUrl: 'https://github.com/josh-W42/martian_mike_training',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/q3dpspwcqeb0esdybmqv',
  },
  {
    title: '3D Portfolio',
    short_description:
      '*Work in Progress* A Three.JS portfolio that showcase my projects in Blender.',
    long_description:
      'I spent a fair amount of time this year learning about blender and how to model, sculpt, and render 3D scenes + models. So I wanted to build a 3D portfolio to showcase my work.',
    skills: [
      'React.js',
      'Three.js',
      '3D Modeling',
      'Front-End',
      'Blender',
      'Experimentation',
    ],
    topSkills: ['React.js', 'Three.js', 'Front-end'],
    date: new Date(2024, 6, 30),
    githubUrl: '',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/j0kvkyo4zmur4oyxhzlc',
  },
  {
    title: 'ShadeShift',
    short_description:
      '*Work in Progress* A color palette generator inspired by the awesome Coolors.co.',
    long_description:
      'The goal of this project was to dive into color theory and learn how to solve some interesting problems, like image color extraction and color palette discovery.',
    skills: [
      'Full Stack',
      'Python',
      'Flask',
      'React.js',
      'TypeScript',
      'UI / UX',
      'Responsive Web Design',
      'Material UI',
      'OpenCV',
      'Scikit',
    ],
    topSkills: ['Python', 'React', 'TypeScript', 'Full Stack'],
    date: new Date(2024, 9, 30),
    githubUrl: '',
    deployedUrl: '',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/cpr9tkwvdlhqigl0nyw8',
  },
  {
    title: 'Pixel Art Maker',
    short_description: 'A website where users can create pixel art.',
    long_description:
      'This was one of the first few projects I created. It allows users to create a grid of their choosing and then make simple pixel art with limited tools.',
    skills: ['JavaScript', 'Front-End', 'HTML', 'CSS', 'git'],
    topSkills: ['Front-End', 'HTML/CSS', 'JavaScript'],
    date: new Date(2018, 5, 30),
    githubUrl: 'https://github.com/josh-W42/Pixel-Art-Maker',
    deployedUrl: 'https://josh-w42.github.io/Pixel-Art-Maker/',
    imageUrl:
      'https://res.cloudinary.com/dom5vocai/image/upload/f_auto,q_auto/ujo3hlp4p9hazxyrygav',
  },
];
