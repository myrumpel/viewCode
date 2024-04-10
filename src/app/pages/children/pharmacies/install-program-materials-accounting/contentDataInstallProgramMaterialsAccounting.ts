export const installProgramMaterialsAccountingData = {
  title: 'Установка программы учета материалов СКЛИТ',
  content: {
    text_1: 'Для установки программы складского учета необходимо:',
    text_2: [
      'По умолчанию программа устанавливается в папку "C:\\sklad", при установке вы можете выбрать другой путь.',
      'Программа установки создаст на Вашем рабочем столе ярлык "Склад Склит" (рис №1)',
    ],
    text_3:
      '4. После установки , запустите программу с помощью ярлыка "Склад Склит" на вашем рабочем столе. При первом запуске она запросит ввести начальные сведения, необходимые для работы. ( рис №2)',
    text_4:
      'Нажимая стрелки вы сможете передвигаться по закладкам и вводить необходимые данные. Сначала заполняем реквизиты аптеки, для этого надо выбрать пункт «Изменить реквизиты», как указано ниже (рис №3).',
    text_5:
      'В открывшимся окне заполняем необходимые данные и сохраняем .( рис №4)',
    text_6:
      'Переходим на следующую закладку. Здесь указываем путь к программе «Просмотр Прайсов», если путь указанный на экране не совпадает с вашими установками, то выбрав пункт «Изменить путь» можно выбрать сведения где установлена программа на вашем компьютере (рис №5)',
    text_7:
      'Для указания пути в открывшимся окне выберите указанную кнопку. (рис №6)',
    text_8:
      'В окне «Select Directory»найдите необходимый каталог и нажмите кнопку «SELECT» (рис№7). Примечание: Если программа «Просмотр Прайсов» установлена на другом компьютере, то прежде чем делать данную настройку, необходимо установить параметры общего доступа к папке программы «Просмотр Прайсов», а на данном компьютере , создать сетевой диск, только после этого можно будет выбрать путь к программе.',
    text_9:
      'Затем перейдите на закладку «Безопасность», здесь нужно ввести пароли, которыми будет пользоваться Администратор программы (рис №8). Запомните пароль который вы вводите , его нужно будет указывать при запуске программы для пользователя «admin».',
    text_10:
      'Далее на следующей вкладке программа сохраняет данные и создаст резервные копии.(рис №9)',
    text_11:
      'Теперь ваша программа складского учета установлена, настроена и готова к работе , выберите для начала работы кнопку с галочкой. рис №10',
    text_12:
      'После этого программа запросит у вас Логин и Пароль для входа в систему (рис №11), необходимо ввести в поле «Имя пользователя» «admin» и Пароль , который вы вводили при заполнении данных.',
    text_13: 'После входа в систему появиться главное окно программы. Рис №12',
    text_14:
      '4. Для установления связи между программами «Просмотр Прайсов» и «Склад Склит» необходимо выполнить следующие действия:' +
      '- в программе «Просмотр Прайсов» в меню «Настройки» выбрать пункт «Настройки программы», в окне «Настройки программы» нужно выбрать закладку «Торговля», включить (поставить галочку) в пункт «Использовать программу складского учета СКЛИТ» как показано на рис №13',
    text_15:
      '- Указать путь к складской программе. Далее выйти из настроек (рис №14).' +
      'Примечание: Если складская программа установлена на другом компьютере, то прежде чем делать данную настройку, необходимо установить параметры общего доступа к папке программы «Склад СКЛИТ», а на данном компьютере , создать сетевой диск, только после этого можно будет выбрать путь к программе.',
    text_16: 'Теперь все настроено, можно приступать к работе.',
    text_17: [
      'Будем рады ответить на все Ваши вопросы - пишите: office@sklit.org.',
      'Звоните по тел. в г. Краснодаре (861) 298-01-50.',
      'Желаем Вам успешной работы!',
    ],
    textList_1: [
      '1.Скачать программу установки с нашего сайта «sklad_sklit.exe».',
      '2.Запустить файл установки.',
      '3.Следовать инструкциям установщика .',
    ],
  },
  images: {
    img_1: 'assets/pharmaciesImages/instal-uchet/r1.jpg',
    img_2: 'assets/pharmaciesImages/instal-uchet/r2.jpg',
    img_3: 'assets/pharmaciesImages/instal-uchet/r3.jpg',
    img_4: 'assets/pharmaciesImages/instal-uchet/r4.jpg',
    img_5: 'assets/pharmaciesImages/instal-uchet/r5.jpg',
    img_6: 'assets/pharmaciesImages/instal-uchet/r6.jpg',
    img_7: 'assets/pharmaciesImages/instal-uchet/r7.jpg',
    img_8: 'assets/pharmaciesImages/instal-uchet/r8.jpg',
    img_9: 'assets/pharmaciesImages/instal-uchet/r9.jpg',
    img_10: 'assets/pharmaciesImages/instal-uchet/r10.jpg',
    img_11: 'assets/pharmaciesImages/instal-uchet/r11.jpg',
    img_12: 'assets/pharmaciesImages/instal-uchet/r12.jpg',
    img_13: 'assets/pharmaciesImages/instal-uchet/r13.jpg',
    img_14: 'assets/pharmaciesImages/instal-uchet/r14.jpg',
  },
  buttons: {
    text: 'Скачать программу учета материалов СКЛИТ',
    link: './assets/files/uchet_materialov.exe',
    fileText: 'Программа учета материалов СКЛИТ',
  },
};
