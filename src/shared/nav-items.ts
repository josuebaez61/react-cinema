import { faBuilding, faEnvelope, faPizzaSlice, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

export const navItems = [
    {
        url: '/',
        title: 'Cartelera',
        icon: faTicketAlt
    },
    {
        url: '/cinemas',
        title: 'Cines',
        icon: faBuilding
    },
    {
        url: '/additionals',
        title: 'Adicionales',
        icon: faPizzaSlice
    },
    {
        url: '/contacto',
        title: 'Contacto',
        icon: faEnvelope
    },
]