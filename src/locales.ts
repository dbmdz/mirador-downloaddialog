interface Translations {
  close: string;
  downloadOptions: string;
  iiifManifest: string;
  image: string;
  otherDownloadOptions: string;
  pixels: string;
  showDownloadOptions: string;
}

const translations: Record<string, Translations> = {
  de: {
    close: "Schließen",
    downloadOptions: "Download-Optionen",
    iiifManifest: "IIIF-Manifest",
    image: "Einzelbild",
    otherDownloadOptions: "Andere Download-Optionen",
    pixels: "Pixel",
    showDownloadOptions: "Download-Optionen anzeigen",
  },
  en: {
    close: "Close",
    downloadOptions: "Download options",
    iiifManifest: "IIIF manifest",
    image: "Single image",
    otherDownloadOptions: "Other download options",
    pixels: "pixels",
    showDownloadOptions: "Show download options",
  },
  fr: {
    close: "Fermer",
    downloadOptions: "Options de téléchargement",
    iiifManifest: "Manifeste IIIF",
    image: "Image",
    otherDownloadOptions: "Autres liens de téléchargement",
    pixels: "pixels",
    showDownloadOptions: "Afficher les options de téléchargement",
  },
};

export default translations;
