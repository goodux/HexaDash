// HexaDash Flasher – DE/EN i18n + Browser-Support-Check
(function () {
  "use strict";

  const STORAGE_KEY = "hexadash-lang";

  const dict = {
    de: {
      "meta.title": "HexaDash Flasher",
      "hero.title": "HexaDash Flash Tool",
      "hero.lead": "Firmware direkt im Browser auf deinen ESP32-C6 aufspielen – ohne Software, ohne Treiber, ohne Kommandozeile.",
      "chip.chip": "Chip: <strong>ESP32-C6</strong>",
      "chip.flash": "Flash: <strong>4 MB</strong>",
      "chip.browser": "Browser: <strong>Chrome / Edge</strong>",
      "chip.usb": "Anschluss: <strong>USB</strong>",

      "install.title": "Firmware installieren",
      "install.sub": "ESP32-C6 per USB anstecken und auf den Button klicken.",
      "install.button": "HexaDash installieren",
      "install.unsupported": "Dein Browser unterstützt Web Serial nicht – bitte Chrome oder Edge am Computer verwenden.",
      "install.notallowed": "Flashen nur über HTTPS oder localhost möglich.",

      "banner.ok": "Dein Browser unterstützt Web Serial – du kannst direkt loslegen.",
      "banner.warn": "Dieser Browser unterstützt Web Serial nicht. Öffne die Seite in <strong>Chrome</strong> oder <strong>Edge</strong> auf einem <strong>Computer</strong> (nicht Handy/Tablet).",

      "steps.title": "So geht's – Schritt für Schritt",
      "steps.1.t": "USB-Datenkabel anstecken",
      "steps.1.d": "Verbinde den ESP32-C6 mit einem echten Datenkabel (nicht nur Ladekabel!) direkt mit dem Computer – möglichst ohne USB-Hub.",
      "steps.2.t": "Port auswählen",
      "steps.2.d": "Klicke auf „HexaDash installieren“. Im Browser-Dialog erscheint ein USB-Serial-/JTAG-Gerät – wähle es aus.",
      "steps.3.t": "Warten",
      "steps.3.d": "Der Flash-Vorgang dauert ca. 1–2 Minuten. Kabel dabei nicht abziehen und die Seite nicht schließen.",
      "steps.4.t": "Fertig",
      "steps.4.d": "Nach „Fertig“ startet der ESP32-C6 neu und HexaDash läuft. Viel Spaß!",

      "trouble.title": "Fehlerbehebung",
      "trouble.1.q": "Im Auswahl-Dialog erscheint kein Gerät",
      "trouble.1.a": "Meist liegt es am Kabel: viele USB-Kabel können nur laden, aber keine Daten übertragen. Nimm ein bekanntes Datenkabel, einen anderen USB-Port (direkt am PC, kein Hub) und prüfe, dass der Stecker fest sitzt.",
      "trouble.2.q": "Windows erkennt das Gerät nicht",
      "trouble.2.a": "Der ESP32-C6 nutzt natives USB-Serial und braucht normalerweise keinen Treiber. Warte nach dem Anstecken kurz, bis Windows das Gerät automatisch eingerichtet hat, und lade dann die Seite neu.",
      "trouble.3.q": "Der Flash-Vorgang bricht ab",
      "trouble.3.a": "Nutze einen USB-Port direkt am Computer (keinen Hub, keine Verlängerung), lade die Seite neu und starte erneut. Ein anderes Kabel kann ebenfalls helfen.",
      "trouble.4.q": "Gerät startet nicht in den Download-Modus",
      "trouble.4.a": "Beim C6 mit nativem USB ist das meist nicht nötig. Falls doch: BOOT-Taste gedrückt halten, während du das Kabel ansteckst, dann loslassen und erneut installieren.",
      "trouble.5.q": "Meldung „Wrong chip“ / falsche Chip-Familie",
      "trouble.5.a": "Diese Seite flasht ausschließlich den ESP32-C6. Stelle sicher, dass wirklich ein ESP32-C6-Board angeschlossen ist.",

      "faq.title": "Häufige Fragen",
      "faq.1.q": "Ist das sicher?",
      "faq.1.a": "Ja. Der Vorgang läuft komplett in deinem Browser über die Web-Serial-Schnittstelle. Es wird nichts hochgeladen; die Firmware wird nur lokal auf dein Gerät geschrieben.",
      "faq.2.q": "Welche Browser funktionieren?",
      "faq.2.a": "Chrome, Edge und Opera auf einem Computer (Windows, macOS, Linux). Firefox und Safari sowie Handys/Tablets unterstützen Web Serial nicht.",
      "faq.3.q": "Werden meine WLAN-Daten übertragen?",
      "faq.3.a": "Nein. Diese Seite sendet keine Zugangsdaten. Wie du dein WLAN einrichtest, steht in der HexaDash-Anleitung.",
      "faq.4.q": "Wie bekomme ich später Updates?",
      "faq.4.a": "Einfach diese Seite erneut öffnen und neu installieren – dabei wird immer die aktuelle Firmware aufgespielt.",

      "footer.note": "Statische Seite · esp-web-tools selbst gehostet · Firmware wird ab Offset <code>0x0</code> geschrieben.",
    },
    en: {
      "meta.title": "HexaDash Flasher",
      "hero.title": "HexaDash Flash Tool",
      "hero.lead": "Install the firmware onto your ESP32-C6 straight from the browser – no software, no drivers, no command line.",
      "chip.chip": "Chip: <strong>ESP32-C6</strong>",
      "chip.flash": "Flash: <strong>4 MB</strong>",
      "chip.browser": "Browser: <strong>Chrome / Edge</strong>",
      "chip.usb": "Connection: <strong>USB</strong>",

      "install.title": "Install firmware",
      "install.sub": "Plug in the ESP32-C6 via USB and click the button.",
      "install.button": "Install HexaDash",
      "install.unsupported": "Your browser does not support Web Serial – please use Chrome or Edge on a computer.",
      "install.notallowed": "Flashing only works over HTTPS or localhost.",

      "banner.ok": "Your browser supports Web Serial – you're good to go.",
      "banner.warn": "This browser does not support Web Serial. Open the page in <strong>Chrome</strong> or <strong>Edge</strong> on a <strong>computer</strong> (not a phone/tablet).",

      "steps.title": "How it works – step by step",
      "steps.1.t": "Connect a USB data cable",
      "steps.1.d": "Connect the ESP32-C6 to your computer with a real data cable (not a charge-only cable!), ideally without a USB hub.",
      "steps.2.t": "Select the port",
      "steps.2.d": "Click “Install HexaDash”. A USB serial/JTAG device shows up in the browser dialog – select it.",
      "steps.3.t": "Wait",
      "steps.3.d": "Flashing takes about 1–2 minutes. Don't unplug the cable and don't close the page.",
      "steps.4.t": "Done",
      "steps.4.d": "After “Done”, the ESP32-C6 reboots and HexaDash starts. Enjoy!",

      "trouble.title": "Troubleshooting",
      "trouble.1.q": "No device appears in the selection dialog",
      "trouble.1.a": "Usually it's the cable: many USB cables can only charge, not transfer data. Use a known data cable, a different USB port (directly on the PC, no hub) and make sure the plug is seated firmly.",
      "trouble.2.q": "Windows doesn't recognise the device",
      "trouble.2.a": "The ESP32-C6 uses native USB serial and normally needs no driver. After plugging in, wait a moment for Windows to set it up automatically, then reload the page.",
      "trouble.3.q": "Flashing aborts partway through",
      "trouble.3.a": "Use a USB port directly on the computer (no hub, no extension cable), reload the page and start again. A different cable can also help.",
      "trouble.4.q": "Device won't enter download mode",
      "trouble.4.a": "With the C6's native USB this is rarely needed. If it is: hold the BOOT button while plugging in the cable, then release and install again.",
      "trouble.5.q": "“Wrong chip” / wrong chip family message",
      "trouble.5.a": "This page only flashes the ESP32-C6. Make sure an ESP32-C6 board is actually connected.",

      "faq.title": "Frequently asked questions",
      "faq.1.q": "Is this safe?",
      "faq.1.a": "Yes. Everything runs locally in your browser via the Web Serial API. Nothing is uploaded; the firmware is written only to your device.",
      "faq.2.q": "Which browsers work?",
      "faq.2.a": "Chrome, Edge and Opera on a computer (Windows, macOS, Linux). Firefox and Safari as well as phones/tablets do not support Web Serial.",
      "faq.3.q": "Is my Wi-Fi data transmitted?",
      "faq.3.a": "No. This page does not send any credentials. See the HexaDash guide for how to set up your Wi-Fi.",
      "faq.4.q": "How do I get updates later?",
      "faq.4.a": "Just open this page again and reinstall – it always flashes the latest firmware.",

      "footer.note": "Static page · esp-web-tools self-hosted · firmware written from offset <code>0x0</code>.",
    },
  };

  function pickInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "de" || saved === "en") return saved;
    return "en"; // Standardsprache: Englisch
  }

  function apply(lang) {
    const table = dict[lang] || dict.de;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] != null) el.innerHTML = table[key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (table[key] != null) document.title = table[key];
    });

    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function checkSupport() {
    const supported = "serial" in navigator;
    const okBanner = document.getElementById("banner-ok");
    const warnBanner = document.getElementById("banner-warn");
    if (okBanner) okBanner.hidden = !supported;
    if (warnBanner) warnBanner.hidden = supported;
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(pickInitialLang());
    checkSupport();
    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.addEventListener("click", () => apply(b.dataset.lang));
    });
  });
})();
