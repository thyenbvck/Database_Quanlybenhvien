import Home from "../Page/Home/Home";
import Employee from "../Page/Employee/Employee";
import Patient from "../Page/Patient/Patient";


const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/patient',
        component: Patient,
    },
    {
        path: '/employee',
        component: Employee,
    },
    // {
    //     path: '/medicine',
    //     component: Medicine,
    // },
    // {
    //     path: '/equipment',
    //     component: Equipment,
    // },
    
]

const privateRoutes = [
    
]


export {publicRoutes, privateRoutes}