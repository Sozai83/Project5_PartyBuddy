import Image from 'next/image'
import Lottery from './lottery/Lottery'
import { useState } from 'react';
import Result from './result/Result';
import Recipe from './recipe/Recipe';


export default function LotteryTop() {
    const [result, setResult] = useState(true);
    const [showRecipe, setShowRecipe] = useState(true);

    return (
        result && !showRecipe ? <Result /> :
            showRecipe ? <Recipe /> :
                <Lottery />
    )
}