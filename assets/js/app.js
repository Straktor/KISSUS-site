/*global angular */
var app = angular.module("kissApp", ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  'use strict';
  $translateProvider.translations('fr', {
    'TITLE': 'Projet Simplicité',
    'MENU' : {
      'ACCUEIL' : 'Accueil',
      'PROJET' : 'Projet',
      'EQUIPE' : 'Notre Équipe',
      'SYSTEM' : 'Système',
      'COMPETITION' : 'Compétition',
      'PARTENAIRES' : 'Partenaires',
      'CONTACT' : 'Nous joindre'
    }
  });

  $translateProvider.translations('en', {
    'TITLE': 'Simplicity Project',
    'MENU' : {
      'ACCUEIL' : 'Home',
      'PROJET' : 'Project',
      'EQUIPE' : 'Team',
      'SYSTEM' : 'Systeme',
      'COMPETITION' : 'Competition',
      'PARTENAIRES' : 'Partners',
      'CONTACT' : 'Contact us'
    }
  });

  $translateProvider.preferredLanguage('fr');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
  'use strict';
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);
