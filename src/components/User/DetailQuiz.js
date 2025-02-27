import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";


const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId]) // khi mà quizId bị thay đổi thì useEffect này sẽ đc chạy
    const fetchQuestion = async () => {
        const res = await getDataQuiz(quizId);
        console.log('check question: ', res)

    }
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}
export default DetailQuiz;