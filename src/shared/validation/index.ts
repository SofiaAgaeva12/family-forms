type ValidatorFunction = (data: any) => boolean
type Rules = Record<string, ValidatorFunction>
type Errors = Record<string, string>

export function all(rules: ValidatorFunction[]): (data: any) => boolean {
  return (data) => rules.every((isValid) => isValid(data))
}

export function createValidator(rules: Rules, errors: Errors) {
  function validate(data: any): { valid: boolean; errors: Errors } {
    const result: { valid: boolean; errors: Errors } = {
      valid: true,
      errors: {} as Errors
    }

    Object.keys(rules).forEach((key) => {
      const field = key
      const validate = rules[field]

      if (!validate) return

      if (!validate(data[field])) {
        result.valid = false
        result.errors[field] = errors[field]
      }
    })

    return result
  }

  function validateField(name: string, data: any): string | null {
    const rule = rules[name]

    if (!rule || rule(data)) {
      return null
    }

    return errors[name]
  }

  return { validate, validateField }
}

export const inRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max

export const match = (firstValue: string, regex: RegExp): RegExpMatchArray | null =>
  firstValue.match(regex)
