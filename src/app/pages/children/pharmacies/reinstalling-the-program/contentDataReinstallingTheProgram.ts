export const reinstallingTheProgramData = {
  title: 'Переустановка программы с сохранением данныx',
  content: [
    '1) Скопировать на флешку:',
    '- в корне программы папку "backup"',
    '- в корне программы Файл "AutoNum.dbf"',
    '- в корне программы Файл "zayava.dbf"',
    '- в корне программы Файл "TunePrice.dbf"',
    '- в корне программы Файл "TunePrice.FPT"',
    '- в корне программы Файл "DP_CODES.DBF"',
    '2) Скачать программу просмотра прайсов',
    '3) Установить программу, следуя инструкциям программы установки',
    '4) Скопировать с флешки файлы в корень программы с заменой файлов',
    '5) Запустить программу',
    '6) Зайти пункт меню cлужебные->Восстановление архива заявок->Выполнить',
    '7) Зайти пункт меню cлужебные->Восстановление архива накладных->Выполнить',
    '8) Позвонить в СКЛИТ и зарегистрировать программу',
  ],
  buttons: {
    text: 'Скачать программу просмотра прайсов',
    link: './assets/files/view_price.exe',
    fileText: 'Программа просмотра прайсов',
  },
};
