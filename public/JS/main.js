//= ==============================================================================

const PK_FORM_TYPE_FILE = 1;
const PK_FORM_TYPE_KM = 2;
const PK_FORM_TYPE_KSP = 3;

//= ==============================================================================

// Налаштування бібліотеки
const euSettings = {
  language: 'uk',
  encoding: 'utf-8',
  httpProxyServiceURL: 'Server/ProxyHandler.php',
  directAccess: true,
  CAs: './Data/CAs.json',
  CACertificates: './Data/CACertificates.p7b',
  allowedKeyMediaTypes: [
    'е.ключ ІІТ Алмаз-1К',
    'е.ключ ІІТ Кристал-1',
    'ID-карта громадянина (БЕН)',
    'е.ключ ІІТ Алмаз-1К (PKCS#11)',
    'е.ключ ІІТ Кристал-1 (PKCS#11)',
  ],
  // Реєстрація хмарних провайдерів
  KSPs: [
    {
      name: 'ІІТ - хмарний підпис (2)',
      ksp: EndUserConstants.EndUserKSP.IIT,
      address: 'https://sserver2.iit.com.ua',
      port: '443',
    },
  ],
};

// Бібліотека для роботи з файловими ключами та серверами підпису, що не потребує
// встановлення додатково ПЗ
const euSignFile = new EndUser(
  'JS\\euscp.worker.ex.js',
  EndUserConstants.EndUserLibraryType.JS,
);

// Бібліотека для роботи з аппаратними носіями, що потребує
// встановлення додатково ПЗ бібліотек веб-підпису, веб-розширення для браузера
const euSignKeyMedia = new EndUser(
  null,
  EndUserConstants.EndUserLibraryType.SW,
);
let keyMedias = [];

let euSign = euSignFile;
let formType = PK_FORM_TYPE_FILE;

//= ==============================================================================

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function (evt) {
      if (evt.target.readyState != FileReader.DONE) { return; }

      resolve({
        file,
        data: new Uint8Array(evt.target.result),
      });
    };
    reader.readAsArrayBuffer(file);
  });
}

//= ==============================================================================

function setKeyMedias(_keyMedias) {
  keyMedias = _keyMedias;

  const kmSelect = document.getElementById('pkKeyMediaSelect');

  const { length } = kmSelect.options;
  for (i = length - 1; i >= 0; i--) {
	  kmSelect.options[i] = null;
  }

  for (var i = 0; i < keyMedias.length; i++) {
    const opt = document.createElement('option');
    opt.appendChild(document.createTextNode(keyMedias[i].visibleName));
    opt.value = keyMedias[i].visibleName;
    kmSelect.appendChild(opt);
  }
}

//= ==============================================================================

function getSelectedKeyMedia() {
  const kmSelected = document.getElementById('pkKeyMediaSelect').value;

  for (let i = 0; i < keyMedias.length; i++) {
    if (keyMedias[i].visibleName == kmSelected) { return keyMedias[i]; }
  }

  return null;
}

//= ==============================================================================

function setKSPs() {
  const kspSelect = document.getElementById('pkKSPSelect');

  const { length } = kspSelect.options;
  for (i = length - 1; i >= 0; i--) {
    kspSelect.options[i] = null;
  }

  for (var i = 0; i < euSettings.KSPs.length; i++) {
    const opt = document.createElement('option');
    opt.appendChild(document.createTextNode(
      euSettings.KSPs[i].name,
    ));
    opt.value = euSettings.KSPs[i].name;
    kspSelect.appendChild(opt);
  }
}

//= ==============================================================================

function getSelectedKSP() {
  const kspSelected = document.getElementById('pkKSPSelect').value;

  for (let i = 0; i < euSettings.KSPs.length; i++) {
    if (euSettings.KSPs[i].name == kspSelected) { return euSettings.KSPs[i]; }
  }

  return null;
}

//= ==============================================================================

