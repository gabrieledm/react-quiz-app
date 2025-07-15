import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    const quizIsOver = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer])
    }, [])

    const handleSkipAnswer = useCallback(() =>
            handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsOver) {
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id="quiz">
            {/*Add the key property to force the re-creation of the component when the activeQuestionIndex gets updated */}
            <Question
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}