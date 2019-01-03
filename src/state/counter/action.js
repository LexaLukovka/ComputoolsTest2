export const PLUS = 'PLUS'
export const MINUS = 'MINUS'

const plus = () => ({
  type: PLUS,
})

const minus = () => ({
  type: MINUS,
})

export default { plus, minus }
