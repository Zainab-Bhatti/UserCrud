import { ViewUser } from "../modules/users/components/ViewUser";
import { UserForm } from "../modules/users/components/UserForm";
import { UserList } from "../modules/users/components/UserList";


export const UserRoutes=[
    {
        path:"/",
        element:<UserList/>
    },
    {
        path:"/create-User",
        element:<UserForm/>
    },
    {
        path:"/edit-User/:id",
        element:<UserForm/>
    },
    {
        path:"/view-User/:id",
        element:<ViewUser/>
    }

]