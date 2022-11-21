import {createPool} from 'mysql2/promise'


export const conexion = createPool({
    host: 'biodcppj8xmndzvxr2xx-mysql.services.clever-cloud.com',
    database: "biodcppj8xmndzvxr2xx",
    user:'unmqeu4rtrnsne1g',
    password:'YvZHrEYSgoARRyXax57X'
})

