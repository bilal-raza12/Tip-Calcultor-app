"use client"
import { useState , ChangeEvent } from "react" // React hooks for managing states
import { Card , CardContent , CardDescription , CardFooter , CardHeader , CardTitle } from "./ui/card" // Shadcn Ui card component
import { Label } from "./ui/label" // shadcn label component
import { Input } from "./ui/input" // shadcn input coponent
import { Button } from "./ui/button" // shadcn button component

export default function TipCalculator () {
    const [billAmount , setBillAmount] = useState <number | null>(null); // stores the bill amount 
    const [tipPercentage , setTipPercentage] = useState <number | null>(null); // stores the tip percentage
    const [tipAmount , setTipAmount] = useState <number>(0); // stores the tip amount
    const [totalAmount , setTotalAmount] = useState <number>(0); // stores the calculated amount (bill + tip);

    //updates the billAmount state with parse float value from input when it chnages
    const handleBillAmountChange = (e : ChangeEvent<HTMLInputElement>) : void => {
        setBillAmount(parseFloat(e.target.value));
    }
    
    //updates the tipPercentage state whith parse float value from Input field when it changes
    const handleTipPercentageChange = (e : ChangeEvent<HTMLInputElement>) : void => {
        setTipPercentage(parseFloat(e.target.value));
    } 


    // function to calculate tip amount and total amount
    const CalculateTip = () => {
        if (billAmount !== null && tipPercentage !== null) {
            const tip = billAmount * (tipPercentage / 100);
            setTipAmount(tip);
            setTotalAmount(billAmount + tip);
        } 
    } 



    //JSX statement renders the TipCalculator UI
       return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
            <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <CardHeader>
                        <CardTitle className="text-center">
                            Tip Calculator
                        </CardTitle>
                        <CardDescription>
                            Enter the bill amount and tip percentage to calculate the tip and total ampunt. 
                        </CardDescription>

                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                         <Label htmlFor="bill-amount" >Bill Amount:</Label>
                         <Input id="bill-amount" type="number" placeholder="Enter bill amount" value={billAmount !== null ? billAmount : ""} 
                         onChange={handleBillAmountChange}/>

                    </div>
                    <div className="grid gap-2">
                         <Label htmlFor="tip-percentage" >Tip Percentage:</Label>
                         <Input id="tip-percentage" type="number" placeholder="Enter tip percentage" value={tipPercentage!== null ? tipPercentage : ""} 
                         onChange={handleTipPercentageChange}/>
                    </div>
                    <Button onClick={CalculateTip}>Calculate</Button>
                </CardContent>

                <CardFooter className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <span>Tip Amount:</span>
                        <span className="font-bold ">${tipAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold ">${totalAmount.toFixed(2)}</span>
                    </div>

                </CardFooter>

            </Card>

        </div>
       )
}