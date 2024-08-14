import i18next from "i18next";
import Language from "../../assets/language.svg?react";

export default function LanguageButton() {
	return (
		<button
			type="button"
			onClick={() => {
				const lang = localStorage.getItem("language") === "ko" ? "en" : "ko"; //* language change
				i18next.changeLanguage(lang);
				localStorage.setItem("language", lang);
				console.log(lang);
			}}
			className="transition hover:scale-125 duration-300"
		>
			<Language width={"25px"} height={"25px"} stroke="#fff314" />
		</button>
	);
}
