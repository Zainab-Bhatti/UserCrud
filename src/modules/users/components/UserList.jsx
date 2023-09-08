import { UserItem } from './UserItem';
import { useEffect, useState } from 'react';
import { getListUsers } from '../pages/service/localstorage';

export const UserList = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getListUsers());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">User List</h1>

            {
                Users.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">First-Name</th>
                                    <th scope="col">Last-Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Users.map(User => <UserItem User={User} key={User.id} setUsers={setUsers} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Users</h3>
                )
            }

        </div>
    )
}
