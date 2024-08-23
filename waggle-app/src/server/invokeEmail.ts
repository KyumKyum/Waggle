import { invoke } from "@tauri-apps/api/core";

export const checkEmailExistence = async (email: string): Promise<boolean> => {
	return await invoke("check_email_existence", { email });
};
