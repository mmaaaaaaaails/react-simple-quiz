import './App.scss';
import {questions} from "./components/data";
import {useState} from "react";
import Result from "./components/Result";
import Quiz from "./components/Quiz";

const App = () => {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="App">
            { step !== questions.length ?
                <Quiz
                    step={step}
                    question={question}
                    onClickVariant={onClickVariant}
                />
                :
                <Result
                    correct={correct}
                />
            }
        </div>
    );
}

export default App;
