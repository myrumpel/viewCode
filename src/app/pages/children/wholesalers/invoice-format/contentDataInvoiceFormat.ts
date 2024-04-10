export const invoiceFormatData = {
  title: 'Формат накладной',
  subtitle: 'Файл накладной должен содержать следующую информацию:',
  buttons: {
    text: 'Скачать образец накладной',
    link: './assets/files/nakl.dbf',
    fileText: 'Образец накладной',
  },
  table: [
    {
      code: 'Номер накладной',
      description: '20',
    },
    {
      code: 'Дата накладной',
      description: '8',
    },
    {
      code: 'Название клиента',
      description: '200',
    },
    {
      code: 'Адрес доставки',
      description: '200',
    },
    {
      code: 'Код товара',
      description: '20',
    },
    {
      code: 'Наименование товара',
      description: '200',
    },
    {
      code: 'Фирма-производитель',
      description: '100',
    },
    {
      code: 'Страна-производитель',
      description: '100',
    },
    {
      code: 'Штрих-код',
      description: '20',
    },
    {
      code: 'Признак ЖНВЛП',
      description: '1',
    },
    {
      code: 'Цена по гос. реестру (для ЖНВЛП)',
      description: '10.2',
    },
    {
      code: 'Серия',
      description: '150',
    },
    {
      code: 'ГТД',
      description: '150',
    },
    {
      code: 'Сертификат',
      description: '150',
    },
    {
      code: 'Срок годности препарата',
      description: '8',
    },
    {
      code: 'Единица измерения',
      description: '10',
    },
    {
      code: 'Количество',
      description: '10.2',
    },
    {
      code: 'Цена завода без НДС',
      description: '10.2',
    },
    {
      code: 'Цена завода с НДС',
      description: '10.2',
    },
    {
      code: 'Процент наценки поставщика',
      description: '6.2',
    },
    {
      code: '% НДС',
      description: '5.2',
    },
    {
      code: 'Цена поставщика без НДС',
      description: '10.2',
    },
    {
      code: 'Цена поставщика с НДС',
      description: '10.2',
    },
    {
      code: 'Сумма по позиции без НДС',
      description: '10.2',
    },
    {
      code: 'Сумма НДС по позиции',
      description: '10.2',
    },
    {
      code: 'Сумма по позиции с НДС',
      description: '10.2',
    },
    {
      code: 'Сумма по всей накладной без НДС',
      description: '10.2',
    },
    {
      code: 'Сумма НДС по всей накладной',
      description: '10.2',
    },
    {
      code: 'Сумма по всей накладной с НДС',
      description: '10.2',
    },
    {
      code: 'Номер счет-фактуры',
      description: '30',
    },
    {
      code: 'Дата счет-фактуры',
      description: '8',
    },
  ],
};
