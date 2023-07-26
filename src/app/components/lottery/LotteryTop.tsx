import Image from 'next/image'
import Lottery from './lottery/Lottery'
import { useState } from 'react';
import Result from './result/Result';
import Recipe from './recipe/Recipe';


export default function LotteryTop() {
    const [result, setResult] = useState(false);
    const [lotteryStatus, setLotteryStatus] = useState(false);
    const [showRecipe, setShowRecipe] = useState(false);

    return (
        result && !showRecipe ? <Result result={result} setResult={setResult} /> :
            showRecipe ? <Recipe result={result} /> :
                <Lottery setResult={setResult} />
    )
}