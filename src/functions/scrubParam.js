export function lower(param) {
    return param.replace(/([^a-zA-z]+)/g, ' ').toLowerCase()
}

export function includes(base, input) {
    return lower(base).includes(input.toLowerCase())
    
}