
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'localhost:3000',
  title: 'JR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gerardo Jr Bolima',
  role: 'Software Developer',
  description:
    'As an enthusiastic programmer, I am committed to driving team success ' +
    'with my unwavering dedication to hard work and an exceptional eye to detail. ' +
    'My strong organization skills enable me to tackle challeges efficiently, ' +
    'ensuring that every project I touch is managed with precision. With a fervent desire to continuosly learn and grow, ' +
    'I am posed to make significant contributions to the IT industry and deliver outstanding results for the organization I represent. ' +
    'My motivation is not just to excel personally, but to elevate the collective performance of my team, ' +
    'leveraging my skills to foster an environment of excellence.',
  resume: '', 
  social: {
    facebook: 'https://facebook.com/bolima22',
    instagram: 'https://instagram.com/jrbo5',
    linkedin: 'https://linkedin.com/jrbolima',
    github: 'https://github.com/jrbolima',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Project 1',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const education = [
  {
    school : 'Eulogio "Amanag" Rodriguez Institute of Science and Technology',
    course : 'Bachelor of Science in Computer Engineering',
    year : '2014-2019'
  }

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#.NET',
  'MSSQL',
  'Oracle',
  'PHP',
  'API',
  'Kong',
  'Web Services and Middlewares',
  'Git',
]

const works = [
  // skills can be added or removed
  // if there are no works experience, Works section won't show up   
  {
    position: 'Systems Analyst/Programmer',
    company: 'CTBC Bank (Philippines) Corp.',
    yearsOfService: 'September 2023 - Present',
    tasks: [
      'Spearheaded API and Middleware Development as Technical Lead.',
      'Drove Application Leadership for API Module and Retail Internet Banking Middleware.',
      'Executed comprehensive Unit Testing to ensure robust software performance.',
      'Facilitated User Acceptance Testing, providing support to Business users.',
      'Developed SSIS Jobs tailored to business processes and application needs.'
    ],
  },
  {
    position: 'Software Developer',
    company: 'H2 Software Consulting Services, Inc. (Staff Augmented at CTBC Bank (Philippines) Corp.)',
    yearsOfService: 'March 2022 - September 2023',
    tasks: [
      'Expert in designing, building, and configuring applciations tailored to business requirements,',
      'Skilled in customizaing ATM Software solutions to enhance business operations.',
      'Proficient in executing comprehensice testing with ATM, VISA and BancNet transactions.',
      'Conducted meticulous unit testing for applications and authored user manuals.',
      'Assisted in developing test cases and facilitating User Accteptance Testing (UAT).',
      'Collaborated with business users and testers to ensure technical compatibility and user satisfaction.',
      'Managed ATM Switch configurations in test environments, including card creation and transaction log analysis.',
      'Experiences in API development for seamless system integration.'
    ],
  },
  {
    position: 'Junior Programmer',
    company: 'Covent Garden, Inc.',
    yearsOfService: 'August 2019 - March 2022',
    tasks: [
      'Design a desktop applications for Accounting Department, e.g., Billing System, AP Monitoring System, Biometrics Login and Sales Invoice with printing',
      'Assist employees whenever there are technical difficulties concerning computer hardware and software and assist senior developers.',
    ],
  },
  {
    position: 'IT Staff',
    company: 'Mitsubishi Hitachi Power System - Technical Services',
    yearsOfService: 'April 2018 - June 2018',
    tasks: [
      'Assist in defining requirements and designing applications to meet business process and application requirements as IT Staff for Software Development Team',
      'Assist Senior Developers.'
    ],
  }, 
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jrcastil.bolima@mail.com',
}

export { header, about, education, projects, skills, works, contact }
