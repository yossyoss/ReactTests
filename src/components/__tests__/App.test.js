import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//TOTEST
//if shows a comment box
//if shows a comment list

let wrapped;
beforeEach(() => { //will run before each test in this document
    wrapped = shallow(<App />);
});
it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
