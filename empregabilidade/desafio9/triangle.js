const triangle = (a, b, c) => {
    if (a > b + c) {
        return 'Não é um triângulo'
    } else if (b > a + c) {
        return 'Não é um triângulo'
    } else if (c > a + b) {
        return 'Não é um triângulo'
    } else {
        return 'É um triângulo'
    }
}