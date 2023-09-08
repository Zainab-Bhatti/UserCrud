import { useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../pages/service/localstorage';
import { useForm } from '../pages/useForm';
import { useEffect } from 'react';


export const ViewUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { inputValues, setForm } = useForm({
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
    

    return(
    
    
    <div className="d-flex my-5 justify-content-between">
        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
        <div />
   
    <div className="card border-primary p-5 m-5">
        <form>
            <h1>{`User:${id}`}</h1>
            <div className="form-group">
                <label className="form-label mt-2" htmlFor="inputValid">First-Name</label>
                <input
                    name="fname"
                    type="text"
                    value={inputValues.fname}
                    
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
                   
                    className="form-control"
                    id="inputValid"
                />
            </div>


            
        </form>
    </div>

   

</div >
)
}