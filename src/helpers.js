/**
 * [DEPRECATED] Converte a data recebida para o idioma recebido
 *
 * @param string Código do país
 * @param string data no padrão XX-XX-XXXX
 * @return string convertida para o padrão do país recebido
*/
export function convertDate(country = 'en', date) {
  let convertedDate = false;
  const splitedDate = date.split('/');

  switch (country) {
    case 'BR':
      convertedDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`;
      break;
    case 'US':
      convertedDate = `${splitedDate[2]}-${splitedDate[0]}-${splitedDate[1]}`;
      break;
    default:
      convertedDate = false;
      break;
  }

  return convertedDate;
}

/**
 * [DEPRECATED] Recebe uma data e verifica se ela é válida
 *
 * @param string Código do país
 * @param string data no padrão XX/XX/XXXX
 * @return true ou false conforme data
*/
export function dateValidator(country = 'US', date) {
  let isValid = false;
  const splitedDate = date.split('/');

  switch (country) {
    case 'BR':
      if ((splitedDate[0] >= 1 && splitedDate[0] <= 31)
        && (splitedDate[1] >= 1 && splitedDate[1] <= 12)
        && (splitedDate[2] >= 1800 && splitedDate[2] <= new Date().getFullYear())) {
        isValid = true;
      }
      break;
    case 'US':
      if ((splitedDate[0] >= 1 && splitedDate[0] <= 12)
        && (splitedDate[1] >= 1 && splitedDate[1] <= 31)
        && (splitedDate[2] >= 1800 && splitedDate[2] <= new Date().getFullYear())) {
        isValid = true;
      }
      break;
    default:
      isValid = false;
      break;
  }

  return isValid;
}

/**
 * Recebe um valor e o código do país e retorna o valor formato e com código
 *
 * @param string Valor
 * @param string Moeda do país
 * @return Valor formato na moeda do país
*/
export function getNumberWithCurrency(value, currencyCode) {
  return new Intl.NumberFormat(
    navigator.language || navigator.userLanguage,
    {
      style: 'currency',
      currency: currencyCode,
    },
  ).format(value);
}


/**
 * Verifica se uma senha é válidd
 *
 * @param string senha para validação
 * @return boolean TRUE senha CPF válida e FALSE para senha inválida
*/
export function passwordValidator(password) {
    // precisa conter letras minúsculas e maiúsculas, números, pelo menos um caractere especial e no mínimo 8 dígitos
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/.])[A-Za-z\d@$!%*?&#/.]{8,}$/;

    return pattern.test(password) || this.$t('USER.ACCOUNT.UPDATE_PASSWORD.INVALID');
}

/**
 * Verifica se um CPF é válido
 *
 * @param string número do CPF para validação
 * @return boolean TRUE para CPF válido e FALSE para cpf inválido
*/
export function cpfValidator(cpfNumber) {
  let sum;

  let rest;

  sum = 0;

  const cpf = cpfNumber.replace(/\D+/g, '');

  if (/^(.)\1+$/.test(cpf)) {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }

  if (rest !== parseInt(cpf.substring(10, 11), 10)) {
    return false;
  }

  return true;
}

/**
 * Altera o botão do form recebido para o modo "sending",
 * com bloqueio de click e loading
 *
 * @param boolean TRUE para ativar o loading e FALSE para desativar
 * @param object objeto javascript do form que será alterado
*/
export function formSending(status, target) {
  const submitButton = target.querySelectorAll('[type="submit"]');
  const normalButton = target.querySelectorAll('button:not([type="submit"])');
  const inputs = target.querySelectorAll('input, select, textarea');

  if (status) {
    // Submit buttons
    submitButton.forEach((el) => {
      const element = el;

      element.classList.add('btn--loading');
      // Create loader
      const btnLoader = document.createElement('img');

      btnLoader.setAttribute('src', '/img/icons/interface/loader-circle.svg');
      btnLoader.setAttribute('class', 'btn__loader');
      // Append loader
      element.appendChild(btnLoader);
      element.disabled = true;
    });

    // Normal buttons
    normalButton.forEach((el) => {
      const element = el;

      element.classList.add('btn--disabled');
      element.disabled = true;
    });

    // Inputs
    inputs.forEach((el) => {
      const element = el;

      element.classList.add('input-item__field--disabled');
      element.disabled = true;
    });

    return;
  }

  // submitButton
  submitButton.forEach((el) => {
    const element = el;

    element.querySelector('.btn__loader').remove();
    element.classList.remove('btn--loading');
    element.disabled = false;
  });

  // Normal button
  normalButton.forEach((el) => {
    const element = el;

    element.classList.remove('btn--disabled');
    element.disabled = false;
  });

  // Inputs
  inputs.forEach((el) => {
    const element = el;

    element.classList.remove('input-item__field--disabled');
    element.disabled = false;
  });

  // Scrolltop
  // window.scrollTo(0, 0);
}

/**
 * Recebe os dados de Valor, Taxa Fixa e Variável e retorna o valor calculado da taxa
 *
 * @return string Valor
 * @return string Taxa fixa
 * @return string Taxa variável em %
*/
/*export function taxValue(value, taxFixed, taxVariable) {
  const actualValue = parseFloat(value);
  const fixedTax = parseFloat(taxFixed);
  const variableTax = parseFloat(taxVariable);

  const finalValue = ((actualValue * (variableTax / 100)) / (1 - (variableTax / 100))) + fixedTax;

  return finalValue.toFixed(2);
}
*/
