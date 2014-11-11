/*global angular */
var app = angular.module("kissApp", ['pascalprecht.translate']);
var menuText, projectText, teamText, quotesText, systemText, competitionText, partnersText, sposorsPlan, contact;

app.config(['$translateProvider', function ($translateProvider) {
  'use strict';
  $translateProvider.translations('fr', {
    'TITLE': 'Projet Simplicité',
    'MENU': menuText.FR,
    'PROJECT':  projectText.FR,
    'TEAM': teamText.FR,
    'QUOTES' : quotesText.FR,
    'SYSTEM' : systemText.FR,
    'COMPETITION' : competitionText.FR,
    'PARTNERS' : partnersText.FR,
    'SPONSORSPLAN' : sposorsPlan.FR,
    'CONTACT' : contact.FR
  });

  $translateProvider.translations('en', {
    'TITLE': 'Simplicity Project',
    'MENU' : menuText.EN,
    'PROJECT':  projectText.EN,
    'TEAM': teamText.EN,
    'QUOTES' : quotesText.EN,
    'SYSTEM' : systemText.EN,
    'COMPETITION' : competitionText.EN,
    'PARTNERS' : partnersText.EN,
    'SPONSORSPLAN' : sposorsPlan.EN,
    'CONTACT' : contact.EN
  });

  $translateProvider.preferredLanguage('fr');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
  'use strict';
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);

menuText = {
  'FR': {
    'ACCUEIL' : 'Accueil',
    'PROJET' : 'Projet',
    'EQUIPE' : 'Notre Équipe',
    'SYSTEM' : 'Système',
    'COMPETITION' : 'Compétition',
    'PARTENAIRES' : 'Partenaires',
    'CONTACT' : 'Nous joindre'
  },
  'EN': {
    'ACCUEIL' : 'Home',
    'PROJET' : 'Project',
    'EQUIPE' : 'Team',
    'SYSTEM' : 'Systeme',
    'COMPETITION' : 'Competition',
    'PARTENAIRES' : 'Partners',
    'CONTACT' : 'Contact us'
  }
};

projectText = {
  'FR': {
    'DESC' : 'K.I.S.S. de l\'Université de Sherbrooke est un projet étudiant d’aéronautique et d’avionique qui a pour but de participer à la compétition canadienne de drones autopilotés avec un système simple et efficace',
    'SECTION1' : {
      'TITLE' : 'Une équipe expérimentée',
      'DESC' : 'L\'équipe est constituée d\'étudiants d\'ingénierie finissants de l\'Université de Sherbrooke qui ont participé au projet VAMUdeS'
    },
    'SECTION2' : {
      'TITLE' : 'Un système simple',
      'DESC' : 'Le groupe a pour but de simplifier la conception et réduire les risques d\'erreurs en intégrant des produits fiables et disponibles sur le marché'
    },
    'SECTION3' : {
      'TITLE' : 'Fait avec passion',
      'DESC' : 'Le projet est propulsé par amour pour l\'ingénierie et le développement de véhicules autonomes aériens'
    },
    'SECTION4' : {
      'TITLE' : 'Des partenaires exemplaires',
      'DESC' : 'La réalisation de ce véhicule est uniquement possible grâce à l\'intérêt et à la générosité que portent nos commanditaires'
    }
  },
  'EN': {
    'DESC' : 'Desc',
    'SECTION1' : {
      'TITLE' : 'Title 1',
      'DESC' : 'Desc 1'
    },
    'SECTION2' : {
      'TITLE' : 'Title 2',
      'DESC' : 'Desc 2'
    },
    'SECTION3' : {
      'TITLE' : 'Title 3',
      'DESC' : 'Desc 3'
    },
    'SECTION4' : {
      'TITLE' : 'Title 4',
      'DESC' : 'Desc 4'
    }
  }
};


teamText = {
  'FR': {
    'TITLE' : 'Notre Équipe',
    'DESC' : 'Le groupe est constitué d\'étudiants en génie mécanique, électrique et informatique. Chaque membre de l\'équipe joue un rôle essentiel à la réussite du projet',
    'MEMBER1' : {
      'ROLESHORT' : 'Capitaine',
      'ROLE' : 'Capitaine',
      'DESC' : 'Étudiant en Génie électrique de la 57e promotion, Jacob a été impliqué dans le développement de drones à l\'Université de Sherbrooke pour plus de 2 ans où il a récolté de nombreuses victoires. Il a également participé au UAV Outback Challenge en Australie',
      'SKILL' : 'Il peut faire des PCBs plus vite que son ombre'
    },
    'MEMBER2' : {
      'ROLESHORT' : 'Imagerie',
      'ROLE' : 'Spécialiste Charge Utile',
      'DESC' : 'Étudiant en Génie informatique de la 56e promotion, il est passionné par tous les projets techniques. Il a été pendant plusieurs années dans le groupe de drones de l\'Université de Sherbrooke où son savoir-faire leur a permis de développer un système d\'imagerie révolutionnaire avec lequel il a gagné de nombreux prix',
      'SKILL' : 'Il crée des applications mobiles sans les mains'
    },
    'MEMBER3' : {
      'ROLESHORT' : 'Cartographie',
      'ROLE' : 'Spécialiste en cartographie',
      'DESC' : 'Étudiant en Génie informatique de la 57e promotion, il a fait des drones à l\'Université Laval avant de rejoindre le groupe de l\'Université de Sherbrooke et d\'y gagner les compétitions AUVSI et USC. Il a même géré le groupe qui a participé au UAV Outback Challenge',
      'SKILL' : 'Oui, il a vraiment un baccalauréat en physique'
    },
    'MEMBER4' : {
      'ROLESHORT' : 'Aéronautique',
      'ROLE' : 'Spécialiste en Aéronautique',
      'DESC' : 'Étudiant en Génie mécanique de la 57e promotion, il a créé les 2 dernières générations de drones de l\'Université de Sherbrooke. Son implication et les performances de ses avions ont apporté l\'Université vers des nouveaux sommets. Dans ses temps libres, il apprend à piloter avec les Forces canadiennes',
      'SKILL' : 'Il transforme le duct-tape et la colle en portance'
    },
    'MEMBER5' : {
      'ROLESHORT' : 'Systèmes Autonomes',
      'ROLE' : 'Spécialiste en Systèmes Autonomes',
      'DESC' : 'Étudiant en Génie informatique de la 56e promotion, il a été responsable des systèmes autonomes du groupe de drones de l\'Université de Sherbrooke pendant plus de 3 ans. Il a remporté la compétition AUVSI et réalisé un tour du chapeau à la compétition USC.e',
      'SKILL' : 'Il peut piloter un drone les yeux fermés'
    }
  },
  'EN': {
    'TITLE' : 'Our Team',
    'DESC' : 'The members are students in mechanical, electrical and computer engineering. They all play a vital role in the project',
    'MEMBER1' : {
      'ROLESHORT' : 'Captain',
      'ROLE' : 'Captain',
      'DESC' : 'Desc 1',
      'SKILL' : 'Skill 1'
    },
    'MEMBER2' : {
      'ROLESHORT' : 'Payload',
      'ROLE' : 'Payload',
      'DESC' : 'Desc 2',
      'SKILL' : 'Skill 2'
    },
    'MEMBER3' : {
      'ROLESHORT' : 'Payload',
      'ROLE' : 'Payload',
      'DESC' : 'Desc 3',
      'SKILL' : 'Skill 3'
    },
    'MEMBER4' : {
      'ROLESHORT' : 'Avionics',
      'ROLE' : 'Avionics',
      'DESC' : 'Desc 4',
      'SKILL' : 'Skill 4'
    },
    'MEMBER5' : {
      'ROLESHORT' : 'Autonomous Systems',
      'ROLE' : 'Autonomous Systems',
      'DESC' : 'Desc 5',
      'SKILL' : 'Skill 5'
    }
  }
};

quotesText = {
  'FR': {
    'QUOTE1' : {
      'TEXT' : 'Si voler un drone vous stresse, c\'est qu\'il vaut trop cher',
      'AUTHOR' : 'Simon W. Kirouac'
    },
    'QUOTE2' : {
      'TEXT' : 'Un système simple est un bon système',
      'AUTHOR' : 'Julien Huot'
    },
    'QUOTE3' : {
      'TEXT' : 'Voler un drone, c\'est prendre des selfies de vraiment loin',
      'AUTHOR' : 'Alexandre Boulay'
    }
  },
  'EN': {
    'QUOTE1' : {
      'TEXT' : 'If flying a drone stress you out, it\'s probably worth too much',
      'AUTHOR' : 'Simon W. Kirouac'
    },
    'QUOTE2' : {
      'TEXT' : 'A simple system is a good system',
      'AUTHOR' : 'Julien Huot'
    },
    'QUOTE3' : {
      'TEXT' : 'Taking pictures with a drones, it\'s like taking selfies from real far',
      'AUTHOR' : 'Alexandre Boulay'
    }
  }
};

systemText = {
  'FR': {
    'TITLE' : 'Notre Système',
    'DESC' : 'Simple, stupide et efficace',
    'PLANE' : {
      'TITLE' : 'Avion',
      'DESC' : 'En utilisant un petit avion commercial en foam, les décollages et les atterrissages en sont de beaucoup simplifiés. De plus, le foam facilite de beaucoup la modification et la réparation du fuselage. Ces avions sont peu coûteux et rapidement disponibles'
    },
    'AUTOPILOT' : {
      'TITLE' : 'Autopilote',
      'DESC' : 'Il y a suffisamment d\'autopilote Open Source pour ne pas avoir à en refaire un nouveau. Les communautés travaillant sur ces projets sont également d\'une grande aide en cas de problème. Les composantes sont généralement peu coûteuses tout en gardant la fiabilité des solutions commerciales'
    },
    'PAYLOAD' : {
      'TITLE' : 'Charge Utile',
      'DESC' : 'Les téléphones cellulaires sont suffisamment performants pour prendre des photos de très bonne résolution, les géolocaliser grâce au GPS intégré et les transmettre rapidement grâce à la connectivité 3G et WiFi. Ils sont également robustes et beaucoup moins dispendieux que les caméras professionnelles'
    },
    'ANALYSIS' : {
      'TITLE' : 'Analyse',
      'DESC' : 'L\'analyse au sol des images est réalisée par le logiciel d\'Agisoft. Celui-ci permet de facilement combiner les photos tout en améliorant la précision de chacune. L\'utilisation est simple et peu coûteuse'
    },
    'PERFORMANCE' : {
      'TITLE' : 'Performance',
      'DESC' : 'La simplicité du système réduit les risques dans la phase d\'intégration des multiples systèmes. Les séances de tests en sont grandement simplifiées et le système peu coûteux permet d\'avoir plusieurs systèmes fonctionnels en même temps. Le drone est également simple à comprendre et à utiliser pour des novices'
    }
  },
  'EN': {
    'TITLE' : 'Our Systems',
    'DESC' : 'Simple, Stupid and Efficient',
    'PLANE' : {
      'TITLE' : 'Airplane',
      'DESC' : 'DESC'
    },
    'AUTOPILOT' : {
      'TITLE' : 'Autopilot',
      'DESC' : 'DESC'
    },
    'PAYLOAD' : {
      'TITLE' : 'Payload',
      'DESC' : 'DESC'
    },
    'ANALYSIS' : {
      'TITLE' : 'Analysis',
      'DESC' : 'DESC'
    },
    'PERFORMANCE' : {
      'TITLE' : 'Performance',
      'DESC' : 'DESC'
    }
  }
};

competitionText = {
  'FR': {
    'TITLE' : 'Compétition canadienne',
    'DESC1' : 'Le but de la compétition est de promouvoir et de développer l\'expertise canadienne dans le développement de systèmes autonomes aériens',
    'DESC2' : 'La compétition est séparée en deux parties. La première consiste à la production d\'un rapport technique avant le 11 janvier 2015 et la deuxième partie consiste en une démonstration opérationnelle à Alma le 1-3 mai 2015'
  },
  'EN': {
    'TITLE' : 'Canadian Competition',
    'DESC1' : 'The goal of this competition is to promote the growth of the Canadian unmanned vehicule systems using real commercial challenges',
    'DESC2' : 'There are two parts to the competition. The first one is to write a technical report and the second one is to demonstrate the system in a real life simulation that will be in Alma on May 1st to 3rd 2015'
  }
};

partnersText = {
  'FR': {
    'TITLE' : 'Nos Partenaires',
    'DESC' : 'C\'est grâce à nos partenaires ci-dessous que nous pouvons réaliser ce projet!'
  },
  'EN': {
    'TITLE' : 'Our Partners',
    'DESC' : 'Without them, this project could not be possible!'
  }
};

sposorsPlan = {
  'FR': {
    'TITLE' : 'Plan de commandites',
    'DESC' : 'Un projet de cette envergure nécessite d’importantes ressources techniques, matérielles et financières',
    'BRONZE' : {
      'PRICE' : '500 $',
      'NAME' : 'Bronze'
    },
    'SILVER' : {
      'PRICE' : '1000 $',
      'NAME' : 'Argent'
    },
    'GOLD' : {
      'PRICE' : '2500 $',
      'NAME' : 'Or'
    },
    'ITEMS' : {
      'ITEM1' : 'Logo sur le site web',
      'ITEM2' : 'Logo sur documents promotionnels',
      'ITEM3' : 'Logo en petit sur vêtements d’équipe',
      'ITEM4' : 'Logo en petit sur l’avion',
      'ITEM5' : 'Logo sur vêtements d’équipe',
      'ITEM6' : 'Logo sur l’avion',
      'ITEM7' : 'Logo en grand sur vêtements d’équipe',
      'ITEM8' : 'Logo en grand sur l’avion'
    }
  },
  'EN': {
    'TITLE' : 'Sponsorship Plan',
    'DESC' : 'A projet of this size needs lots of ressources!',
    'BRONZE' : {
      'PRICE' : '500 $',
      'NAME' : 'Bronze'
    },
    'SILVER' : {
      'PRICE' : '1000 $',
      'NAME' : 'Silver'
    },
    'GOLD' : {
      'PRICE' : '2500 $',
      'NAME' : 'Gold'
    },
    'ITEMS' : {
      'ITEM1' : 'Logo on website',
      'ITEM2' : 'Logo on official documents',
      'ITEM3' : 'Small logo on team outfits',
      'ITEM4' : 'Small logo on the UAV',
      'ITEM5' : 'Logo on team outfits',
      'ITEM6' : 'Logo on the UAV',
      'ITEM7' : 'Big logo on team outfits',
      'ITEM8' : 'Big logo on the UAV'
    }
  }
};

contact = {
  'FR': {
    'TITLE' : 'Nous joindre',
    'DESC' : 'N\'hésitez pas à nous contacter!',
    'EMAILDESC' : 'Courriel',
    'PHONEDESC' : 'Téléphone'
  },
  'EN': {
    'TITLE' : 'Contact us',
    'DESC' : 'Send us messages! We read all of them',
    'EMAILDESC' : 'Email',
    'PHONEDESC' : 'Phone'
  }
};