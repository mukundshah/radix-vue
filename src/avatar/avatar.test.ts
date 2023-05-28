import { describe, expect, it, beforeAll, afterAll, beforeEach } from "vitest";

import { render } from "@testing-library/vue";
import type { RenderResult } from "@testing-library/vue";
import { axe, toHaveNoViolations } from "jest-axe";
// import {toBeInTheDocument} from "@testing-library/jest-dom";

import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const ROOT_TEST_ID = "avatar-root";
const FALLBACK_TEXT = "AB";
const IMAGE_ALT_TEXT = "Fake Avatar";
const DELAY = 300;

expect.extend(toHaveNoViolations);

describe("given an Avatar with fallback and no image", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(Avatar, {
      attrs: {
        "data-testid": ROOT_TEST_ID,
      },
      slots: {
        default: () => `<AvatarFallback>${FALLBACK_TEXT}</AvatarFallback>`,
      },
      global: {
        components: {
          Avatar,
          AvatarFallback,
        },
      },
    });
  });

  it("should have no acessibility violations", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

describe("given an Avatar with fallback and a working image", () => {
  let rendered: RenderResult;
  let image: HTMLElement | null = null;
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {};
      src: string = "";
      constructor() {
        setTimeout(() => {
          this.onload();
        }, DELAY);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  beforeEach(() => {
    rendered = render(Avatar, {
      attrs: {
        "data-testid": ROOT_TEST_ID,
      },
      slots: {
        default: `
        <AvatarFallback>${FALLBACK_TEXT}</AvatarFallback>
        <AvatarImage src="fake-avatar.png" alt="${IMAGE_ALT_TEXT}"></AvatarImage>
        `,
      },
      global: {
        components: {
          Avatar,
          AvatarImage,
          AvatarFallback,
        },
      },
    });
  });

  it("should render the fallback initially", () => {
    const fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).toBeInTheDocument();
  });

  it("should not render the image initially", () => {
    image = rendered.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  it("should render the image after it has loaded", async () => {
    image = await rendered.findByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("should have alt text on the image", async () => {
    image = await rendered.findByAltText(IMAGE_ALT_TEXT);
    expect(image).toBeInTheDocument();
  });
});

describe("given an Avatar with fallback and delayed render", () => {
  let rendered: RenderResult;
  let fallback: HTMLElement | null;

  beforeEach(() => {
    rendered = render(Avatar, {
      attrs: {
        "data-testid": ROOT_TEST_ID,
      },
      slots: {
        default: `<AvatarFallback :delay-ms="${DELAY}">${FALLBACK_TEXT}</AvatarFallback>`,
      },
      global: {
        components: {
          Avatar,
          AvatarImage,
          AvatarFallback,
        },
      },
    });
  });

  it("should not render a fallback immediately", () => {
    fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).not.toBeInTheDocument();
  });

  it("should render a fallback after the delay", async () => {
    fallback = rendered.queryByText(FALLBACK_TEXT);
    expect(fallback).not.toBeInTheDocument();
    fallback = await rendered.findByText(FALLBACK_TEXT);
    expect(fallback).toBeInTheDocument();
  });
});
