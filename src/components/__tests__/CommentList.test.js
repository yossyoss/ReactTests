import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

//TOTEST
//if shows one 'li' element per comment
//if text from each comment is visible
let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it("create one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});
