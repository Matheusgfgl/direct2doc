import dayjs from 'dayjs';

// Plugins
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import UpdateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';
import utc from 'dayjs/plugin/utc';

// Locale
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en';
import 'dayjs/locale/es';

// Extends
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.extend(localeData);
dayjs.extend(UpdateLocale);
dayjs.extend(utc);

// Configs
const browserLocale = (window.navigator.userLanguage || window.navigator.language).replace(/_/g, '-').toLowerCase();

dayjs.locale(browserLocale);
// Export
export default dayjs;
