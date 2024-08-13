import { useTranslation } from "react-i18next";
import "./App.css";
import JitterText from "./components/common/JitterText";
import HoverButton from "./components/common/HoverButton";

function App() {
	// async function greet() {
	//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	//   setGreetMsg(await invoke("greet", { name }));
	// }

	const { t } = useTranslation("Root");

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10 justify-around items-center">
			<div className="flex flex-col justify-center items-center">
				<JitterText
					className="text-[#fff314] font-DGM text-8xl"
					text={"Waggle"}
					duration={0.6}
				/>
				<h1 className="text-[#fff314] font-DGM text-xl mt-5">
					{t("header.description")}
				</h1>
			</div>
			<div className="flex gap-10">
				<HoverButton
					text={t("button.signIn")}
					className="text-2xl font-DGM"
					cb={() => {}}
				/>
				<HoverButton
					text={t("button.signUp")}
					className="text-2xl font-DGM"
					cb={() => {}}
				/>
			</div>
		</div>
	);
}

export default App;
