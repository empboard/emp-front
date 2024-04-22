import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/AppState'
import { List } from '../store/commonTypes'
import { useCallback } from 'react'

import * as L from '../store/listEntities'
import * as LO from '../store/listidOrders'
import * as LC from '../store/listidCardidOrders'
import * as C from '../store/cardEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>((state) =>
    state.listidOrders?.map((uuid) => state.listEntities[uuid])
  )

  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({ listidCardidOrders }) => listidCardidOrders
  )

  const listidOrders = useSelector<AppState, LO.State>(
    ({ listidOrders }) => listidOrders
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = { uuid, title }
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({ listid: list.uuid, cardids: [] }))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach((cardid) => {
        dispatch(C.removeCard(cardid))
      })

      dispatch(LC.removeListid(listid))
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardidOrders]
  )

  const onMoveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex
          ? listidOrders[hoverIndex]
          : index === hoverIndex
          ? listidOrders[dragIndex]
          : item
      )

      dispatch(LO.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )

  return { lists, onCreateList, onRemoveList, onMoveList }
}
