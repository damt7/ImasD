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
                about: 'Acerca de Nosotros',
                services: 'Servicios',
                clients: 'Clientes',
                contact: 'Contactenos'
            },
            submenu: {
                misionVision: 'Mision y Vision',
                technologies: 'Tecnologías',
                alliances: 'Alianzas',
                development: 'Desarrollo a la medida',
                factory: 'Fabrica de software',
                training: 'Capacitaciones',
                consulting: 'Consultoria',
                architectures: 'Desarrollo de arquitecturas',
                AboutUs: 'Acerca de Nosotros'
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="slides-es">
        slides: {
            title: {
                quality: 'Calidad y Estilo',
                whyWeb: '¿Por qué web?',
                tecnology: 'Tecnología de Punta'
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
                    metodology: 'Nuestra Metodología',
                    appModern: 'Aplicaciones Modernas',
                    changeParadigms: 'Cambiando Paradigmas'
                },
                content: {
                    metodology: 'En I+D Soluciones Informáticas trabajamos \n\
                    de manera continua y ágil, conozca un poco más de como \n\
                    aplicamos nuestras metodologías y filosofías.',
                    appModern: 'Entérese porque su empresa debe de adquirir una \n\
                    aplicación web para llevar sus procesos administrativos y\n\
                    operacionales, aquí le contamos cuales son las ventajas \n\
                    de tenerlas en su negocio.',
                    changeParadigms: 'En I+D Soluciones informáticas trabajamos \n\
                    todos los días para cambiar los aspectos comunes del desarrollo \n\
                    tradicional y ofrecer soluciones de mejor calidad haciendo uso\n\
                    de la creatividad de nuestro grupo de trabajo.'
                },
                thumbsPages: {
                    metodology: {
                        title: {
                            agilDevelopment: 'Desarrollo de Software Agil'
                        },
                        subtitle: {
                            objetives: 'Objetivos'
                        },
                        content: {
                            objetives: {
                                0: 'Incorporar al cliente como un actor más \n\
                                en el equipo de desarrollo.',
                                1: 'Dar respuesta efectiva al cambio.',
                                2: 'Resalta la entrega rápida del software \n\
                                operativo sujeta a cambios hechos por el cliente \n\
                                y le resta importancia a los productos de trabajo \n\
                                intermedios.',
                                3: 'Estimular las estructuras, promoviendo \n\
                                la actitud positiva y la comunicación eficiente \n\
                                en el grupo de desarrollo.'
                            },
                            agilDevelopment: {
                                0: 'El desarrollo basado en metodologías ágiles \n\
                                representa una opción razonable a la ingeniería \n\
                                convencional para ciertas clases de software y \n\
                                algunos tipos de proyección  de software. Esta \n\
                                metodología busca en principio la satisfacción \n\
                                del cliente y cumplir con el tiempo de entrega, \n\
                                además de una comunicación activa entre los \n\
                                desarrolladores y los clientes.',
                                1: 'En I + D soluciones informáticas trabajamos \n\
                                bajo la metodología XP (Xtreme Programming) y \n\
                                buscamos principalmente que nuestros clientes \n\
                                puedan evaluar el incremento del software de \n\
                                manera regular, proporcionándole retroalimentación \n\
                                tanto al equipo como al mismo cliente siendo así \n\
                                más flexibles al cambio.',
                                2: 'Las metodologías ágiles, definitivamente son \n\
                                mucho más afectivas a los modelos y metodologías \n\
                                convencionales, sin embargo, como están sujetas \n\
                                a los cambios del cliente estas sugieren tentar \n\
                                el tiempo y estimarlo, pero el costo del proyecto \n\
                                en general.'
                            }
                        }
                    },
                    appModern: {
                        title: {
                            appModern: 'Aplicaciones Web vs Aplicaciones Nativas'
                        },
                        subtitle: {
                            sistemAccess: 'Acceso al Sistema',
                            webApp: 'Aplicación Web',
                            nativeApp: 'Aplicación Nativa',
                            licenseApp: 'Aplicaciones Licenciadas',
                            environment: 'Ambiente',
                            systemCost: 'Costos del Sistema'
                        },
                        content: {
                            sistemAccess:{
                                webApp:{
                                    0:'Una aplicación web es accesible desde \n\
                                    cualquier parte si se cuenta con un navegador \n\
                                    y una simple conexión a internet. El usuario \n\
                                    ni siquiera debe de usar su propia computadora, \n\
                                    proponiendo esto como una principal ventaja en \n\
                                    cuanto a la accesibilidad y la portabilidad de \n\
                                    la aplicación, además la mayor parte de lugares \n\
                                    hoy en día cuentan con acceso a internet, por \n\
                                    lo que no se tendría que incurrir a gastos \n\
                                    adicionales.'
                                },
                                nativeApp:{
                                    0:'Si la aplicación tiene conectividad, los \n\
                                    usuarios deben acceder a conectarse a la red \n\
                                    local a menos que se adquieran aplicaciones \n\
                                    que gestionen el acceso remoto, estas aplicaciones \n\
                                    de por si son bastante complejas y costosas, y \n\
                                    ya que la aplicación se debe acceder desde un \n\
                                    alojamiento local o remoto, muchas de las \n\
                                    soluciones no dan la suficiente portabilidad \n\
                                    para accederlas desde cualquier parte.'
                                }
                            },
                            licenseApp:{
                                webApp:{
                                    0:'Las aplicaciones web pueden tener la seguridad \n\
                                    suficiente para restringir los usuarios según \n\
                                    se requiera, sin embargo, el número de usuarios \n\
                                    concurrentes está limitado únicamente por la \n\
                                    configuración del servidor Web y por la velocidad \n\
                                    que se obtenga del proveedor de internet y no \n\
                                    por el número de licencias por usuario, que ya \n\
                                    bien una licencia es bastante costosa, también \n\
                                    es bastante limitante. La aplicación web no \n\
                                    requiere de licencias y es totalmente accesible.'
                                },
                                nativeApp:{
                                    0:'Usualmente las licencias de aplicaciones \n\
                                    nativas deben pagarse sin importar la concurrencia \n\
                                    de uso del usuario y se tienen que comprar \n\
                                    licencias incluso para personas que rara vez \n\
                                    harán uso de las aplicaciones.\n\
                                    Las licencias de software generalmente son \n\
                                    costosas y no libran inversión.'
                                }
                            },
                            environment:{
                                webApp:{
                                    0:'El ambiente web es fácil de manipular, \n\
                                    basta con hacer pequeños releases de la \n\
                                    aplicación y debido a la filosofía de trabajo \n\
                                    de I+D Soluciones Informáticas que se enfoca \n\
                                    en el desarrollo vertical, hace que el \n\
                                    mantenimiento sea sencillo, fácil y versátil \n\
                                    a los cambios sin necesidad de pagar costos \n\
                                    exagerados.Los ambientes Alpha, Beta y producción, \n\
                                    proporcionan un entorno eficaz para asegurar \n\
                                    la calidad del desarrollo, donde el ambiente \n\
                                    comercial será el de producción, el cual es \n\
                                    fácil de interpretar, y fácil de usar.'
                                },
                                nativeApp:{
                                    0:'Mantener una aplicación nativa o de \n\
                                    escritorio es costoso, actualizar la red \n\
                                    local es responsabilidad de la misma empresa \n\
                                    y normalmente este tipo de actividades no son \n\
                                    la especialidad de la compañía por lo que recaen \n\
                                    a subcontratos de terceros lo que genera costo \n\
                                    adicional y dolores de cabeza.'
                                }
                            },
                            systemCost:{
                                webApp:{
                                    0:'Las aplicaciones web generalmente pueden \n\
                                    presentarse tanto como un servicio como un \n\
                                    desarrollo hecho a la medida de sus necesidades \n\
                                    corporativas, lo que permite comenzar con \n\
                                    aplicaciones que solventen sus problemas más \n\
                                    urgentes y robustecer el sistema después sin \n\
                                    necesidad de desembolsar de entrada una suma \n\
                                    grande de dinero. Las aplicaciones web tienen \n\
                                    la capacidad de evolucionar constantemente, \n\
                                    y gracias a la arquitectura y a las metodologías \n\
                                    de trabajo que manejamos en I+D Soluciones \n\
                                    Informáticas nos permiten evolucionar el \n\
                                    desarrollo de una manera eficiente sin tener \n\
                                    que dar pasos atrás y cumplir con los tiempos \n\
                                    estipulados previamente.'
                                },
                                nativeApp:{
                                    0:'Las licencias que se requieren para iniciar \n\
                                    el desarrollo de sopetón son costosas, muchas \n\
                                    veces pueden requerir de contratos de servicio \n\
                                    con porcentajes desembolsables anuales con respecto \n\
                                    al coste del sistema se use o no se use al aplicativo. \n\
                                    Además este tipo de software gracias a las metodologías \n\
                                    que se usan para su construcción se pagan por completo \n\
                                    en una sola entrega y los costos iniciales pueden \n\
                                    ser muy altos, lo cual puede suponer un riesgo \n\
                                    si en definitiva, el los requerimientos acordados, \n\
                                    el sistema no cumple con sus necesidades.'
                                }
                            }
                        }
                    },
                    changeParadigms: {
                        title: {
                            changeParadigms: 'Cambiando Paradigmas'
                        },
                        subtitle: {},
                        content: {
                            changeParadigms: {
                                0: 'Actualmente la mayoría de empresas activas \n\
                                en el mercado de software utilizan conceptos, \n\
                                plataformas y herramientas convencionales y \n\
                                privadas porque estas ofrecen soluciones \n\
                                corporativas específicas y habituales dependiendo \n\
                                del tipo de problema, sin embargo, cuando las \n\
                                soluciones empresariales tienen un enfoque web, \n\
                                todas las tecnologías adquieren un peso importante \n\
                                según lo que se requiera.',
                                1: 'Generalmente el uso de estas tecnologías \n\
                                sube mucho el costo del proyecto y se termina \n\
                                pagando un costo elevado en el desarrollo, ¿pero \n\
                                porque no pensar en soluciones de igual o mejor \n\
                                calidad y a menor costo? En el mundo de los \n\
                                sistemas de información, normalmente el costo no \n\
                                está relacionado con la calidad. Actualmente las \n\
                                tecnologías OpenSource ofrecen soluciones \n\
                                empresariales mucho más versátiles que las que \n\
                                ofrecen las compañías que trabajan con tecnologías \n\
                                cerradas, que incluso son más difíciles de manipular.',
                                2: 'En I+D Soluciones informáticas contamos con \n\
                                un equipo especializado en problemas que den \n\
                                soluciones factibles a todo tipo de empresa \n\
                                desde los desarrollos a la medida hasta el \n\
                                mantenimiento del software, y trabajamos \n\
                                diariamente en dar enfoques escalables, duraderos \n\
                                y de calidad, haciendo de nuestras políticas \n\
                                nuestra misma filosofía de trabajo.',
                                3: 'Enfocamos y promovemos el uso de tecnologías \n\
                                OpenSource (abiertas) en las soluciones empresariales \n\
                                y los modelos arquitectónicos por capas, Trabajamos \n\
                                con paradigmas orientados a aspectos para darle a \n\
                                nuestro cliente la suavidad en la navegación y la \n\
                                rápida eficiencia de respuesta en las soluciones \n\
                                que le proporcionamos.',
                                4:'Vea más sobre nuestras tecnologías '
                            }
                        }
                    }
                }
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="about-es">
        about: {
            aboutUs: {
                title: {
                    aboutUs: 'Acerca de nosotros'
                },
                subtitle: {},
                content: {
                    aboutUs: {
                        0: 'I+D Soluciones informáticas es una empresa en \n\
                        formación constante, especializada en soluciones \n\
                        informáticas orientadas a la web tanto de Front-End \n\
                        como de Back-End de cualquier tipo.',
                        1: 'La empresa surge en los laboratorios informáticos de \n\
                        investigación de la universidad Cooperativa de Colombia \n\
                        en 2013 a raíz del vasto conocimiento adquirido en los \n\
                        procesos investigativos y de las alianzas con la industria \n\
                        que llevaron a conocer el mercado, reconociendo así un \n\
                        mercado saturado pero poco satisfecho.',
                        2: 'I + D Soluciones Informáticas nace del grupo de \n\
                        investigación SODA (Sistemas en operaciones y desarrollo \n\
                        aplicado) creado en el 2005 por el doctor en ingeniería \n\
                        Javier Darío Fernández con el propósito de hallar nuevos \n\
                        talentos interesados en la investigación y de la mano de \n\
                        una de las principales alianzas comerciales e investigativas \n\
                        como es IMOLKO.CORPORATION.',
                        3: 'El enfoque empresarial de I + D Soluciones Informáticas \n\
                        es proporcionar por medio de los sistemas de información \n\
                        desarrollados, soluciones viables, confiables y de calidad \n\
                        a los clientes que los soliciten, satisfaciendo así su \n\
                        necesidad fundamental en el sistema y una correcta incorporación \n\
                        y continuidad con sus procesos productivos.'
                    }
                }
            },
            mision: {
                title: {
                    mision: null
                },
                subtitle: {},
                content: {
                    mision: {
                    }

                }
            },
            vision: {
                title: {},
                subtitle: {},
                content: {}
            },
            technologies: {
                title: {},
                subtitle: {},
                content: {}
            },
            alliances: {
                title: {},
                subtitle: {},
                content: {}
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="services-es">
        services: {
            customDevelopment: {
                title: {},
                subtitle: {},
                content: {}
            },
            factory: {
                title: {},
                subtitle: {},
                content: {}
            },
            training: {
                title: {},
                subtitle: {},
                content: {}
            },
            consulting: {
                title: {},
                subtitle: {},
                content: {}
            },
            architecture: {
                title: {},
                subtitle: {},
                content: {}
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="customers-es">
        customers: {
            customers: {
                title: {},
                subtitle: {},
                content: {}
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
                clients: 'Customers',
                contact: 'Contact Us'
            },
            submenu: {
                misionVision: 'Mission and Vision',
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
                    appModern: null,
                    changeParadigms: null
                },
                content: {
                    metodology: null,
                    appModern: null,
                    changeParadigms: null
                }
            },
            thumbsPages: {
                metodology: {
                    title: {},
                    subtitle: {},
                    content: {}
                },
                appModern: {
                    title: {},
                    subtitle: {},
                    content: {}
                },
                changeParadigms: {
                    title: {},
                    subtitle: {},
                    content: {}
                }
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="about-en">
        about: {
            aboutUs: {
                title: {
                    aboutUs: null
                },
                subtitle: {},
                content: {
                    aboutUs: null
                }
            },
            mision: {
                title: {
                    mision: null
                },
                subtitle: {},
                content: {
                    mision: null
                }
            },
            vision: {
                title: {},
                subtitle: {},
                content: {}
            },
            technologies: {
                title: {},
                subtitle: {},
                content: {}
            },
            alliances: {
                title: {},
                subtitle: {},
                content: {}
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="services-en">
        services: {
            customDevelopment: {
                title: {},
                subtitle: {},
                content: {}
            },
            factory: {
                title: {},
                subtitle: {},
                content: {}
            },
            training: {
                title: {},
                subtitle: {},
                content: {}
            },
            consulting: {
                title: {},
                subtitle: {},
                content: {}
            },
            architecture: {
                title: {},
                subtitle: {},
                content: {}
            }
        },
        //</editor-fold>
        //<editor-fold defaultstate="collapsed" desc="customers-en">
        customers: {
            customers: {
                title: {},
                subtitle: {},
                content: {}
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
