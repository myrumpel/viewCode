import { partnersData } from '../../pages/partners/contentDataPartners';
import { homeData } from '../../pages/home/contentDataHome';
import { contactsData } from '../../pages/contacts/contentDataContacts';
import { viewPriceData } from '../../pages/children/wholesalers/view-price/view-price';
import { helpData } from '../../pages/help/contentDataHelp';
import { reportData } from '../../pages/children/representatives/reports/contentDataReport';
import { sectionDescriptionData } from '../../pages/children/wholesalers/section-description-wholesalers/contentDataSectionDescription';
import { informationExchangeData } from '../../pages/children/wholesalers/information-exchange/contentDataInformationExchange';
import { dbfEditorData } from '../../pages/children/wholesalers/dbf-editor/contentDataDbfEditor';
import { priceListFormatData } from '../../pages/children/wholesalers/price-list-format/contentDataPriceListFormat';
import { applicationFormatData } from '../../pages/children/wholesalers/application-format/contentDataApplicationFormat';
import { invoiceFormatData } from '../../pages/children/wholesalers/invoice-format/contentDataInvoiceFormat';
import { disclaimerFormatData } from '../../pages/children/wholesalers/disclaimer-format/contentDataDisclaimerFormat';
import { promotionDiscountBonusData } from '../../pages/children/wholesalers/promotion-discount-bonus/contentDataPromotionDiscountBonus';
import { individualReportsData } from '../../pages/children/pharmacies/individual-reports/contentDataIndividualReports';
import { importApplicationData } from '../../pages/children/pharmacies/import-application/contentDataImportApplication';
import { RedistributionApplicationData } from '../../pages/children/pharmacies/redistribution-application/contentDataRedistributionApplication';
import { runningProgramWithKeysData } from '../../pages/children/pharmacies/running-program-with-keys/contentDataRunningProgramWithKeys';
import { reinstallingTheProgramData } from '../../pages/children/pharmacies/reinstalling-the-program/contentDataReinstallingTheProgram';
import { operationalMonitoringData } from '../../pages/children/pharmacies/operational-monitoring/contentDataOperationalMonitoring';
import { processingOfInvoicesData } from '../../pages/children/pharmacies/processing-of-invoices/contentDataProcessingOfInvoices';
import { autoOrderData } from '../../pages/children/pharmacies/auto-order/contentDataAutoOrder';
import { remoteAccessData } from '../../pages/children/pharmacies/remote-access/contentDataRemoteAccess';
import { installProgramMaterialsAccountingData } from '../../pages/children/pharmacies/install-program-materials-accounting/contentDataInstallProgramMaterialsAccounting';
import { materialsAccountingData } from '../../pages/children/pharmacies/materials-accounting/contentDataMaterialsAccounting';
import { sectionDescriptionPharmaciesData } from '../../pages/children/pharmacies/section-description-pharmacies/contentDataSectionDescriptionPharmacies';
import {agreementData} from "../../pages/agreement/contentDataAgreement";

export const contentDataRu = {
  homePage: homeData,
  partnersPage: partnersData,
  contacts: contactsData,
  agreement: agreementData,
  help: helpData,
  pharmacies: {
    individualReports: individualReportsData,
    importApplication: importApplicationData,
    redistributionApplication: RedistributionApplicationData,
    runningProgramWithKeys: runningProgramWithKeysData,
    reinstallingTheProgram: reinstallingTheProgramData,
    operationalMonitoring: operationalMonitoringData,
    processingOfInvoices: processingOfInvoicesData,
    autoOrder: autoOrderData,
    remoteAccess: remoteAccessData,
    installProgramMaterialsAccounting: installProgramMaterialsAccountingData,
    materialsAccounting: materialsAccountingData,
    sectionDescription: sectionDescriptionPharmaciesData,
  },
  wholesalers: {
    description: sectionDescriptionData,
    informationExchange: informationExchangeData,
    dbfEditor: dbfEditorData,
    priceListFormat: priceListFormatData,
    applicationFormat: applicationFormatData,
    invoiceFormat: invoiceFormatData,
    disclaimerFormat: disclaimerFormatData,
    promotionDiscountBonus: promotionDiscountBonusData,
  },
  representatives: {
    report: reportData,
  },
  shared: {
    viewPrice: viewPriceData,
  },
};
