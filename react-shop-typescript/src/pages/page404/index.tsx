import { Paginate } from "components"
import { useEffect } from "react"
import { convertQueryURLToObject } from "utils"

const Page = () => {
    let queryURLObject = convertQueryURLToObject<{page: string}>()

    useEffect(() => {
        console.log(queryURLObject)
    }, [queryURLObject.page])

    return <div>
        <Paginate
            currentPage={parseInt(queryURLObject?.page || '0')}
            totalPage={4}
        />
    </div>
}

export default Page