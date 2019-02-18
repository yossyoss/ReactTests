import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
//TOTEST
//if showa a text area and a button
//if USers can enter input into the text area
//when the input is submitted, textarea should get emptied

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});
it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
