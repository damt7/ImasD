/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('imasd.translate', []);

app.config(function($translateProvider) {

    var diccionario_es = {
        
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
                AboutUs: 'Quienes Somos'
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="slides-es">
        slides: {
            title: {
                quality: 'Calidad y Estilo',
                whyWeb: '¿Por qué web?',
                tecnology: 'Tecnologia de Punta'
            },
            content: {
                quality: 'La funcionalidad y el aspecto visual van de la mano, \n\
                            la facilidad de uso y la experiencia de usuario son prioridad.',
                whyWeb: 'Las soluciones empresariales que ofrecemos en la web son \n\
                          escalables, seguras, confiables, de calidad, personalizadas, flexibles y viables.',
                tecnology: 'En I+D Soluciones informáticas utilizamos tecnologías\n\
                            de vanguardia aplicadas a los estándares de calidad, escalabilidad y usabilidad.\n\
                            Además implementamos nuestros procesos con arquitecturas definidas y metodologías precisas.'
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="home-es">
        home: {
            thumbs: {
                title: {
                    metodology: 'Nuestra metodología',
                    appModern:'Aplicaciones Modernas'
                },
                content: {
                    metodology: 'En I + D Soluciones Informáticas trabajamos \n\
                    de manera continua y ágil, conozca un poco más de como \n\
                    aplicamos nuestras metodologías y filosofías.',
                    appModern:'Entérese porque su empresa debe de adquirir una \n\
                    aplicación web para llevar sus procesos administrativos y\n\
                    operacionales, aquí le contamos cuales son las ventajas y \n\
                    desventajas de tenerlas en su negocio.'
                }
            }
        }
        //</editor-fold>

    };

    var diccionario_en = {
        
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
                AboutUs: 'About Us'
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="slides-en">
        slides: {
            title: {
                quality: null,
                whyWeb: null,
                tecnology: null
            },
            content: {
                quality: null,
                whyWeb: null,
                tecnology: null
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="home-en">
        home: {
            thumbs: {
                title: {
                    metodology: null,
                    appModern:null
                },
                content: {
                    metodology: null,
                    appModern:null
                }
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
        $scope.idioma = key;
    };
});
