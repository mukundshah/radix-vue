import { axe } from "jest-axe";
import type { RenderResult } from "@testing-library/vue";
import { render } from "@testing-library/vue";
import { AccessibleIcon } from "./accessible-icon";
import { defineComponent, h } from "vue";

const LABEL_TEXT = "Close";

const AccessibleIconTest = defineComponent(
  (props, { slots }) => {
    return () => h(AccessibleIcon, { label: LABEL_TEXT }, slots);
  },
  {
    name: "AccessibleIconTest",
  }
);

describe("given a default AccessibleIcon", () => {
  let rendered: RenderResult;
  let label: HTMLElement;

  beforeEach(() => {
    rendered = render(AccessibleIconTest, {
      slots: {
        default: `
          <svg
            viewBox="0 0 32 32"
            width=24
            height=24
            fill="none"
            stroke="currentColor"
            data-testid="icon"
          >
            <path d="M2 30 L30 2 M30 30 L2 2" />
          </svg>`,
      },
    });

    label = rendered.getByText(LABEL_TEXT);
  });

  it("should have no accessibility violations", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it("should have a label", () => {
    expect(label).toBeInTheDocument();
  });

  it("should add an aria-hidden attribute to the child", () => {
    console.log("rendered", rendered.html());
    const svg = rendered.getByTestId("icon");
    console.log("svg", svg.outerHTML);
    expect(svg.getAttribute("aria-hidden")).toBe("true");
  });

  it("should set focusable attribute on the child to false", () => {
    const svg = rendered.getByTestId("icon");
    expect(svg.getAttribute("focusable")).toBe("false");
  });
});

describe("given an AccessibleIcon without children", () => {
  it("should error", () => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = vi.spyOn(console, "error");
    spy.mockImplementation(() => {});

    expect(() => render(AccessibleIconTest)).toThrowError();

    spy.mockRestore();
  });
});
