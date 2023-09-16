import { EditIcon } from "./icons";

export const cards = [
    {
        label:"Active",
        img:"/img/card-img.png",
        title:"Food Menu",
        icon:<EditIcon/>,
        about:"List for all food and products",
        li:[
            {
                tag:"Products"
            },
            {
                tag:"Food"
            },
        ],
    },
    {
        label:"Inactive",
        img:"/img/card-img.png",
        title:"Drink Menu",
        icon:<EditIcon/>,
        about:"Where all the drinks will be listed",
        li:[
            {
                tag:"Service"
            },
        ],
    },
]