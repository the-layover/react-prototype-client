import * as AuthActions from './auth'
import * as NavigatorActions from './navigator'
import * as FlightActions from './flight'

// export * from './auth'

export const ActionCreators = Object.assign({}, AuthActions, NavigatorActions, FlightActions);
