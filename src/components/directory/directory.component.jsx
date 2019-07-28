import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory-selector";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className={"directory-menu"}>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
