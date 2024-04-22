import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/AppState'
import { List } from '../store/commonTypes'
import { useCallback } from 'react'

import * as U from '../utils'
import * as L from '../store/listEntities'
import * as LO from '../store/listidOrders'
import * as LC from '../store/listidCardidOrders'
import * as C from '../store/cardEntities'
import { DropResult } from 'react-beautiful-dnd'

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

  // prettier-ignore
  const onDragEnd = useCallback((result: DropResult) => {
    console.log('onDragEnd: ', result)

    // source는 항상 값이 있지만, destination은 undefined일 수 있다.
    const destinationListid = result.destination?.droppableId
    const destinationCardIndex = result.destination?.index

    if (destinationListid === undefined || destinationCardIndex === undefined) {
      return
    }

    // 1. 같은 목록인 경우 단순히 카드의 두 인덱스만 교환한다.
    const sourceListid = result.source.droppableId
    const sourceCardIndex = result.source.index

    if (destinationListid === sourceListid) {
      const cardidOrders = listidCardidOrders[destinationListid]

      dispatch(
        LC.setListidCardids({
          listid: destinationListid,
          cardids: U.swapItemsInArray(
            cardidOrders,
            sourceCardIndex,
            destinationCardIndex
          ),
        })
      )
    } 
    
    else {
      // 2. 카드를 다른 목록으로 옮기는 경우 현재 목록에서 삭제한 후, 목적지에 추가해준다.
      const sourceCardidOrders = listidCardidOrders[sourceListid]
      dispatch(
        LC.setListidCardids({
          listid: sourceListid,
          cardids: U.removeItemAtIndexInArray(
            sourceCardidOrders,
            sourceCardIndex
          ),
        })
      )

      const destinationCardidOrders = listidCardidOrders[destinationListid]
      dispatch(
        LC.setListidCardids({
          listid: destinationListid,
          cardids: U.insertItemAtIndexInArray(
            destinationCardidOrders,
            destinationCardIndex,
            result.draggableId
          ),
        })
      )
    }
  }, [listidCardidOrders, dispatch])

  return { lists, onCreateList, onRemoveList, onMoveList, onDragEnd }
}
