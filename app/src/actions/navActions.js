export const CHANGE_LOCATION = 'CHANGE_LOCATION'

export const changeLocation = (main='home', sub='') => (
  {
    type: CHANGE_LOCATION,
    main: main,
    sub: sub
  }
)