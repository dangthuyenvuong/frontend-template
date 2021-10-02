import React from 'react'
import Brand from './components/Brand'
import Review from './components/Review'
import TopSeller from './components/TopSeller'

const Home: React.FC = () => {
    // let { trans, selectLang, language } = useTranslate()

    // function changeLang(ev) {
    //     let value = ev.target.value
    //     selectLang(value)
    // }
    
    return (
        // <>
        //     <select name="" id=""
        //         onChange={changeLang}
        //         defaultValue={language}
        //     >
        //         <option value="en">English</option>
        //         <option value="vn">Tiếng Việt</option>
        //     </select>
        //     <div>{trans('Hello')}</div>
        // </>

        <>
            {/* <Promo />
            <Categories />
            <Features />
            <BestPick /> */}
            <TopSeller />
            {/* <Countdown /> */}
            <Review />
            <Brand />
        </>
    )
}

export default Home
