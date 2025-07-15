import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef([]);

    if (shuffledAnswers.current.length === 0) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map(answer => {
                const isSelected = selectedAnswer === answer;
                let className = ""
                if (isSelected) {
                    if (answerState === "answered") {
                        className = "selected";
                    }
                    if ((answerState === "correct" || answerState === "wrong")) {
                        className = answerState;
                    }
                }

                return <li key={answer} className="answer">
                    <button
                        onClick={() => onSelect(answer)}
                        className={className}
                        disabled={answerState !== ''}
                    >
                        {answer}
                    </button>
                </li>
            })}
        </ul>

    )
}