import { Breadcrumbs, Paginate } from "components"
import React from "react"
import { useTranslate } from "../../core"

export default function Home() {
    let { t, selectLang, language } = useTranslate()


    return (

        <>
            <Breadcrumbs list={[
                { link: 'home', title: 'Home' },
                { link: '', title: 'Blog' }
            ]} />
            
        </>
    )
}