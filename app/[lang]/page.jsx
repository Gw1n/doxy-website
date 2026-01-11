import { getDictionary } from '@/app/get-dictionary';
import HomePage from './homePage.jsx';
import React from 'react';



export default async function Page({ params: { lang } }) {

    const dict = await getDictionary(lang);


    return (
        <div>
            <HomePage dict={dict} lang={lang} />
        </div>


    )
}