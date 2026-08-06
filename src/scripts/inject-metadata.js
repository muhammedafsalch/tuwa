const fs = require('fs');
const path = require('path');

const arPath = path.join(__dirname, '../i18n/dictionaries/ar.json');
const mlPath = path.join(__dirname, '../i18n/dictionaries/ml.json');

const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));
const ml = JSON.parse(fs.readFileSync(mlPath, 'utf8'));

const metadataAr = {
  about: { title: "من نحن | طوى لحلول الأعمال", description: "تعرف على طوى لحلول الأعمال، شريكك الموثوق لتأسيس الشركات في قطر." },
  blog: { title: "المدونة | طوى لحلول الأعمال", description: "اقرأ أحدث الرؤى والأدلة حول تأسيس الشركات والخدمات في قطر." },
  careers: { title: "الوظائف | طوى لحلول الأعمال", description: "انضم إلى فريق طوى لحلول الأعمال وابدأ مسيرتك المهنية في قطر." },
  contact: { title: "اتصل بنا | طوى لحلول الأعمال", description: "تواصل مع طوى لحلول الأعمال لخدمات الشركات المتميزة في قطر." },
  'core-advantage': { title: "الميزة الأساسية | طوى لحلول الأعمال", description: "اكتشف الميزة الأساسية لاختيار طوى لتأسيس أعمالك في قطر." },
  'industries-we-serve': { title: "القطاعات التي نخدمها | طوى لحلول الأعمال", description: "نقدم حلول أعمال مخصصة لقطاعات مختلفة في قطر." },
  'our-process': { title: "عمليتنا | طوى لحلول الأعمال", description: "تعرف على عمليتنا المبسطة لتأسيس الشركات في قطر." },
  privacy: { title: "سياسة الخصوصية | طوى لحلول الأعمال", description: "سياسة الخصوصية الخاصة بطوى لحلول الأعمال." },
  quote: { title: "اطلب عرض سعر | طوى لحلول الأعمال", description: "اطلب عرض سعر لخدمات الشركات وتأسيس الأعمال في قطر." },
  services: { title: "خدماتنا | طوى لحلول الأعمال", description: "استكشف خدماتنا الاحترافية لتأسيس الشركات في قطر." },
  terms: { title: "الشروط والأحكام | طوى لحلول الأعمال", description: "الشروط والأحكام الخاصة بطوى لحلول الأعمال." }
};

const metadataMl = {
  about: { title: "ഞങ്ങളെക്കുറിച്ച് | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ കമ്പനി രൂപീകരണത്തിനായുള്ള നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളിയായ തുവ ബിസിനസ് സൊല്യൂഷൻസിനെക്കുറിച്ച് അറിയുക." },
  blog: { title: "ബ്ലോഗ് | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ കമ്പനി രൂപീകരണത്തെയും സേവനങ്ങളെയും കുറിച്ചുള്ള ഏറ്റവും പുതിയ വിവരങ്ങൾ വായിക്കുക." },
  careers: { title: "കരിയർ | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "തുവ ബിസിനസ് സൊല്യൂഷൻസിൽ ചേരുക, ഖത്തറിൽ നിങ്ങളുടെ കരിയർ ആരംഭിക്കുക." },
  contact: { title: "ബന്ധപ്പെടുക | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ മികച്ച കോർപ്പറേറ്റ് സേവനങ്ങൾക്കായി തുവ ബിസിനസ് സൊല്യൂഷൻസുമായി ബന്ധപ്പെടുക." },
  'core-advantage': { title: "പ്രധാന നേട്ടം | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിൽ നിങ്ങളുടെ ബിസിനസ്സ് ആരംഭിക്കുന്നതിന് തുവയെ തിരഞ്ഞെടുക്കുന്നതിന്റെ പ്രധാന നേട്ടങ്ങൾ കണ്ടെത്തുക." },
  'industries-we-serve': { title: "ഞങ്ങൾ സേവനം നൽകുന്ന വ്യവസായങ്ങൾ | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ വിവിധ വ്യവസായങ്ങൾക്ക് അനുയോജ്യമായ ബിസിനസ്സ് പരിഹാരങ്ങൾ ഞങ്ങൾ നൽകുന്നു." },
  'our-process': { title: "ഞങ്ങളുടെ പ്രക്രിയ | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിൽ കമ്പനി രൂപീകരിക്കുന്നതിനുള്ള ഞങ്ങളുടെ ലളിതമായ പ്രക്രിയയെക്കുറിച്ച് അറിയുക." },
  privacy: { title: "സ്വകാര്യതാ നയം | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "തുവ ബിസിനസ് സൊല്യൂഷൻസിന്റെ സ്വകാര്യതാ നയം." },
  quote: { title: "ക്വോട്ട് അഭ്യർത്ഥിക്കുക | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ കോർപ്പറേറ്റ് സേവനങ്ങൾക്കും കമ്പനി രൂപീകരണത്തിനുമായി ഒരു ക്വോട്ട് അഭ്യർത്ഥിക്കുക." },
  services: { title: "ഞങ്ങളുടെ സേവനങ്ങൾ | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "ഖത്തറിലെ പ്രൊഫഷണൽ കമ്പനി രൂപീകരണ സേവനങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക." },
  terms: { title: "നിബന്ധനകളും വ്യവസ്ഥകളും | തുവ ബിസിനസ് സൊല്യൂഷൻസ്", description: "തുവ ബിസിനസ് സൊല്യൂഷൻസിന്റെ നിബന്ധനകളും വ്യവസ്ഥകളും." }
};

for (const key of Object.keys(metadataAr)) {
  if (!ar[key]) ar[key] = {};
  ar[key].metadata = metadataAr[key];
}

for (const key of Object.keys(metadataMl)) {
  if (!ml[key]) ml[key] = {};
  ml[key].metadata = metadataMl[key];
}

fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
fs.writeFileSync(mlPath, JSON.stringify(ml, null, 2));

console.log('Injected metadata into AR and ML dictionaries.');
