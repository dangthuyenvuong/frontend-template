import { IPaginate, Order } from '@types'
import { Pagination } from 'components'
import LoadingPage from 'components/LoadingPage'
import React, { useEffect, useState } from 'react'
import userService from 'services/userService'
import { convertQueryURLToObject } from 'utils'
import MyOrderItem from './components/MyOrderItem'


type StateProp = {
  loading: boolean,
  orders: Order[],
  paginate?: IPaginate
}

const AccountOrders: React.FC = () => {
  let [state, setState] = useState<StateProp>({
    loading: true,
    orders: [],
  })
  let queryURLObject = convertQueryURLToObject<{ page: string }>()


  useEffect(() => {
    (async () => {
      const orderData = await userService.getOrder()

      setState({
        loading: false,
        orders: orderData.data,
        paginate: orderData.paginate
      })
    })()

  }, [queryURLObject.page])

  if (state.loading) return <LoadingPage />

  let { orders } = state

  return (
    <div>
      {
        orders.map(e => <MyOrderItem key={e._id} {...e}/>)
      }
      {
        state.paginate && <Pagination {...state.paginate} />
      }
    </div>
  )
}

export default AccountOrders
