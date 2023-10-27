import ruby from './images/mockups/closeUp-pairImg-amber-ruby.jpg'
import em from './images/mockups/closeUp-pairImg-emerald-amber.jpg'
import ame from './images/mockups/closeUp-pairImg-amethyst-emerald.jpg'
import sapp from './images/mockups/closeUp-pairImg-sapphire-quartz.jpg'


const jellyGemsObj  = {
        amethyst : {
            name: 'Amethysts',
            id: 'Amethyst',
            description: 'Amethysts are thought to be a source of power and wisedom and are attatched to serinity, truyt and grace.',
            brief: 'Symbol of power, wisedom and serenity.',
            keyWords: ['power', 'wisedom', 'serenity', 'trust', 'grace'], 
            heroImg: '/static/media/Amethyst.8ee9d8c94f6b4a6d8a7f.jpg',
            pairImg:'/static/media/closeUp-pairImg-amethyst-emerald.7e42f3c7eb9ccd7390ff.jpg',
            pouchMockupImg: '../images/amerthyst/pouchMockupImg',

        }, 
        amber : {
            name: 'Amber',
            id: 'Amber',
            description: 'Amber is in fact tree resin that can range in from 30 to 90 minnion years old! This resin is generally found in ancient evergreen trees. Amber is the stone of courage, and has long been given to travellers to keep them safe on long journeys.', 
            brief: 'Symbol of courgage, safe travels and adventures.',
            keyWords: ['courage', 'travel', 'adventure', 'strength', 'feeling of safety', 'trust'],
            // heroImg: '/static/media/Amber.95c9b5f5fc2e06140515.jpg',
            heroImg: 'Amber.jpg',
            pairImg: '/static/media/closeUp-pairImg-emerald-amber.e9d78fa3faaffe3c8f2c.jpg',
            pouchMockupImg: '../images/amber/pouchMockupImg',
        },
        emerald : {
            name: 'Emeralds',
            id: 'Emerald',
            description: 'Throughtout time, emeralds have been known as a symbol of truth and love, as well as eloquence, wit and forsight.', 
            brief: 'Symbol of truth, love and forsight.',
            keyWords: ['truth', 'love', 'eloquence', 'wit', 'forsight'],
            heroImg: '/static/media/Emerald.67a423cc209e0ebc14ed.jpg',
            pairImg: '/static/media/closeUp-pairImg-amethyst-emerald.7e42f3c7eb9ccd7390ff.jpg',
            pouchMockupImg: '../images/emerald/pouchMockupImg',
        },
        ruby : {
            name: 'Rubies',
            id: 'Ruby',
            description: 'Rubies are very hard and precious. Many kings and Queens have been crowned with rubies, as they represent good fortune, courage, wealth and prosperity.', 
            brief: 'Symbol of good fortune and prosperity.',
            keyWords: ['luck', 'good fortune', 'courage', 'wealth', 'prosperity'],
            heroImg: '/static/media/Ruby.0a09622d1bfbb7371b97.jpg',
            pairImg: '/static/media/closeUp-pairImg-amber-ruby.5753f61a5f35635ca6e6.jpg',
            pouchMockupImg: '../images/ruby/pouchMockupImg',
        },
        sapphire : {
            name: 'Sapphires',
            id: 'Sapphire',
            description: 'The sapphire stone represents faithfullness and sincerity. It is also tied to prosperity and is thought to bring about the fulfillment of dreams.', 
            brief: 'Symbol faithfullness and sincerity, and wishes granted.',
            keyWords: ['faithfuless', 'sincerity', 'sucess', 'fullfillment of dreams', 'wishes'],
            heroImg: '/static/media/Sapphire.035398a4fa5e1051ac0d.jpg',
            pairImg: '/static/media/closeUp-pairImg-sapphire-quartz.8aa45a074f4ec6ddb930.jpg',
            pouchMockupImg: '../images/sapphire/pouchMockupImg',
        },
        quartz : {
            name: 'Rose Quartz',
            id: 'Quartz',
            description: 'Rose Quartz is the stone of unconditional love, and is tied to emotional healing and is thought to inspire compassion.', 
            brief: 'Symbol of emotional healing and unconditional love.',
            keyWords: ['courage', 'travel', 'adventure', 'strength', 'feeling of safety', 'trust'],
            heroImg: '/static/media/Quartz.525ecb0d2c8a4193becd.jpg',
            pairImg: '/static/media/closeUp-pairImg-sapphire-quartz.8aa45a074f4ec6ddb930.jpg',
            pouchMockupImg: '../images/quartz/pouchMockupImg',
        },
    };

    export default jellyGemsObj;