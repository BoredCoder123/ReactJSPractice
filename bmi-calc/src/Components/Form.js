import React, {useState} from 'react'

function Form() {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState(0)
    const [dataEnterred, setDataEnterred] = useState(false)

    const handleSubmit = e => {
        console.log(e)
        setDataEnterred(true)
        setBmi(weight/(height*height))
        e.preventDefault()
    }

    const checkBMIRange = (bmi) => {
        if(bmi < 18.5)
            return 'You are underweight'
        else if(bmi < 24.9)
            return 'Congrats. Your BMI is in the correct range'
        else if(bmi < 29.9)
            return 'You are overweight'
        else
            return 'You are obese and need to control your habits.'
    }

    return (
        <div>
            <div>
                <h2>BMI Calculator</h2>
                <form onSubmit={handleSubmit}>
                    <label>Enter your height and weight to calculate BMI</label><br></br>
                    <input 
                    type='number' 
                    step='0.01' 
                    min='0.01'
                    value={height} 
                    onChange={e=>setHeight(e.target.value)}
                    placeholder='Height(m)'></input><br></br>
                    <input type='number' 
                    step='0.01' 
                    min='0.01'
                    value={weight} 
                    onChange={e=>setWeight(e.target.value)} 
                    placeholder='Weight(kg)'></input><br></br>
                    <button type='submit'>Submit</button>
                </form>
            </div>
                {
                    dataEnterred ? <div>Your BMI is {bmi.toFixed(2)}. {checkBMIRange(bmi)}</div> : <div>Please enter your height and weight to calculate your BMI</div>
                }
        </div>
    )
}

export default Form
