import React from "react";
import {
	FaAndroid, FaArrowsAlt,
	FaCookieBite, FaCss3, FaGit,
	FaGitlab, FaJs,
	FaLeaf,
	FaLinkedinIn, FaNetworkWired, FaSmileBeam,
	FaTableTennis, FaTachometerAlt, FaThermometerHalf,
	FaTools,
	FaUserCog
} from 'react-icons/fa';
import { FaGithub, FaCode, FaMobile, FaDesktop, FaLightbulb} from "react-icons/fa";
import {
	FaCss3Alt,
	FaLess,
	FaReact,
	FaJsSquare,
	FaSymfony,
	FaVuejs,
	FaCodeBranch,
	FaLinux,
	FaDocker,
	FaHtml5,
	FaPhp,
	FaDatabase,
	FaMagento,
	FaWordpress,
	FaBootstrap
} from 'react-icons/fa';

import bdbBlog from "../assets/images/portfolio/Refonte bdb Blog.png";
import bdbM1 from "../assets/images/portfolio/refonte bdb M1.png";
import jjM2 from "../assets/images/portfolio/jj refont M2.png";
import strapi from "../assets/images/portfolio/strapi restaurants.png";
import babylist from "../assets/images/portfolio/babylist.png";
import pickleball from "../assets/images/portfolio/pickleball.png";
import obesitaide from "../assets/images/portfolio/obesitaide.png";
import ciseaux from "../assets/images/portfolio/auxciseauxdenort.png";
import {FaEnvelope} from "react-icons/all";
export default {
	name : 'Nicolas SQUEREN',
	title: 'Développeur Web',
	birthday: '4 Juillet 1985',
	car: 'Permis B et A',
	email: 'nicolas.squeren@gmail.com',
	address: 'Nantes sud',
	phone: '06 61 57 10 76',
	socials: {
		email: {
			link: 'mailto:nicolas.squeren@gmail.com',
			text: 'Email',
			icon: <FaEnvelope className={'social-icon'}/>
		},
		linkedin: {
			link: 'https://www.linkedin.com/in/nicolas-squeren/',
			text: 'Linkedin',
			icon: <FaLinkedinIn className={'social-icon'}/>
		},
		github: {
			link: 'https://github.com/NicoDevWWW',
			text: 'Github',
			icon: <FaGithub className={'social-icon'}/>
		},
	},
	site_date: 'Janvier 2021',
	copyright: 'Designed and Develop by @me !',
	about_1:	"Je suis actuellement en contrat de professionnalisation Web-concepteur au sein de l entreprise Moulin-Roty en tant que développeur pour une License Développeur avec MyDigitalSchool alternance Nantes.\n",
	about_2: 		"J' interviens sur un parc de 7 sites internet pour de la maintenance, corrections de bugs.\n" + "Mais également pour du développement spécifique de modules personnalisés\n" + "de l'amélioration continue ou Refonte graphique total.\n",
	about_3: "Le plus gros projet de cette année 2021 est la refonte multisites sous Magento 2, avec une refonte totale du design en thèmes custom. Du développement de modules multisites Back et front.",
	about_4:	"Pour l' instant axé Front-End je travaille au quotidien pour augmenter mes compétences en Back-End.",
	about_5:	"Je travaille sur Magento 1 et 2, Wordpress. De par la formation j'approfondis mes compétences sur des nouvelles technologies (REACT Native, REACT JS, VUE JS, NODE JS ...)",
	about_6:	"De nature curieuse, je veille sur d'autres technologies au quotidien Headless, React, Vue-JS en autodidacte et sur mon temps personnel.",
	about_7:	"La formation chez MyDigitalSchool me permet de découvrir et de monter en compétences sur des technologies que je ne travaille pas en entreprise. En effet j’ai eu la chance de pouvoir développer des projets d’application Mobile en React Native, du Headless en VueJs et ReactJs, des projets web en Symfony.",
	experiences: [
		{
			title: 'Développeur Web',
			date: '2020',
			description:'Moulinroty (44) Refonte de 3 sites E-commerce avec migration sous Magento 2. Création de module, de configuration et refonte design thèmes custom en autonomie.',
		},
		{
			title: 'Développeur Web',
			date: '2018',
			description:'Moulinroty (44) Maintenance, évolutions fonctionelles et design de 4 sites internet E-commerce Magento B to C, B to B, 3 blogs et 1 site vitrine Wordpress.' ,
		},
		{
			title: 'Adjoint de direction restaurant ',
			date: '2018 - 2014',
			description:'Management, Gestion des services, du personnel et frais de gestion. Planning, formation, acceuil client.',
		},
	],
	educations: [
		{
			title: 'Bac + 3 Développeur Web / Mobile',
			date: '2020 -2021',
			lieu: 'MyDigitalSchool NANTES 44',
			description:'Formation en alternance Développeur Web et Application mobile, Programmation Objet. Framework Symfony, React Js et React Native, API, GraphQl, MongoDb, Docker. Gestion de projet   ',
		},
		{
			title: 'BAC +2 Développeur Web',
			date: '2018 - 2020',
			lieu: 'Cesi NANTES 44',
			description:'Formation en alternance développeur web HML5, CSS3, JAVASCRIPT, PHP. Maquettage et Webdesign Adobe XD figma. Méthode Agile SCRUM',
		},
		{
			title: 'Bac STT',
			date: '2005',
			lieu: 'Lycée LANNION 22',
			description:'Baccalauréat STT option commercial',
		},
	],
	services: [
		{
			title: 'Sport',
			description: 'Pickleball, Football',
			icon: <FaTableTennis/>
		},
		{
			title: 'Bricolage',
			description: 'DIY, Rénovation',
			icon: <FaTools/>
		},
		{
			title: 'Nature',
			description: 'Animaux, Plantes',
			icon: <FaLeaf/>
		},
		{
			title: 'Cuisine',
			description: 'En tout genre',
			icon: <FaCookieBite/>
		},
	],
	langages: [
		{
			title: 'LANGAGES',
			description: 'Les technos en front',
			array: [
				{
					title_front: 'HTML5',
					icon_front: <FaHtml5/>
				},
				{
					title_front: 'CSS',
					icon_front: <FaCss3Alt/>
				},
				{
					title_front: 'LESS',
					icon_front: <FaLess/>
				},
				{
					title_front: 'JAVASCRIPT',
					icon_front: <FaJsSquare/>
				},
				{
					title_front: 'PHP',
					icon_front: <FaPhp/>
				},
				{
					title_front: 'SQL',
					icon_front: <FaDatabase/>
				},
			],
		},
	],
	framework: [
		{
			title: 'FRAMEWORK et CMS',
			description: 'Les technos en framework',
			array: [
				{
					title_fram: 'REACTJS',
					icon_fram: <FaReact/>
				},
				{
					title_fram: 'SYMFONY',
					icon_fram: <FaSymfony/>
				},
				{
					title_fram: 'VUEJS',
					icon_fram: <FaVuejs/>
				},
				{
					title_fram: 'MAGENTO 1 & 2',
					icon_fram: <FaMagento/>
				},
				{
					title_fram: 'WORDPRESS',
					icon_fram: <FaWordpress/>
				},
				{
					title_fram: 'BOOTSTRAP',
					icon_fram: <FaBootstrap/>
				},

			],
		},
	],
	dev: [
		{
			title: 'DEVELOPPEMENT',
			description: 'Les technos en developpement',
			array: [
				{
					title_dev: 'GIT',
					icon_dev: <FaCodeBranch/>
				},
				{
					title_dev: 'DOCKER',
					icon_dev: <FaDocker/>
				},
				{
					title_dev: 'LINUX',
					icon_dev: <FaLinux/>
				},
				{
					title_dev: 'GitLab',
					icon_dev: <FaGitlab/>
				},
				{
					title_dev: 'Android',
					icon_dev: <FaAndroid/>
				},

			],
		},
	],
	softskills: [
		{
			title: 'MES ATOUTS',
			description: 'Les atouts de mon profil',
			array: [
				{
					title_softskills: 'Esprit d\'équipe',
					icon_softskills: <FaUserCog/>
				},
				{
					title_softskills: 'Autonome',
					icon_softskills: <FaTachometerAlt/>
				},
				{
					title_softskills: 'Bon relationnel',
					icon_softskills: <FaSmileBeam/>
				},
				{
					title_softskills: 'Gestion du stress',
					icon_softskills: <FaThermometerHalf/>
				},
				{
					title_softskills: 'Adaptabilité',
					icon_softskills: <FaArrowsAlt/>
				}
			],
		},
	],
	projects: [
		{
			tag: 'Headless',
			image: strapi,
			title:'Création d\'un site Headless ',
			caption: 'Développement d\'un site Headless avec Strapi, Back et Front.',
			date: 'Janvier 2021',
			description: 'Développement d\'un site en local sous Docker, CMS Strapi Headless avec Api pour afficher une liste de restaurants, authentification, register. Recherche de restaurants avec Graphql.',
			technos: [
				{icon : <FaReact/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaJs/>},
				{icon : <FaNetworkWired/>},
				{icon : <FaDocker/>},
			],
			links:[
				{link:'https://github.com/NicoDevWWW', text: "Voir le depot Git"},
			]
		},
		{
			tag: 'Symfony',
			image: babylist,
			title:'Création d\'une application Symfony ',
			caption: 'Développement d\'un site de création de liste de naissance, Back et Front.',
			date: 'Fevrier 2021',
			description: 'Développement d\'un site en local avec Symfony. Création de compte pour créer une liste de niassance, ajouter des objets dans la liste.',
			technos: [
				{icon : <FaSymfony/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
			],
			links:[
				{link:'https://github.com/nicolassqueren/babylist', text: "Voir le depot Git"},
			]
		},
		{
			tag: 'Wordpress',
			image: obesitaide,
			title:'Création d\'un site vitrine ',
			caption: 'Création d\'un site vitrine, Elementor, Stripe sous Wordpress coté Front.',
			date: 'Décembre 2020',
			description: 'Création d\'un thème personnalisé sous Wordpress pour un projet personnel. Site de coaching et accompagnement dans le domine de l\'obésité, vente de livrets et de programmes en ligne.' ,
			technos: [
				{icon : <FaWordpress/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
			],
			links:[
				{link:'https://www.obesitaide.fr', text: "Voir le site"},
			]
		},
		{
			tag: 'Magento 2',
			image: jjM2,
			title:'Création d\'un site E-commerce',
			caption: 'Développement d\'un thème personnalisé sous Magento 2 Equipe de 3 développeurs, en autonomie coté Front.',
			date: 'Juin 2020',
			description: 'Développement d\'un thème personnalisé sous Wordpress en respectant charte graphique et maquette fournis par la designer',
			technos: [
				{icon : <FaMagento/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaLess/>},
				{icon : <FaJsSquare/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
				{icon : <FaGit/>},
				{icon : <FaGitlab/>},
				{icon : <FaDocker/>},
			],
			links:[
				{link:'https://www.jeujouet.com', text: "Voir le site"},
			]
		},
		{
			tag: 'Wordpress',
			image: ciseaux,
			title:'Création d\'un site vitrine',
			caption: 'Création d\'un sitre vitrine avec un page builder, référencement, configuration hébergement.',
			date: 'Juin 2019',
			description: 'Création d\'un sitre vitrine pour de la coiffure à domicile avec un page builder, référencement, configuration hébergement.',
			technos: [
				{icon : <FaWordpress/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
			],
			links:[
				{link:'https://www.auxciseauxdenort.fr', text: "Voir le site"},
			]
		},
		{
			tag: 'Wordpress',
			image: pickleball,
			title:'Création d\'un site vitrine ',
			caption: 'Développement projet ECOLE Cési d\'un thème personnalisé sous Wordpress coté Front.',
			date: 'Mai 2019',
			description: 'Développement d\'un thème personnalisé sous Wordpress pour un projet de formation professionnel avec le Cesi. Une équipe de 3 personnes, un designer, un Webmarketing et moi en tant que développeur.',
			technos: [
				{icon : <FaWordpress/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
			],
			links:[
				{link:'https://www.pickleball44.fr', text: "Voir le site"},
			]
		},
		{
			tag: 'Wordpress',
			image: bdbBlog,
			title:'Refonte d\'un blog Wordpress',
			caption: 'Développement d\'un thème personnalisé sous Wordpress, Back et Front.',
			date: 'Janvier 2019',
			description: 'Développement d\'un thème personnalisé sous Wordpress en respectant charte graphique et maquette fournis par la designer',
			technos: [
				{icon : <FaWordpress/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
			],
			links:[
				{link:'https://www.bonhommedebois.com/blog/', text: "Voir le blog"},
			]
		},
		{
			tag: 'Magento 1 ',
			image: bdbM1,
			title:'Refonte thème Magento 1',
			date: 'Octobre 2018',
			caption: 'Développement front E-commerce bonhommedebois.com, création d\'un thème Magento 1.',
			description: 'Arrivée dans mon entreprise en alternance en Aout 2018, j\'ai eu la chance de pouvoir développer un thème personnalisé pour le CMS Magento 1.9.3.' ,
			technos: [
				{icon : <FaMagento/>},
				{icon : <FaHtml5/>},
				{icon : <FaCss3/>},
				{icon : <FaPhp/>},
				{icon : <FaDatabase/>},
				{icon : <FaJsSquare/>},
				{icon : <FaGit/>},
			],
			links:[
				{link:'https://www.bonhommedebois.com/', text: "Voir le Site"},
			]
		}

	]


}
