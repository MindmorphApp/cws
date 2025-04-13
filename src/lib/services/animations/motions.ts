import type { AnimationFunction } from './animator';

export const slitherMotion: AnimationFunction = (
	r,
	centerY,
	amplitude,
	height
) => {
	const base = 256 * r ** 5 - 640 * r ** 4 + 480 * r ** 3 - 96 * r ** 2;
	const maxAmplitude = Math.min(centerY, height - centerY, amplitude);
	return centerY - base * maxAmplitude;
};
