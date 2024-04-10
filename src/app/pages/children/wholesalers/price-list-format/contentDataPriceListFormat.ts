export const priceListFormatData = {
  title: 'Формат прайс-листа',
  content: {
    title: 'Поставщикам',
    text: ['Прайс должен быть в формате DBF', 'Образец прайса:'],
  },
  buttons: {
    text: 'Скачать образец прайс-листа',
    link: './assets/files/price.dbf',
    fileText: 'Образец прайс-листа',
  },
  table: [
    {
      code: 'Name',
      description: 'Наименование товара',
    },
    {
      code: 'Maker',
      description: 'Производитель',
    },
    {
      code: 'Country',
      description: 'Страна производителя',
    },
    {
      code: 'Fas',
      description: 'Количество пачек в коробке',
    },
    {
      code: 'Price',
      description:
        'Цена Если указать нулевую цену позиция не будет показываться клиенту',
    },
    {
      code: 'Price_min',
      description:
        'Минимальная цена (Если клиенту назначена скидка цена ниже установленной не опустится)',
    },
    {
      code: 'Price_max',
      description:
        'Максимальная цена (Если клиенту установлена наценка цена выше установленной не поднимется )',
    },
    {
      code: 'Kol_vo',
      description:
        'Остаток на складе Если указать нулевое количество позиция не будет показываться клиенту',
    },
    {
      code: 'Date_god',
      description: 'Дата окончания срока годности',
    },
    {
      code: 'Pr_ree',
      description: 'Реестровая цена',
    },
    {
      code: 'Kod',
      description: 'Ваш код товара',
    },
    {
      code: 'Seria',
      description: 'Серия товара',
    },
    {
      code: 'Zakaz_min',
      description: 'Минимальная партия заказа',
    },
    {
      code: 'Zakaz_krat',
      description: 'Кратность заказа',
    },
    {
      code: 'Ean13',
      description: 'Штрих код',
    },
    {
      code: 'Cnote',
      description:
        'Комментарий к товару Также возможны служебные слова: "АКЦИЯ" - Акционный товар, после слова акция должно быть описание "УЦЕНКА" - Уценённый товар, после слова уценка должна быть причина *Важно чтоб служебное слово стояло в начале строки',
    },
    {
      code: 'Pr_mak_nds',
      description: 'Цена производителя с НДС',
    },
    {
      code: 'proc_nds',
      description: 'Процент НДС',
    },
  ],
};
