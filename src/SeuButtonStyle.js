const styles = {};
const hoverFocus = '_hover,_focus';

const basic = {
  border: '1px solid',
  display: 'inline-block',
  lineHeight: '1',
  whiteSpace: 'nowrap',
  '-webkit-appearance': 'none',
  textAlign: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  margin: '0',
  transition: '.1s',
  fontWeight: '500',
  '-moz-user-select': 'none',
  '-webkit-user-select': 'none',
  '-ms-user-select': 'none',
  p: '12px 20px',
  fontSize: '14px',
  borderRadius: '4px',
  cursor: 'pointer',
};

// default; not plain; not disabled
styles.default = {};
styles.default.notPlain = {};
styles.default.notPlain.notDisabled = { ...basic };
styles.default.notPlain.notDisabled[hoverFocus] = {};
styles.default.notPlain.notDisabled._active = {};
styles.default.notPlain.notDisabled.color = '#606266';
styles.default.notPlain.notDisabled.bg = '#fff';
styles.default.notPlain.notDisabled.borderColor = '#dcdfe6';
styles.default.notPlain.notDisabled[hoverFocus].color = '#409eff';
styles.default.notPlain.notDisabled[hoverFocus].color = '#409eff';
styles.default.notPlain.notDisabled[hoverFocus].bg = '#ecf5ff';
styles.default.notPlain.notDisabled[hoverFocus].borderColor = '#c6e2ff';
styles.default.notPlain.notDisabled._active.color = '#3a8ee6';
styles.default.notPlain.notDisabled._active.borderColor = '#3a8ee6';
styles.default.notPlain.notDisabled._active.outline = 'none';

// default; not plain; not disabled
styles.default.notPlain.disabled = { ...basic };
styles.default.notPlain.disabled._hover = {};
styles.default.notPlain.disabled._active = {};
styles.default.notPlain.disabled.color = '#c0c4cc';
styles.default.notPlain.disabled.bg = '#fff';
styles.default.notPlain.disabled.borderColor = '#ebeef5';
styles.default.notPlain.disabled._hover.color = '#c0c4cc';
styles.default.notPlain.disabled._hover.bg = '#fff';
styles.default.notPlain.disabled._hover.borderColor = '#ebeef5';
styles.default.notPlain.disabled._active.color = '#c0c4cc';
styles.default.notPlain.disabled._active.bg = '#fff';
styles.default.notPlain.disabled._active.borderColor = '#ebeef5';
styles.default.notPlain.disabled._focus = styles.default.notPlain.disabled._hover;

// default; plain; not disabled
styles.default.plain = {};
styles.default.plain.notDisabled = { ...basic };
styles.default.plain.notDisabled._hover = {};
styles.default.plain.notDisabled._active = {};
styles.default.plain.notDisabled.color = '#606266';
styles.default.plain.notDisabled.bg = '#fff';
styles.default.plain.notDisabled.borderColor = '#dcdfe6';
styles.default.plain.notDisabled._hover.color = '#409eff';
styles.default.plain.notDisabled._hover.bg = '#fff';
styles.default.plain.notDisabled._hover.borderColor = '#409eff';
styles.default.plain.notDisabled._active.color = '#3a8ee6';
styles.default.plain.notDisabled._active.bg = '#fff';
styles.default.plain.notDisabled._active.borderColor = '#3a8ee6';
styles.default.plain.notDisabled._focus = styles.default.plain.notDisabled._hover;

styles.default.plain.disabled = { ...basic };
styles.default.plain.disabled._hover = {};
styles.default.plain.disabled._active = {};
styles.default.plain.disabled.color = '#c0c4cc';
styles.default.plain.disabled.bg = '#fff';
styles.default.plain.disabled.borderColor = '#ebeef5';
styles.default.plain.disabled._hover.color = '#c0c4cc';
styles.default.plain.disabled._hover.bg = '#fff';
styles.default.plain.disabled._hover.borderColor = '#ebeef5';
styles.default.plain.disabled._active.color = '#c0c4cc';
styles.default.plain.disabled._active.bg = '#fff';
styles.default.plain.disabled._active.borderColor = '#ebeef5';
styles.default.plain.disabled._focus = styles.default.plain.disabled._hover;

