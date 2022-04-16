import {FaLinkedin , FaGithubSquare , FaMailBulk , FaNodeJs , FaReact , FaServer } from 'react-icons/fa'
import bachImg  from './bachelor.jpg'
import mastImg  from './masterr.jpg'
import portfolioImg from './projectsImgs/portfolio.JPG'
import todotasksImg from './projectsImgs/todotasks.JPG'
import todotasksImgFront from './projectsImgs/todotasksinterface.JPG'
import tasksManagement from './projectsImgs/tasksManagement.JPG'


export const links = [
    {
        id : 1,
        text : 'home',
        url : '/'
    },
    {
        id : 2,
        text : 'about',
        url : '/about'
    },
    {
        id : 3,
        text : 'projects',
        url : '/projects'
    },
    {
        id : 4,
        text : 'contact',
        url : '/contact'
    },
]

export const socialProfiles = [
    {
        id : 1,
        link : 'https://www.linkedin.com/in/zakarya-nabil-boudiaf-510b1a181/',
        icon : <FaLinkedin />
    },
    {
        id : 2,
        link : 'https://github.com/zakaryaboudiaf',
        icon : <FaGithubSquare />
    },
    {
        id : 3,
        link : 'mailto:zakarya.boudiaf.igee@gmail.com',
        icon : <FaMailBulk />
    }
]

export const services = [
    {
        id : 1,
        title : 'Back-end Web development (RESTful APIs)',
        descreption : "Building reliable server-side functions (APIs) that helps browsers and front-end applications communicate with the databases by storing, reading, deleting, and updating data or information to/from the databases. Using the core functionality of Nodejs, Mongo DB, and express framework.",
        icon : <FaNodeJs />
    },
    {
        id : 2,
        title : 'Front-end Web development (Web App Interfaces)',
        descreption : "Building reliable and responsive client-side functions (web apps and websites). That visualize data processed by servers and APIs and leverage content to various endpoint devices. Using HTML, CSS, JavaScript, and DOM. And the core functionality of React framework",
        icon : <FaReact />
    },
    {
        id : 3,
        title : 'Computer network Administration',
        descreption : "Planning and coordinating the design, installation, and connectivity of computers and network systems to ensure the stable operation of the organization’s IT assets. This includes developing, configuring, maintaining, supporting, and optimizing all new and existing network hardware, software, and communication links.",
        icon : <FaServer />
    }
]

export const skills = [
    {
        id : 1,
        skill : 'Computer Networks',
    },
    {
        id : 2,
        skill : 'Python',
    },
    {
        id : 3,
        skill : 'NodeJs',
    },
    {
        id : 4,
        skill : 'Express Framework',
    },
    {
        id : 5,
        skill : 'React Framework',
    },
    {
        id : 6,
        skill : 'JavaScript',
    },
    {
        id : 7,
        skill : 'Html',
    },
    {
        id : 8,
        skill : 'CSS',
    },
    {
        id : 9,
        skill : 'SQL databases',
    },
    {
        id : 10,
        skill : 'NoSQL databases',
    },

]

