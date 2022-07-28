type NeuronInput = [value: number, weight: number][];

/** The sigmoid function in `simple.ts` does not support
 * weight adjustments and only accepts a single input.
 * This version accepts an array of inputs along with
 * a dynamic weight. */
export function create(bias: number) {
    return function (input: NeuronInput): number {
        const sum = input
            .map(([v, weight]) => v * weight)
            .reduce((partialSum, a) => partialSum + a, 0);
        return 1 / (1 + (Math.E ** -(sum - bias)));
    }
}
