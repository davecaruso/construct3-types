import { IWorldInstance } from "../IWorldInstance";

/** The `ITextInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [Sprite font plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/sprite-font). */
export class ITextInstance<Vars = undefined | { [key: string]: any }> extends IWorldInstance<Vars> {
  /** The string currently displayed by the Sprite Font object. */
  text: string;
  /** Set the text over time by starting with an empty string and gradually adding characters until the full text of `str` is written out, over a `duration` specified in seconds. Note modifying the `text` property while text is being written out will cancel the effect. */
  typewriterText(str: string, duration: number): void;
  /** If text is being written out with the typewriterText() method, force it to finish immediately. */
  typewriterFinish(): void;
  /**
   * An array with 3 elements specifying the red, green and blue color of the text, with color values as floats in the 0-1 range.
   *
   * **Note**: Try not to confuse this with the IWorldInstance property `colorRgb`, which applies a color tint to the overall appearance of the object.
   */
  fontColor: [number, number, number];
  /** A string specifying the font used to display the text, e.g. "Arial". */
  fontFace: string;
  /** Boolean indicating whether the font face is displayed with bold style. */
  isBold: boolean;
  /** Boolean indicating whether the font face is displayed with italic style. */
  isItalic: boolean;
  /** The size of the displayed text, in points (pt). */
  sizePt: number;
  /** The extra space in pixels to add vertically between lines. 0 is the default size, negative values make lines closer together, and positive values space lines out further apart. */
  lineHeight: number;
  /** A string specifying the horizontal alignment of the text within the object bounding box. */
  horizontalAlign: "left" | "center" | "right";
  /** A string specifying the vertical alignment of the text within the object bounding box. */
  verticalAlign: "top" | "center" | "bottom";
  /** A string specifying the way to wrap text when it reaches the end of a line. This can be either `"word"` to wrap entire space-separated words, or `"character"` to wrap at any character. */
  wordWrapMode: "character" | "word";
}
