import { Pagination } from 'components/Pagination'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { StateStore } from 'store'
import { wishlistAction } from 'store/actions/wishlistAction'
import { convertQueryURLToObject } from 'utils'



const Wishlist: React.FC = () => {
  let queryURLObject = convertQueryURLToObject<{ page: string }>()

  let dispatch = useDispatch()

  useEffect(() => {
    console.log('queryURLObject page: ' + queryURLObject.page)
    try {
      dispatch(wishlistAction)
    } catch (err) { }
  }, [queryURLObject.page])

  let wishlist = useSelector((store: StateStore) => store.wishlist)
  console.log('wishlist: ' + wishlist)

  // let wishlist = []


  return (
    <div>
      <div className="row">
        {/* Item */}
        

      </div>
      {/* Pagination */}
      <Pagination currentPage={parseInt(queryURLObject?.page || '0')} totalPage={11} />
    </div>
  )
}

export default Wishlist