styles.primary = {};
styles.primary.notPlain = {};
styles.primary.notPlain.notDisabled = { ...basic };
styles.primary.notPlain.notDisabled._hover = {};
styles.primary.notPlain.notDisabled._active = {};
styles.primary.notPlain.notDisabled.color = '#fff';
styles.primary.notPlain.notDisabled.bg = '#409eff';
styles.primary.notPlain.notDisabled.borderColor = '#409eff';
styles.primary.notPlain.notDisabled._hover.color = '#fff';
styles.primary.notPlain.notDisabled._hover.bg = '#66b1ff';
styles.primary.notPlain.notDisabled._hover.borderColor = '#66b1ff';
styles.primary.notPlain.notDisabled._active.color = 'fff';
styles.primary.notPlain.notDisabled._active.bg = '#3a8ee6';
styles.primary.notPlain.notDisabled._active.borderColor = '#3a8ee6';
styles.primary.notPlain.notDisabled._focus = styles.primary.notPlain.notDisabled._hover;

styles.primary.notPlain.disabled = { ...basic };
styles.primary.notPlain.disabled._hover = {};
styles.primary.notPlain.disabled._active = {};
styles.primary.notPlain.disabled.color = '#fff';
styles.primary.notPlain.disabled.bg = '#a0cfff';
styles.primary.notPlain.disabled.borderColor = '#a0cfff';
styles.primary.notPlain.disabled._hover.color = '#fff';
styles.primary.notPlain.disabled._hover.bg = '#a0cfff';
styles.primary.notPlain.disabled._hover.borderColor = '#a0cfff';
styles.primary.notPlain.disabled._active.color = '#fff';
styles.primary.notPlain.disabled._active.bg = '#a0cfff';
styles.primary.notPlain.disabled._active.borderColor = '#a0cfff';
styles.primary.notPlain.disabled._focus = styles.primary.notPlain.disabled._hover;

styles.primary = {};
styles.primary.plain = {};
styles.primary.plain.notDisabled = { ...basic };
styles.primary.plain.notDisabled._hover = {};
styles.primary.plain.notDisabled._active = {};
styles.primary.plain.notDisabled.color = '#409eff';
styles.primary.plain.notDisabled.bg = '#ecf5ff';
styles.primary.plain.notDisabled.borderColor = '#b3d8ff';
styles.primary.plain.notDisabled._hover.color = '#fff';
styles.primary.plain.notDisabled._hover.bg = '#409eff';
styles.primary.plain.notDisabled._hover.borderColor = '#409eff';
styles.primary.plain.notDisabled._active.color = '#fff';
styles.primary.plain.notDisabled._active.bg = '#3a8ee6';
styles.primary.plain.notDisabled._active.borderColor = '#3a8ee6';
styles.primary.plain.notDisabled._focus = styles.primary.plain.notDisabled._hover;

styles.primary.plain.disabled = { ...basic };
styles.primary.plain.disabled._hover = {};
styles.primary.plain.disabled._active = {};
styles.primary.plain.disabled.color = '#8cc5ff';
styles.primary.plain.disabled.bg = '#ecf5ff';
styles.primary.plain.disabled.borderColor = '#d9ecff';
styles.primary.plain.disabled._hover.color = '#8cc5ff';
styles.primary.plain.disabled._hover.bg = '#ecf5ff';
styles.primary.plain.disabled._hover.borderColor = '#d9ecff';
styles.primary.plain.disabled._active.color = '#8cc5ff';
styles.primary.plain.disabled._active.bg = '#ecf5ff';
styles.primary.plain.disabled._active.borderColor = '#d9ecff';
styles.primary.plain.disabled._focus = styles.primary.plain.disabled._hover;

styles.success = {};
styles.success.notPlain = {};
styles.success.notPlain.notDisabled = { ...basic };
styles.success.notPlain.notDisabled._hover = {};
styles.success.notPlain.notDisabled._active = {};
styles.success.notPlain.notDisabled.color = '#fff';
styles.success.notPlain.notDisabled.bg = '#67c23a';
styles.success.notPlain.notDisabled.borderColor = '#67c23a';
styles.success.notPlain.notDisabled._hover.color = '#fff';
styles.success.notPlain.notDisabled._hover.bg = '#85ce61';
styles.success.notPlain.notDisabled._hover.borderColor = '#85ce61';
styles.success.notPlain.notDisabled._active.color = '#fff';
styles.success.notPlain.notDisabled._active.bg = '#5daf34';
styles.success.notPlain.notDisabled._active.borderColor = '#5daf34';
styles.success.notPlain.notDisabled._focus = styles.success.notPlain.notDisabled._hover;

styles.success.notPlain.disabled = { ...basic };
styles.success.notPlain.disabled._hover = {};
styles.success.notPlain.disabled._active = {};
styles.success.notPlain.disabled.color = '#fff';
styles.success.notPlain.disabled.bg = '#b3e19d';
styles.success.notPlain.disabled.borderColor = '#b3e19d';
styles.success.notPlain.disabled._hover.color = '#fff';
styles.success.notPlain.disabled._hover.bg = '#b3e19d';
styles.success.notPlain.disabled._hover.borderColor = '#b3e19d';
styles.success.notPlain.disabled._active.color = '#fff';
styles.success.notPlain.disabled._active.bg = '#b3e19d';
styles.success.notPlain.disabled._active.borderColor = '#b3e19d';
styles.success.notPlain.disabled._focus = styles.success.notPlain.disabled._hover;

