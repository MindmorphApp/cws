export interface GameContent {
	title: string;
	part: {
		chapter: number;
		section: number;
		choice: number;
	};
	scene: {
		character: string;
		dialog: { text: string; position: string }[];
		voices: { text: string; position: string }[];
	};
	sound: string;
	text: string;
	choices: {
		text: string;
		resilience: number;
		goTo: string;
	}[];
}

export interface LottieAsElement extends HTMLElement {
	play(): void;
	pause(): void;
}
