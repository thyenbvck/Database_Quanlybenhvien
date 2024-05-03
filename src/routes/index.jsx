import Home from "../Page/Home/Home";
import Employee from "../Page/Employee/Employee";
import Patient from "../Page/Patient/Patient";
import Medicine  from "../Page/Medicine/Medicine";
import Room  from "../Page/Room/Room";

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
    {
        path: '/medicine',
        component: Medicine,
    },
    {
        path: '/room',
        component: Room,
    },
    
]

const privateRoutes = [
    
]


export {publicRoutes, privateRoutes}