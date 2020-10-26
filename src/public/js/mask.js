/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
function mask(input, type) {
  var value = input.value

  if (isNaN(value[value.length - 1])) {
    input.value = value.substring(0, value.length - 1)
    return
  }

  switch (type) {
    case 'cep':
      input.setAttribute('maxlength', '9')
      if (value.length === 5) input.value += '-'
      break
    case 'data':
      input.setAttribute('maxlength', '10')
      if (value.length === 2 || value.length === 5) input.value += '/'
      break
    case 'cpf':
      input.setAttribute('maxlength', '14')
      if (value.length === 3 || value.length === 7) input.value += '.'
      if (value.length === 11) input.value += '-'
      break
    case 'cnpj':
      input.setAttribute('maxlength', '18')
      if (value.length === 2 || value.length === 6) input.value += '.'
      if (value.length === 10) input.value += '/'
      if (value.length === 15) input.value += '-'
      break
    case 'tel':
      if (value[0] === 9) {
        input.setAttribute('maxlength', '10')
        if (value.length === 5) input.value += '-'
      } else {
        input.setAttribute('maxlength', '9')
        if (value.length === 4) input.value += '-'
      }
      break
  }
}