styles.success.plain = {};
styles.success.plain.notDisabled = { ...basic };
styles.success.plain.notDisabled._hover = {};
styles.success.plain.notDisabled._active = {};
styles.success.plain.notDisabled.color = '#67c23a';
styles.success.plain.notDisabled.bg = '#f0f9eb';
styles.success.plain.notDisabled.borderColor = '#c2e7b0';
styles.success.plain.notDisabled._hover.color = '#fff';
styles.success.plain.notDisabled._hover.bg = '#67c23a';
styles.success.plain.notDisabled._hover.borderColor = '#67c23a';
styles.success.plain.notDisabled._active.color = '#fff';
styles.success.plain.notDisabled._active.bg = '#5daf34';
styles.success.plain.notDisabled._active.borderColor = '#5daf34';
styles.success.plain.notDisabled._focus = styles.success.plain.notDisabled._hover;

styles.success.plain.disabled = { ...basic };
styles.success.plain.disabled._hover = {};
styles.success.plain.disabled._active = {};
styles.success.plain.disabled.color = '#a4da89';
styles.success.plain.disabled.bg = '#f0f9eb';
styles.success.plain.disabled.borderColor = '#e1f3d8';
styles.success.plain.disabled._hover.color = '#a4da89';
styles.success.plain.disabled._hover.bg = '#f0f9eb';
styles.success.plain.disabled._hover.borderColor = '#e1f3d8';
styles.success.plain.disabled._active.color = '#a4da89';
styles.success.plain.disabled._active.bg = '#f0f9eb';
styles.success.plain.disabled._active.borderColor = '#e1f3d8';
styles.success.plain.disabled._focus = styles.success.plain.disabled._hover;

styles.info = {};
styles.info.notPlain = {};
styles.info.notPlain.notDisabled = { ...basic };
styles.info.notPlain.notDisabled._hover = {};
styles.info.notPlain.notDisabled._active = {};
styles.info.notPlain.notDisabled.color = '#fff';
styles.info.notPlain.notDisabled.bg = '#909399';
styles.info.notPlain.notDisabled.borderColor = '#909399';
styles.info.notPlain.notDisabled._hover.color = '#fff';
styles.info.notPlain.notDisabled._hover.bg = '#a6a9ad';
styles.info.notPlain.notDisabled._hover.borderColor = '#a6a9ad';
styles.info.notPlain.notDisabled._active.color = '#fff';
styles.info.notPlain.notDisabled._active.bg = '#82848a';
styles.info.notPlain.notDisabled._active.borderColor = '#82848a';
styles.info.notPlain.notDisabled._focus = styles.info.notPlain.notDisabled._hover;

styles.info.notPlain.disabled = { ...basic };
styles.info.notPlain.disabled._hover = {};
styles.info.notPlain.disabled._active = {};
styles.info.notPlain.disabled.color = '#fff';
styles.info.notPlain.disabled.bg = '#c8c9cc';
styles.info.notPlain.disabled.borderColor = '#c8c9cc';
styles.info.notPlain.disabled._hover.color = '#fff';
styles.info.notPlain.disabled._hover.bg = '#c8c9cc';
styles.info.notPlain.disabled._hover.borderColor = '#c8c9cc';
styles.info.notPlain.disabled._active.color = '#fff';
styles.info.notPlain.disabled._active.bg = '#c8c9cc';
styles.info.notPlain.disabled._active.borderColor = '#c8c9cc';
styles.info.notPlain.disabled._focus = styles.info.notPlain.disabled._hover;

styles.info.plain = {};
styles.info.plain.notDisabled = { ...basic };
styles.info.plain.notDisabled._hover = {};
styles.info.plain.notDisabled._active = {};
styles.info.plain.notDisabled.color = '#909399';
styles.info.plain.notDisabled.bg = '#f4f4f5';
styles.info.plain.notDisabled.borderColor = '#d3d4d6';
styles.info.plain.notDisabled._hover.color = '#fff';
styles.info.plain.notDisabled._hover.bg = '#909399';
styles.info.plain.notDisabled._hover.borderColor = '#909399';
styles.info.plain.notDisabled._active.color = '#fff';
styles.info.plain.notDisabled._active.bg = '#82848a';
styles.info.plain.notDisabled._active.borderColor = '#82848a';
styles.info.plain.notDisabled._focus = styles.info.plain.notDisabled._hover;