/*
	Обробник сповіщень на підтвердження операції з використання ос. ключа
	за допомогою сканування QR-коду в мобільному додатку сервісу підпису
*/
function onConfirmKSPOperation(kspEvent) {
  let node = '';
  node += `<a href="${kspEvent.url}">`;
  node += 	`<img src="data:image/bmp;base64,${
    kspEvent.qrCode}" style="padding: 10px; background: white;">`;
  node += '</a>';

  document.getElementById('pkKSPQRImageBlock').innerHTML = node;
  document.getElementById('pkKSPQRBlock').style.display = 'block';
}

//= ==============================================================================

function setLibraryType(type) {
  const pkFileBlock = document.getElementById('pkFileBlock');
  const pkKeyMediaBlock = document.getElementById('pkKeyMediaBlock');
  const pkKSPBlock = document.getElementById('pkKSPBlock');
  const signBlock = document.getElementById('signBlock');

  formType = type;

  switch (type) {
    case PK_FORM_TYPE_FILE:
      pkFileBlock.style.display = 'block';
      pkKeyMediaBlock.style.display = 'none';
      pkKSPBlock.style.display = 'none';
      signBlock.style.display = 'none';
      euSign = euSignFile;
      break;

    case PK_FORM_TYPE_KM:
      pkFileBlock.style.display = 'none';
      pkKeyMediaBlock.style.display = 'block';
      pkKSPBlock.style.display = 'none';
      signBlock.style.display = 'none';
      euSign = euSignKeyMedia;
      break;

    case PK_FORM_TYPE_KSP:
      pkFileBlock.style.display = 'none';
      pkKeyMediaBlock.style.display = 'none';
      pkKSPBlock.style.display = 'block';
      signBlock.style.display = 'none';
      euSign = euSignFile;
      break;
  }

  initialize()
    .then(() => {
      if (euSign == euSignFile) { return []; }

      return euSign.GetKeyMedias();
    })
    .then((keyMedias) => {
      setKeyMedias(keyMedias);

      signBlock.style.display = 'block';
    })
    .catch((e) => {
      const msg = (e.message || e);

      console.log(`Initialize error: ${msg}`);

      alert(`${'Виникла помилка при ініціалізації бібліотеки. '
			+ 'Опис помилки: '}${msg}`);
    });
}

//= ==============================================================================

