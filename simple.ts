interface SigmoidConfig {
    /** Controls the value that represents 100% activation.
     *  The default value is 1.
     *  Must be greater than 0.
     *  You probably don't want to change this. */
    scale?: number;
    /** Controls the value that causes 50% activation.
     * Any real number is allowed. */
    bias: number;
    /** Positive number that controls how quickly the function
     * will activate. It also controls if activation increases
     * or decreases with the value of x. */
    weight: number;
}

/** Configure a sigmoid function */
export function create(conf: SigmoidConfig) {
    const { bias, weight, scale = 1 } = conf;
    const fnScale = (1 / scale);
    return function (x: number): number {
        return 1 / (fnScale + (Math.E ** -((x * weight) - bias)));
    }
}