import aaa from '../assets/icons/people/aaa.png'
import bbb from '../assets/icons/people/bbb.png'
import ccc from '../assets/icons/people/ccc.png'
import ddd from '../assets/icons/people/ddd.png'
import gown from '../assets/images/gown.png'
import clock from '../assets/icons/clock.png'
import shoe from '../assets/images/shoe.png'


export const firstArray = [

    { Image: aaa , color: 'bg-red-400'},
    { Image: bbb, color: 'bg-blue-400' },
    { Image: ccc, color: 'bg-yellow-400' },
    { Image: ddd, color: 'bg-green-400' },


];


export const scrolls = [

    { name: 'Clothes' },
    { name: 'Refreshments' },
    { name: 'Entertainment ' },
    { name: 'Venue' },
    { name: 'Guest list' },
    { name: 'Accessories' },
    { name: 'Accomodation' },
    { name: 'Souvenirs' },

]


export const firstCard = [

    { priority: 'high', Image: gown, heading: 'Gown selection', date: 'Aug 18th' },
    { priority: 'mid',  Images: clock, time: '9:00am', date: 'Aug 18th', heading: 'Choose meals for reception'}

]


export const thirdCard = [

    { priority: 'mid', validation: 'completed', heading: 'Shoe Selection', subtitle: 'A size 39 Christain loubtion heels were purchased.'},
    { priority: 'low', validation: 'completed', heading: 'Shoe Selection', Image: shoe }

]