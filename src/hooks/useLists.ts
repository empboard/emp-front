import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/AppState'
import { List } from '../store/commonTypes'
import { useCallback } from 'react'

import * as L from '../store/listEntities'
import * as LO from '../store/listidOrders'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>((state) =>
    state.listidOrders?.map((uuid) => state.listEntities[uuid])
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = { uuid, title }
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )

  return { lists, onCreateList, onRemoveList }
}
