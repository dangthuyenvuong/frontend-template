import { IPaginate, Product } from '@types'
import { ProductCard } from 'components'
import LoadingPage from 'components/LoadingPage'
import { Pagination } from 'components/Pagination'
import React, { useEffect, useState } from 'react'
import wishlistService from 'services/wishlistService'
import { convertObjectToQueryURL, convertQueryURLToObject } from 'utils'


type StateProp = {
  loading: boolean,
  products: Product[],
  paginate?: IPaginate
}



const Wishlist: React.FC = () => {
  const [state, setState] = useState<StateProp>({
    loading: false,
    products: []
  })
  let queryURLObject = convertQueryURLToObject<{ page: string }>()


  useEffect(() => {
    (async () => {
      let queryUrl = convertObjectToQueryURL({page: queryURLObject.page || 1})
      const productList = await wishlistService.getWishlist(`?${queryUrl}`)
      setState({
        loading: false,
        products: productList.data,
        paginate: productList.paginate
      })
    })()

  }, [queryURLObject.page])


  let {loading, products, paginate} = state

  if(loading) return <LoadingPage />

  return (
    <div>
      <div className="row">
        {/* Item */}
        {
          products.map(e => <ProductCard key={e.id} product={e}/>)
        }
      </div>
      {/* Pagination */}
      {
        paginate && <Pagination {...paginate} />
      }
    </div>
  )
}

export default Wishlist
