/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('sodalabs.translate', []);

app.config(function($translateProvider) {

    var diccionario_es = {
                
        //Menu
        //<editor-fold defaultstate="collapsed" desc="Menu-es">
        menu: {
            navmenu: {
                home: 'Inicio',
                about: '¿Quienes Somos?',
                services: 'Servicios',
                products: 'Productos',
                clients: 'Clientes',
                contact: 'Contactenos'
            },
            submenu: {
                mission: 'Mision',
                vision: 'Vision',
                technologies: 'Tecnologias',
                alliances: 'Alianzas',
                development: 'Desarrollo a la medida',
                factory: 'Fabrica de software',
                training: 'Capacitaciones',
                consulting: 'Consultoria',
                architectures: 'Desarrollo de arquitecturas',
                products: 'Productos',
                activos: 'Activos'
            }
        }  
        //</editor-fold>
      

    };

    var diccionario_en = {
        
        //Menu
        //<editor-fold defaultstate="collapsed" desc="Menu-en">
        menu: {
            navmenu: {
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                products: 'Products',
                clients: 'Customers',
                contact: 'Contact Us'
            },
            submenu: {
                mission: 'Mission',
                vision: 'Vision',
                technologies: 'Technologies',
                alliances: 'Alliances',
                development: 'Custom development',
                factory: 'Software factory',
                training: 'Training',
                consulting: 'Consulting',
                architectures: 'Software architecture',
                products: 'Products',
                activos: 'Activos'
            }
        }
        //</editor-fold>
        
    };

    $translateProvider.translations('en', diccionario_en);
    $translateProvider.translations('es', diccionario_es);
    $translateProvider.preferredLanguage('es');
});

app.controller('languaje', function($scope, $translate) {
    $scope.idioma = 'es';
    $scope.changeLanguage = function(key) {        
        $translate.use(key);
        $scope.idioma=key;
    };
});
