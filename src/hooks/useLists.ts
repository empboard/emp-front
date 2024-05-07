import { useCallback } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import * as U from '../utils'
import {
  useAppDispatch,
  useAppSelector,
  cardEntityAction as CA,
  listCardOrderAction as LCA,
  listEntityAction as LA,
  listIdOrdersAction as LOA,
} from '../store'

export const useLists = () => {
  const dispatch = useAppDispatch()

  const lists = useAppSelector(({ globalReducers }) =>
    globalReducers.listidOrders.map((uuid) => globalReducers.listEntities[uuid])
  )

  const listCardOrder = useAppSelector(
    ({ globalReducers }) => globalReducers.listCardOrder
  )

  const listidOrders = useAppSelector(
    ({ globalReducers }) => globalReducers.listidOrders
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = { uuid, title }
      dispatch(LOA.add(uuid))
      dispatch(LA.add(list))
      dispatch(LCA.set({ listid: list.uuid, cardids: [] }))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      listCardOrder[listid].forEach((cardid) => {
        dispatch(CA.remove(cardid))
      })

      dispatch(LCA.remove(listid))
      dispatch(LOA.remove(listid))
      dispatch(LA.remove(listid))
    },
    [dispatch, listCardOrder]
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

      dispatch(LOA.set(newOrders))
    },
    [dispatch, listidOrders]
  )

  // prettier-ignore
  const onDragEnd = useCallback((result: DropResult) => {
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
      const cardidOrders = listCardOrder[destinationListid]

      dispatch(
        LCA.set({
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
      const sourceCardidOrders = listCardOrder[sourceListid]
      dispatch(
        LCA.set({
          listid: sourceListid,
          cardids: U.removeItemAtIndexInArray(
            sourceCardidOrders,
            sourceCardIndex
          ),
        })
      )

      const destinationCardidOrders = listCardOrder[destinationListid]
      dispatch(
        LCA.set({
          listid: destinationListid,
          cardids: U.insertItemAtIndexInArray(
            destinationCardidOrders,
            destinationCardIndex,
            result.draggableId
          ),
        })
      )
    }
  }, [listCardOrder, dispatch])

  return { lists, onCreateList, onRemoveList, onMoveList, onDragEnd }
}
