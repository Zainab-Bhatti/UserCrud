import { useNavigate, useParams } from 'react-router-dom';
import {addUser,getUserById} from '../pages/service/localstorage'
import { useForm } from '../pages/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editUser } from '../pages/service/localstorage';

export const UserForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        fname: '',
        lname:' ',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (id) {
            const User = getUserById(id);
            setForm(User);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editUser(id, inputValues) : addUser({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    return (
        <div>
      {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} User.
                        </div>
                    </div>
                )
            }
            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} User</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">First-Name</label>
                        <input
                            name="fname"
                            type="text"
                            value={inputValues.fname}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Last-Name</label>
                        <input
                            name="lname"
                            type="text"
                            value={inputValues.lname}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Phone</label>
                        <input
                            name="phone"
                            type="text"
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} User</button>
                    </div>
                </form>
            </div>

           

        </div >
    )
}
