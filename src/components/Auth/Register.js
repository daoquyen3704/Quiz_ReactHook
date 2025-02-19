import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        // validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid Email");
            return;
        }

        if (!password) {
            toast.error("Invalid Password");
            return;
        }

        // submit api
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login');

        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="register-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => navigate("/Login")}>Login</button>
            </div>
            <div className='title col-4 mx-auto'>
                HoiDanIT & Eric
            </div>
            <div className='welcome col-4 mx-auto'>
                Start Your journey
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email(*)</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password(*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                    {isShowPassword ? <span
                        className='icons-eye'
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ><VscEye /></span>
                        :
                        <span
                            className='icons-eye'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        ><VscEyeClosed /></span>
                    }
                </div>
                <div className='form-group'>
                    <label>Username(*)</label>
                    <input
                        type='text'
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Create My Free Account</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60; &#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Register;