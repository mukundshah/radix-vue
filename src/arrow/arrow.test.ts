import { axe } from "jest-axe";
import type { RenderResult } from "@testing-library/vue";
import { render } from "@testing-library/vue";
import { Arrow } from "./arrow";

const WIDTH = 40;
const HEIGHT = 30;

describe("given a default Arrow", () => {
  let rendered: RenderResult;
  let svg: HTMLElement;

  beforeEach(() => {
    rendered = render(Arrow, {
      attrs: {
        "data-testid": "test-arrow",
      },
    });
    svg = rendered.getByTestId("test-arrow");
  });

  it("should have no accessibility violations", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it("should have width attribute", () => {
    expect(svg).toHaveAttribute("width", "10");
  });

  it("should have height attribute", () => {
    expect(svg).toHaveAttribute("height", "5");
  });
});

describe("given an Arrow with custom width and height", () => {
  let rendered: RenderResult;
  let svg: HTMLElement;

  beforeEach(() => {
    rendered = render(Arrow, {
      props: {
        width: WIDTH,
        height: HEIGHT,
      },
      attrs: {
        "data-testid": "test-arrow",
      },
    });
    svg = rendered.getByTestId("test-arrow");
  });

  it("should have no accessibility violations", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it("should have width attribute", () => {
    expect(svg).toHaveAttribute("width", String(WIDTH));
  });

  it("should have height attribute", () => {
    expect(svg).toHaveAttribute("height", String(HEIGHT));
  });
});
