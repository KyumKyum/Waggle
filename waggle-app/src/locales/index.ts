import { initReactI18next } from "react-i18next";

import i18next from "i18next";
import en from "./en";
import ko from "./ko";

export default function loadTranslator() {
	i18next.use(initReactI18next).init({
		resources: {
			en,
			ko,
		},
		fallbackLng: "en",
	});
}
