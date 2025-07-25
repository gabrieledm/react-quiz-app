import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({userAnswers}) {
    const skipped = userAnswers.filter(answer => !answer)
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    const skippedAnswersShare = Math.round((skipped.length / userAnswers.length) * 100)
    const correctAnswersShare = Math.round((correct.length / userAnswers.length) * 100)
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare

    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz Complete"/>
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">wrong</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'
                    if (!answer) {
                        cssClass += " skipped"
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct"
                    } else {
                        cssClass += " wrong"
                    }

                    return <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                })}
            </ol>
        </div>
    )
}