// Ініціалізація бібліотеки
function initialize() {
  return new Promise((resolve, reject) => {
    let isInitialized = false;

    if (euSign == euSignFile) {
      euSign.IsInitialized()
        .then((result) => {
          isInitialized = result;
          if (isInitialized) {
            console.log('EndUser: JS library already initialized');
            return;
          }

          console.log('EndUser: JS library initializing...');
          return euSign.Initialize(euSettings);
        }).then(() => {
          if (isInitialized) { return; }

          console.log('EndUser: JS library initialized');

          setKSPs();

          console.log('EndUser: event listener for KSPs registering...');

          return euSign.AddEventListener(
            EndUserConstants.EndUserEventType.ConfirmKSPOperation,
            onConfirmKSPOperation,
          );
        }).then(() => {
          if (!isInitialized) { console.log('EndUser: event listener for KSPs registered'); }

          isInitialized = true;
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    } else {
      // Перевірка чи встановлені необхідні модулі для роботи криптографічної бібліотеки
      euSign.GetLibraryInfo()
        .then((result) => {
          if (!result.supported) {
            throw 'Бібліотека web-підпису не підтримується '
						+ 'в вашому браузері або ОС';
          }

          if (!result.loaded) {
            // Бібліотека встановлена, але потребує оновлення
            if (result.isNativeLibraryNeedUpdate) {
              throw `${'Бібліотека web-підпису потребує оновлення. '
							+ 'Будь ласка, встановіть оновлення за посиланням '}${
                result.nativeLibraryInstallURL}`;
            }

            // Якщо браузер підтримує web-розширення рекомендується
            // додатково до нативних модулів встановлювати web-розширення
            // Увага! Встановлення web-розширень ОБОВ'ЯЗКОВЕ для ОС Linux та ОС Windows Server
            if (result.isWebExtensionSupported
						&& !result.isWebExtensionInstalled) {
              throw `${'Бібліотека web-підпису потребує встановлення web-розширення. '
							+ 'Будь ласка, встановіть web-розширення за посиланням '}${
                result.webExtensionInstallURL} та оновіть сторінку`;
            }

            // Бібліотека (нативні модулі) не встановлені
            throw `${'Бібліотека web-підпису потребує встановлення. '
						+ 'Будь ласка, встановіть бібліотеку за посиланням '}${
              result.nativeLibraryInstallURL} та оновіть сторінку`;
          }

          return euSign.IsInitialized();
        })
        .then((result) => {
          isInitialized = result;
          if (isInitialized) {
            console.log('EndUser: SW library already initialized');
            return;
          }

          console.log('EndUser: SW library initializing...');
          return euSign.Initialize(euSettings);
        }).then(() => {
          if (!isInitialized) { console.log('EndUser: SW library initialized'); }

          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
}

//= ==============================================================================

function readPrivateKey() {
  const pkFileInput = formType == PK_FORM_TYPE_FILE
    ? document.getElementById('pkFile') : null;
  const passwordInput = formType != PK_FORM_TYPE_KSP
    ? document.getElementById(formType == PK_FORM_TYPE_FILE
      ? 'pkFilePassword' : 'pkKeyMediaPassword') : null;
  const selectedKM = formType == PK_FORM_TYPE_KM ? getSelectedKeyMedia() : null;
  const kmSelect = document.getElementById('pkKeyMediaSelect');
  const ksp = formType == PK_FORM_TYPE_KSP ? getSelectedKSP() : null;
  const userIdInput = formType == PK_FORM_TYPE_KSP
    ? document.getElementById('pkKSPUserId') : null;
  /*
		Загальне ім'я ЦСК з списку CAs.json, який видав сертифікат для ос. ключа.
		Якщо null бібліотека намагається визначити ЦСК автоматично за
		сервером CMP\сертифікатом. Встановлюється у випадках, коли ЦСК не
		підтримує CMP, та для пришвидшення пошуку сертифіката ос. ключа
	*/
  const caCN = null;
  /*
		Сертифікати, що відповідають ос. ключу (масив об'єктів типу Uint8Array).
		Якщо null бібліотека намагається завантажити їх з ЦСК автоматично з сервера CMP.
		Встановлюється у випадках, коли ЦСК не підтримує CMP, та для пришвидшення
		пошуку сертифіката ос. ключа
	*/
  let pkCertificates = null;

  return new Promise((resolve, reject) => {
    switch (formType) {
      case PK_FORM_TYPE_FILE:
        if (pkFileInput.value == null
					|| pkFileInput.value == '') {
          pkFileInput.focus();

          reject('Не обрано файл з ос. ключем');

          return;
        }

        if (passwordInput.value == null
					|| passwordInput.value == '') {
          passwordInput.focus();
          reject('Не вказано пароль до ос. ключа');

          return;
        }

        readFile(pkFileInput.files[0])
          .then((result) => {
            console.log('Private key file readed');

            // Якщо файл з ос. ключем має розширення JKS, ключ може містити декілька ключів,
            // для зчитування такого ос. ключа необхіно обрати який ключ повинен зчитуватися
            if (result.file.name.endsWith('.jks')) {
              return euSign.GetJKSPrivateKeys(result.data)
                .then((jksKeys) => {
                  console.log('EndUser: jks keys got');

                  // Для спрощення прикладу обирається перший ключ
                  const pkIndex = 0;

                  pkCertificates = [];
                  for (let i = 0; i < jksKeys[pkIndex].certificates.length; i++) { pkCertificates.push(jksKeys[pkIndex].certificates[i].data); }

                  return euSign.ReadPrivateKeyBinary(
                    jksKeys[pkIndex].privateKey,
                    passwordInput.value,
                    pkCertificates,
                    caCN,
                  );
                });
            }

            return euSign.ReadPrivateKeyBinary(result.data, passwordInput.value, pkCertificates, caCN);
          })
          .then((result) => {
            resolve(result);
          })
          .catch((e) => {
            reject(e);
          });

        break;

      case PK_FORM_TYPE_KM:
        if (!selectedKM) {
          kmSelect.focus();

          reject('Не обрано носій з ос. ключем');

          return;
        }

        if (passwordInput.value == null
					|| passwordInput.value == '') {
          passwordInput.focus();
          reject('Не вказано пароль до ос. ключа');

          return;
        }

        var keyMedia = new EndUserKeyMedia(selectedKM);
        keyMedia.password = passwordInput.value;

        euSign.ReadPrivateKey(keyMedia, pkCertificates, caCN)
          .then((result) => {
            resolve(result);
          })
          .catch((e) => {
            reject(e);
          });

        break;

      case PK_FORM_TYPE_KSP:
        if (ksp == null) {
          reject('Не обрано сервіс підпису');

          return;
        }

        if (!ksp.confirmationURL
					&& (userIdInput.value == null
					|| userIdInput.value == '')) {
          userIdInput.focus();

          reject('Не вказано ідентифікатор користувача');

          return;
        }

        document.getElementById('pkKSPQRImageLabel').innerHTML = 				'Відскануйте QR-код для зчитування ос. ключа в моб. додатку:';

        euSign.ReadPrivateKeyKSP(!ksp.confirmationURL
          ? userIdInput.value : '', ksp.name)
          .then((result) => {
            document.getElementById('pkKSPQRBlock').style.display = 'none';
            resolve(result);
          })
          .catch((e) => {
            document.getElementById('pkKSPQRBlock').style.display = 'none';
            reject(e);
          });

        break;
    }
  });
}

//= ==============================================================================

function signData() {
  const dataInput = document.getElementById('data-textarea');
  const signInput = document.getElementById('sign-textarea');

  readPrivateKey()
    .then((result) => {
      if (result) {
        console.log(`EndUser: private key readed ${result.subjCN}.`);
      }

      if (formType == PK_FORM_TYPE_KSP) {
        document.getElementById('pkKSPQRImageLabel').innerHTML =					'Відскануйте QR-код для підпису в моб. додатку:';
      }

      return euSign.SignDataInternal(true, dataInput.value, true);
    })
    .then((sign) => {
      console.log('EndUser: data signed');
      console.log(`Data: ${dataInput.value}`);
      console.log(`Sign: ${sign}`);

      signInput.value = sign;

      if (formType == PK_FORM_TYPE_KSP) { document.getElementById('pkKSPQRBlock').style.display = 'none'; }

      alert('Дані успішно підписані');
    })
    .catch((e) => {
      if (formType == PK_FORM_TYPE_KSP) { document.getElementById('pkKSPQRBlock').style.display = 'none'; }

      const msg = (e.message || e);

      console.log(`Sign data error: ${msg}`);

      alert(`${'Виникла помилка при підписі даних. '
			+ 'Опис помилки: '}${msg}`);
    });
}

//= ==============================================================================

window.onload = function () {
  document.getElementById('pkTypeFile').addEventListener('click', () => {
    setLibraryType(PK_FORM_TYPE_FILE);
  }, false);

  document.getElementById('pkTypeKeyMedia').addEventListener('click', () => {
    setLibraryType(PK_FORM_TYPE_KM);
  }, false);

  document.getElementById('pkTypeKSP').addEventListener('click', () => {
    setLibraryType(PK_FORM_TYPE_KSP);
  }, false);

  document.getElementById('pkKSPSelect').addEventListener('change', () => {
    const ksp = getSelectedKSP();
    document.getElementById('pkKSPUserIdBlock').style.display = 				(ksp != null && ksp.confirmationURL)
      ? 'none' : 'block';
  }, false);

  document.getElementById('sign-button').addEventListener('click', signData, false);

  setLibraryType(PK_FORM_TYPE_FILE);
};

//= ==============================================================================
