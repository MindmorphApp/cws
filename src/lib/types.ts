export interface GameContent {
	title: string;
	part: {
		chapter: number;
		section: number;
		choice: number;
	};
	image: {
		character: string;
		dialog: { text: string }[];
		voices: { text: string }[];
	};
	sound: string;
	text: string;
	choices: {
		text: string;
		resilience: number;
		goTo: string;
	}[];
}

export interface LottiePlayerElement extends HTMLElement {
	play(): void;
	pause(): void;
}
