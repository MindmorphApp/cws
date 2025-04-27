export type Position = { x: number; y: number };

export type AnimationFunction = (
	ratio: number,
	centerY: number,
	amplitude: number,
	height: number
) => number;

export class Animator {
	private t = 0;
	private frameId: number | null = null;

	constructor(
		private readonly width: number,
		private readonly height: number,
		private readonly animFn: AnimationFunction,
		private readonly time: number = 10,
		private readonly speed: number = 0.01
	) {}

	// Get current ratio (normalized 0..1)
	public get progress(): number {
		return this.t / this.time;
	}

	public set progress(progress: number) {
		this.t = progress * this.time;
	}

	// Get static position at a given ratio
	public getPositionAt(r: number): Position {
		const amplitude = this.height / 20;
		const x = r * this.width;
		const y = this.animFn(r, this.height / 2, amplitude, this.height);
		return { x, y };
	}

	// Start animation loop, calls update with current position (x, y)
	public start(update: (pos: Position) => void): void {
		const step = () => {
			const r = this.progress;
			const { x, y } = this.getPositionAt(r);
			update({ x, y });

			this.t = this.t >= this.time ? 0 : this.t + this.speed;
			this.frameId = requestAnimationFrame(step);
		};

		this.stop(); // Avoid double animations
		this.frameId = requestAnimationFrame(step);
	}

	// Stop animation loop
	public stop(): void {
		if (this.frameId !== null) {
			cancelAnimationFrame(this.frameId);
			this.frameId = null;
		}
	}

	public reset(): void {
		this.t = 0;
	}
}
