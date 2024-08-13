import './App.css';
import {NumberButton, OperatorButton, ZeroButton, FunctionsButton} from './components/CalculatorButtons';
import CalculatorDisplay from './components/CalculatorDisplay'

function App() {

  

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-sky-950'>
            <div className="bg-gray-900 rounded-md h-[512px] w-[288px] p-4 grid justify-items-center">
                <div className='self-end'>
                    <CalculatorDisplay />
                </div>
                <div className= "w-60 h-72 grid gap-1 grid-cols-4 place-items-center self-center">
                    <FunctionsButton number='AC'/>
                    <FunctionsButton number='+/-'/>
                    <FunctionsButton number='%'/>
                    <OperatorButton number='÷'/>
                    <NumberButton number='7'/>
                    <NumberButton number='8'/>
                    <NumberButton number='9'/>
                    <OperatorButton number='x'/>
                    <NumberButton number='4'/>
                    <NumberButton number='5'/>
                    <NumberButton number='6'/>
                    <OperatorButton number='-'/>
                    <NumberButton number='1'/>
                    <NumberButton number='2'/>
                    <NumberButton number='3'/>
                    <OperatorButton number='+'/>
                    <NumberButton number='0'/>
                    <NumberButton number=''/>
                    <NumberButton number=','/>
                    <OperatorButton number='='/>
                </div>
            </div>
        </div>
    );
}

export default App;
