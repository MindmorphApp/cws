export interface GameContent {
	title: string;
	part: {
		chapter: number;
		section: number;
		choice: number;
	};
	scene: {
		character: string;
		dialog: { text: string; position: 'left' | 'right' }[];
		voices: {
			text: string;
			animation: 'wave' | 'curve';
			position: 'left' | 'right';
		}[];
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
