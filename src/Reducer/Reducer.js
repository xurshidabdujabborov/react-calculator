/// Kalkulator

const reducer = (state, action) => {
    switch (action.type) {  
        case "NUM_CALC_PLUS":
            return {
                resault: parseInt(action.payloud.num1) + parseInt(action.payloud.num2)
            }
        case "NUM_CALC_MINUS":
            return {
                resault: parseInt(action.payloud.num1) - parseInt(action.payloud.num2)
            }
        case "NUM_CALC_BOLUV":
            return {
                resault: parseInt(action.payloud.num1) / parseInt(action.payloud.num2)
            }
        case "NUM_CALC_KOPAYTIRUV":
            return {
                resault: parseInt(action.payloud.num1) * parseInt(action.payloud.num2)
            }
        default:
            return state
    }
}

export default reducer