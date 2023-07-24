import Image from 'next/image'
import Lottery from './lottery/Lottery'
import { useState } from 'react';
import Result from './result/Result';


export default function LotteryTop() {
    const [result, setResult] = useState(true);
    const [showRecipe, setShowRecipe] = useState();

    return (
        result ? <Result /> : <Lottery />
    )
}