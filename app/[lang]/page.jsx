import { getDictionary } from '@/app/get-dictionary';
import HomePage from './homePage.jsx';
import React from 'react';

export async function generateStaticParams() {

    const languages = ['ru', 'en', 'de'];

    return languages.map((lang) => ({
        lang: lang,
    }));
}


export default async function Page({ params: { lang } }) {

    const dict = await getDictionary(lang);


    return <HomePage dict={dict} lang={lang} />;
}