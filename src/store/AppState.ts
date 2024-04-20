import * as L from './listEntities'
import * as LO from './listidOrders'

export type AppState = {
  listEntities: L.State
  listidOrders: LO.State
}
