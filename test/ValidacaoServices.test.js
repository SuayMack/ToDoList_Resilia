import ValidacaoServices from './../src/services/ValidacaoServices';

describe("Usuários", () => {
  test("Quando a validação de nome retorna false", () => {
    expect(ValidacaoServices.validaNome("")).toBe(false)
    expect(ValidacaoServices.validaNome("1")).toBe(false)
    expect(ValidacaoServices.validaNome("12")).toBe(false)
    expect(ValidacaoServices.validaNome(12)).toBe(false)
    expect(ValidacaoServices.validaNome(true)).toBe(false)
    expect(ValidacaoServices.validaNome([])).toBe(false)
    expect(ValidacaoServices.validaNome({})).toBe(false)
    expect(ValidacaoServices.validaNome(NaN)).toBe(false)
    expect(ValidacaoServices.validaNome()).toBe(false)

  })

  test("Quando a validação de nome retorna true", () => {
    expect(ValidacaoServices.validaNome("Pri")).toBe(true)
  })

  test("Quando a validação de nome retorna true", () => {
    expect(ValidacaoServices.validaEmail("pri@pri")).toBe(true)
  })
})



