import { useTranslate } from "../../core"

export default function Home() {
    let { t, selectLang, language } = useTranslate()

    function chagneLang(ev){
        let value = ev.target.value
        selectLang(value)
    }

    return (

        <>
            <select name="" id=""
                onChange={chagneLang}
                defaultValue={language}
            >
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
            </select>
            <div>{t('Hello')}</div>
        </>
    )
}