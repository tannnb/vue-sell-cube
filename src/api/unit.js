function getIdCardInfo(identityCard, separator = '/') {
  const Reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!Reg.test(identityCard)) {
    throw Errow('不是一个有效的身份证号码')
  }
  const idCard = identityCard + '';

  // 获取出生年月 性别
  let birthday, gender;
  if (idCard.length === 18) {
    birthday = `${idCard.substr(6, 4)}${separator}${idCard.substr(10, 2)}${separator}${idCard.substr(12, 2)}`
    idCard.charAt(16) % 2 === 0 ? gender = 0 : gender = 1
  } else {
    birthday = `${idCard.substr(6, 2)}${separator}${idCard.substr(8, 2)}${separator}${idCard.substr(10, 2)}`
    idCard.charAt(14) % 2 === 0 ? gender = 0 : gender = 1
  }

  // 获取年龄
  const birthDate = new Date(birthday);
  const newDate = new Date();
  const year = newDate.getFullYear();
  let age = year - birthDate.getFullYear();
  if (newDate < new Date(`${year}${separator}${birthday.substring(5)}`)) {
    age--;
  }
  return {
    age, birthday, gender
  }
}

console.log(getIdCardInfo('500101199306307971'))
