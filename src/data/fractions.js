import default_image from '/images/default.png'

import aristocracy from '/images/aristocracy.png'
import clergy from '/images/clergy.png'
import criminality from '/images/criminality.png'
import factionless from '/images/factionless.png'
import government from '/images/government.png'
import intelligentsia from '/images/intelligentsia.png'
import magicians from '/images/magicians.png'
import merchants from '/images/merchants.png'
import military from '/images/military.png'

export const fractions = [
    {
        id: 1,
        name: 'ПРАВИТЕЛЬСТВО',
        description: 'Правители государств, судебные, законодательные и исполнительные органы (если они есть), представители в других государствах, который определяют внутреннюю и внешнюю политику, управляют различными сферами государства, осуществляют контроль за исполнением приказов и судебные дела высшего уровня',
        image: government
    },
    {
        id: 2,
        name: 'ЗНАТЬ',
        description: 'Знать - ',
        image: aristocracy
    },
    {
        id: 3,
        name: 'ДУХОВЕНСТВО',
        description: 'Духовенство - ',
        image: clergy
    },
    {
        id: 4,
        name: 'МАГИ',
        description: 'Маги - ',
        image: magicians
    },
    {
        id: 5,
        name: 'ВОЕННЫЕ',
        description: 'Военные - ',
        image: military
    },
    {
        id: 6,
        name: 'КУПЕЧЕСТВО',
        description: 'Купечество - ',
        image: merchants
    },
    {
        id: 7,
        name: 'ПРЕСТУПНОСТЬ',
        description: 'Преступность - ',
        image: criminality
    },
    {
        id: 8,
        name: 'ИНТЕЛЛИГЕНЦИЯ',
        description: 'Интеллигенция - ',
        image: intelligentsia
    },
    {
        id: 9,
        name: 'БЕСФРАКЦИОННИКИ',
        description: 'Бесфракционники - ',
        image: factionless
    }
]