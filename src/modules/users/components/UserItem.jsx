import React from 'react'
import {  removeUser,getListUsers} from '../pages/service/localstorage';
import { useNavigate } from 'react-router-dom';

export const UserItem = ({ User, setUsers }) => {
    const { id, fname,lname , email, phone } = User;
    const navigate = useNavigate();

    const deleteUser = () => {
        removeUser(id);
        setUsers(getListUsers());
    }



    return (
        <tr className="table-primasry">
            <th>{fname}</th>
            <td>{lname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-User/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteUser()}>Delete</span>
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/view-User/${id}`)}>View</span>
                </div>
            </td>
        </tr>
    )
}