styles.info.plain.disabled = { ...basic };
styles.info.plain.disabled._hover = {};
styles.info.plain.disabled._active = {};
styles.info.plain.disabled.color = '#bcbec2';
styles.info.plain.disabled.bg = '#f4f4f5';
styles.info.plain.disabled.borderColor = '#e9e9eb';
styles.info.plain.disabled._hover.color = '#bcbec2';
styles.info.plain.disabled._hover.bg = '#f4f4f5';
styles.info.plain.disabled._hover.borderColor = '#e9e9eb';
styles.info.plain.disabled._active.color = '#bcbec2';
styles.info.plain.disabled._active.bg = '#f4f4f5';
styles.info.plain.disabled._active.borderColor = '#e9e9eb';
styles.info.plain.disabled._focus = styles.info.plain.disabled._hover;

styles.warning = {};
styles.warning.notPlain = {};
styles.warning.notPlain.notDisabled = { ...basic };
styles.warning.notPlain.notDisabled._hover = {};
styles.warning.notPlain.notDisabled._active = {};
styles.warning.notPlain.notDisabled.color = '#fff';
styles.warning.notPlain.notDisabled.bg = '#e6a23c';
styles.warning.notPlain.notDisabled.borderColor = '#e6a23c';
styles.warning.notPlain.notDisabled._hover.color = '#fff';
styles.warning.notPlain.notDisabled._hover.bg = '#ebb563';
styles.warning.notPlain.notDisabled._hover.borderColor = '#ebb563';
styles.warning.notPlain.notDisabled._active.color = '#fff';
styles.warning.notPlain.notDisabled._active.bg = '#cf9236';
styles.warning.notPlain.notDisabled._active.borderColor = '#cf9236';
styles.warning.notPlain.notDisabled._focus = styles.warning.notPlain.notDisabled._hover;

styles.warning.notPlain.disabled = { ...basic };
styles.warning.notPlain.disabled._hover = {};
styles.warning.notPlain.disabled._active = {};
styles.warning.notPlain.disabled.color = '#fff';
styles.warning.notPlain.disabled.bg = '#f3d19e';
styles.warning.notPlain.disabled.borderColor = '#f3d19e';
styles.warning.notPlain.disabled._hover.color = '#fff';
styles.warning.notPlain.disabled._hover.bg = '#f3d19e';
styles.warning.notPlain.disabled._hover.borderColor = '#f3d19e';
styles.warning.notPlain.disabled._active.color = '#fff';
styles.warning.notPlain.disabled._active.bg = '#f3d19e';
styles.warning.notPlain.disabled._active.borderColor = '#f3d19e';
styles.warning.notPlain.disabled._focus = styles.warning.notPlain.disabled._hover;

styles.warning = {};
styles.warning.plain = {};
styles.warning.plain.notDisabled = { ...basic };
styles.warning.plain.notDisabled._hover = {};
styles.warning.plain.notDisabled._active = {};
styles.warning.plain.notDisabled.color = '#e6a23c';
styles.warning.plain.notDisabled.bg = '#fdf6ec';
styles.warning.plain.notDisabled.borderColor = '#f5dab1';
styles.warning.plain.notDisabled._hover.color = '#fff';
styles.warning.plain.notDisabled._hover.bg = '#e6a23c';
styles.warning.plain.notDisabled._hover.borderColor = '#e6a23c';
styles.warning.plain.notDisabled._active.color = '#fff';
styles.warning.plain.notDisabled._active.bg = '#cf9236';
styles.warning.plain.notDisabled._active.borderColor = '#cf9236';
styles.warning.plain.notDisabled._focus = styles.warning.plain.notDisabled._hover;

styles.warning.plain.disabled = { ...basic };
styles.warning.plain.disabled._hover = {};
styles.warning.plain.disabled._active = {};
styles.warning.plain.disabled.color = '#f0c78a';
styles.warning.plain.disabled.bg = '#fdf6ec';
styles.warning.plain.disabled.borderColor = '#faecd8';
styles.warning.plain.disabled._hover.color = '#f0c78a';
styles.warning.plain.disabled._hover.bg = '#fdf6ec';
styles.warning.plain.disabled._hover.borderColor = '#faecd8';
styles.warning.plain.disabled._active.color = '#f0c78a';
styles.warning.plain.disabled._active.bg = '#fdf6ec';
styles.warning.plain.disabled._active.borderColor = '#faecd8';
styles.warning.plain.disabled._focus = styles.warning.plain.disabled._hover;

export default styles;
