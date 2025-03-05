import './ManageQuiz.scss';
import Select from 'react-select';
import { FcPlus } from "react-icons/fc";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { postCreateNewQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';
import QuizTable from './QuizTable';
import Accordion from 'react-bootstrap/Accordion';



const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];
const ManageQuiz = (props) => {
    const [previewImage, setPreviewImage] = useState("");
    const [image, setImage] = useState(null);
    const [type, setType] = useState("");



    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            setImage(file);  // Lưu file vào state
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
        else {
            // setPreviewImage("")
        }
    }
    const handleSubmitQuiz = async () => {
        // validate
        if (!name || !description) {
            toast.error("Name/Description is required");
            return;
        }
        let res = await postCreateNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setName('');
            setDescription('');
            setImage('');

        } else {
            toast.error(res.EM);
        }
    }
    return (
        <div className="quiz-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Manage Quizzes</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add New Quiz:</legend>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='your quiz name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='description'
                                        value={description}
                                        onChange={(event) => setDescription(event.target.value)}
                                    />
                                    <label>Description</label>
                                </div>
                                <div className='my-3'>
                                    <Select
                                        defaultValue={type}
                                        onChange={setType}
                                        options={options}
                                        placeholder={"Quiz type..."}
                                    />
                                </div>
                                <div className='more-actions'>
                                    <div className='col-md-12'>
                                        <label className='mb-1 form-label label-upload' htmlFor='labelUpload'>
                                            <FcPlus />
                                            Upload File Image
                                        </label>
                                        <input
                                            type='file'
                                            id='labelUpload'
                                            hidden
                                            onChange={(event) => handleUploadImage(event)}
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='col-md-12 image-preview'>
                                        {previewImage ?
                                            <img src={previewImage} />
                                            :
                                            <span>Preview Image</span>
                                        }
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handleSubmitQuiz()}
                                    >Save</button>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="list-detail">
                <QuizTable />
            </div>
        </div>
    )
}
export default ManageQuiz;