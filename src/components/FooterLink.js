import React from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { visibilityFilter } from "../redux/actions/visibilityFilter";

const FooterLink = ({ activeBtn, toggleFilter, children }) => (
  <TouchableOpacity
    onPress={toggleFilter}
    style={{
      justifyContent: "center",
      alignItems: "center",
      width: "33.3%",
      height: 50,
      backgroundColor: activeBtn ? "darkblue" : "#0000cc"
    }}
  >
    {children}
  </TouchableOpacity>
);

const mapStateToProps = (state, ownProps) => ({
  activeBtn: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFilter: () => dispatch(visibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterLink);
