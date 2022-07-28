import { create } from "./simple";

describe("create()", () => {
  it("creates a sigmoid function", () => {
    const sigmoid = create({ bias: 0, weight: 2 });
    const accuracy = 2;
    expect(sigmoid(-3)).toBeCloseTo(0, accuracy);
    expect(sigmoid(-1.1)).toBeCloseTo(0.1, accuracy);
    expect(sigmoid(0)).toBeCloseTo(0.5, accuracy);
    expect(sigmoid(1.1)).toBeCloseTo(0.9, accuracy);
    expect(sigmoid(3)).toBeCloseTo(1, accuracy);
  });

  it("creates a NOT gate", () => {
    const notGate = create({ bias: 0, weight: -8 });
    expect(Math.round(notGate(0))).toBe(1);
    expect(Math.round(notGate(1))).toBe(0);
  });
});