export const certifications = [
    {
        id : 1,
        title : 'Cisco Certification Network Academy',
        subtitle : 'Introduction to Networks',
        abrtitle : 'CCNA1-v7',
        date : "23 May 2020",
        academyName : "Ecole de Formation ELYACINE, Boumerdas, Algeria.",
        instructor : "Ad MOHAMMED-SAHNOUN",
        competences : [
            {
                id : 1,
                data : "Configure switches and end devices to provide access to local andremote network resources.",
            },
            {
                id : 2,
                data : "Explain how physical and data link layer protocols support the operationof Ethernet in a switched network.", 
            },
            {
                id : 3,
                data : "Configure routers to enable end-to-end connectivity between remotedevices.", 
            },
            {
                id : 4,
                data : "Create IPv4 and IPv6 addressing schemes and verify networkconnectivity between devices", 
            },
            {
                id : 5,
                data : "Explain how the upper layers of the OSI model support networkapplications.",
            },
            {
                id : 6,
                data : "Configure a small network with security best practices.",
            },
            {
                id : 7,
                data : "Troubleshoot connectivity in a small network."
            },   
        ]
    },
    {
        id : 2,
        title : 'Cisco Certification Network Academy',
        subtitle : 'Switching, Routing, and Wireless Essentials',
        abrtitle : 'CCNA2-v7',
        date : "9 Sep 2020",
        academyName : "Ecole de Formation ELYACINE, Boumerdas, Algeria.",
        instructor : "Ad MOHAMMED-SAHNOUN",
        competences : [
            {
                id : 1,
                data : "Configure VLANs and Inter-VLAN routing applying security bestpractices."
            },
            {
                id : 2,
                data : "Troubleshoot inter-VLAN routing on Layer 3 devices.",
            },
            {
                id : 3,
                data : "Configure redundancy on a switched network using STP andEtherChannel.",
            },
            {
                id : 4,
                data : "Troubleshoot EtherChannel on switched networks.",
            },
            {
                id : 5,
                data : "Explain how to support available and reliable networks using dynamic addressing and first-hop redundancy protocols.",
            },
            {
                id : 6,
                data : "Configure dynamic address allocation in IPv6 networks.",
            },
            {
                id : 7,
                data : "Configure WLANs using a WLC and L2 security best practices.",
            },
            {
                id : 8,
                data : "Configure WLANs using a WLC and L2 security best practices.",
            },
            {
                id : 9,
                data : "Configure switch security to mitigate LAN attacks.",
            },
            {
                id : 10,
                data : "Configure IPv4 and IPv6 static routing on routers.",
            }
             
        ]
    },
    {
        id : 3,
        title : 'Cisco Certification Network Academy',
        subtitle : 'Enterprise Networking, Security, and Automation',
        abrtitle : 'CCNA3-v7',
        date : "12 Apr 2021",
        academyName : "Ecole de Formation ELYACINE, Boumerdas, Algeria.",
        instructor : "Ad MOHAMMED-SAHNOUN",
        competences : [
            {
                id : 1,
                data : "Configure single-area OSPFv2 in both point-to-point and multiaccessnetworks.",
            },
            {
                id : 2,
                data :  "Explain how to mitigate threats and enhance network security usingaccess control lists and security best practices.",
            },  
            {
                id : 3,
                data : "Implement standard IPv4 ACLs to filter traffic and secure administrativeaccess.",
            },  
            {
                id : 4,
                data : "Configure NAT services on the edge router to provide IPv4 addressscalability.", 
            },  
            {
                id : 5,
                data : "Explain techniques to provide address scalability and secure remoteaccess for WANs.",
            },  
            {
                id : 6,
                data : "Explain how to optimize, monitor, and troubleshoot scalable networkarchitectures.",
            },  
            {
                id : 7,
                data : "Explain how networking devices implement QoS.", 
            },  
            {
                id : 8,
                data : "Implement protocols to manage the network.",
            },  
            {
                id : 9,
                data : "Explain how technologies such as virtualization, software definednetworking, and automation affect evolving networks.",
            },       
        ]
    },
    
]

export const education = [
    {
        id : 1,
        degree : 'Bachelor Degree',
        title : "Electrical and Electronics Engineering",
        school : "Institute of Electrical and Electronics Engineering, Boumerdas University, Algeria",
        period : "Sept 2016 – Jun 2019",
        schoolwebsite : "http://igee.univ-boumerdes.dz/",
        image : bachImg,  
    },
    {
        id : 2,
        degree : 'Master Degree',
        title : "Computer Engineering",
        school : "Institute of Electrical and Electronics Engineering, Boumerdas University, Algeria",
        period : "Sept 2019 – Sept 2021",
        schoolwebsite : "http://igee.univ-boumerdes.dz/",
        image : mastImg 
    }
]


export const projects = [
    {
        id : 1,
        name : "Portfolio",
        appType : ["front-end"],
        codeUrl : "https://github.com/zakaryaboudiaf/portfolio",
        deployedUrl : "https://zakarya-portfolio.netlify.app",
        image : portfolioImg,
        tools : [
            {
                id : 1,
                name : "React"
            },
            {
                id : 2,
                name : "CSS"
            },
        ]

    },
    {
        id : 2,
        name : "ToDoTasks API",
        appType : ["back-end"],
        codeUrl : "https://github.com/zakaryaboudiaf/to-do-tasks-api",
        deployedUrl : "https://to-do-tasks-api.herokuapp.com/api-docs/",
        image : todotasksImg,
        tools : [
            {
                id : 1,
                name : "NodeJS"
            },
            {
                id : 2,
                name : "Express Framework"
            },
            {
                id : 3,
                name : "Mongo DB"
            },
        ]

    },
    {
        id : 3,
        name : "ToDoTasks List Front-End",
        appType : ["front-end"],
        codeUrl : "https://github.com/zakaryaboudiaf/to-do-tasks-front-end",
        deployedUrl : "https://to-do-tasks-list.netlify.app/",
        image : todotasksImgFront,
        tools : [
            {
                id : 1,
                name : "React"
            },
            {
                id : 2,
                name : "CSS"
            }
        ]

    },
    {
        id : 4,
        name : "Tasks Management",
        appType : ["front-end" , "back-end"],
        codeUrl : "https://github.com/zakaryaboudiaf/Tasks-Management",
        deployedUrl : "https://tasks-management.netlify.app/",
        image : tasksManagement,
        tools : [
            {
                id : 1,
                name : "React"
            },
            {
                id : 2,
                name : "CSS"
            },
            {
                id : 3,
                name : "NodeJS"
            },
            {
                id : 4,
                name : "Express Framework"
            },
            {
                id : 5,
                name : "Mongo DB"
            },
        ]
    },
]