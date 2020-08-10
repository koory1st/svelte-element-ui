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
styles.default.notPlain.disabled[hoverFocus] = {};
styles.default.notPlain.disabled._active = {};
styles.default.notPlain.disabled.color = '#c0c4cc';
styles.default.notPlain.disabled.bg = '#fff';
styles.default.notPlain.disabled.borderColor = '#ebeef5';
styles.default.notPlain.disabled[hoverFocus].color = '#c0c4cc';
styles.default.notPlain.disabled[hoverFocus].bg = '#fff';
styles.default.notPlain.disabled[hoverFocus].borderColor = '#ebeef5';
styles.default.notPlain.disabled._active.color = '#c0c4cc';
styles.default.notPlain.disabled._active.bg = '#fff';
styles.default.notPlain.disabled._active.borderColor = '#ebeef5';

// default; plain; not disabled
styles.default.plain = {};
styles.default.plain.notDisabled = { ...basic };
styles.default.plain.notDisabled[hoverFocus] = {};
styles.default.plain.notDisabled._active = {};
styles.default.plain.notDisabled.color = '#606266';
styles.default.plain.notDisabled.bg = '#fff';
styles.default.plain.notDisabled.borderColor = '#dcdfe6';
styles.default.plain.notDisabled[hoverFocus].color = '#409eff';
styles.default.plain.notDisabled[hoverFocus].bg = '#fff';
styles.default.plain.notDisabled[hoverFocus].borderColor = '#409eff';
styles.default.plain.notDisabled._active.color = '#3a8ee6';
styles.default.plain.notDisabled._active.bg = '#fff';
styles.default.plain.notDisabled._active.borderColor = '#3a8ee6';

styles.default.plain.disabled = { ...basic };
styles.default.plain.disabled[hoverFocus] = {};
styles.default.plain.disabled._active = {};
styles.default.plain.disabled.color = '#c0c4cc';
styles.default.plain.disabled.bg = '#fff';
styles.default.plain.disabled.borderColor = '#ebeef5';
styles.default.plain.disabled[hoverFocus].color = '#c0c4cc';
styles.default.plain.disabled[hoverFocus].bg = '#fff';
styles.default.plain.disabled[hoverFocus].borderColor = '#ebeef5';
styles.default.plain.disabled._active.color = '#c0c4cc';
styles.default.plain.disabled._active.bg = '#fff';
styles.default.plain.disabled._active.borderColor = '#ebeef5';

styles.primary = {};
styles.primary.notPlain = {};
styles.primary.notPlain.notDisabled = { ...basic };
styles.primary.notPlain.notDisabled[hoverFocus] = {};
styles.primary.notPlain.notDisabled._active = {};
styles.primary.notPlain.notDisabled.color = '#fff';
styles.primary.notPlain.notDisabled.bg = '#409eff';
styles.primary.notPlain.notDisabled.borderColor = '#409eff';
styles.primary.notPlain.notDisabled[hoverFocus].color = '#fff';
styles.primary.notPlain.notDisabled[hoverFocus].bg = '#66b1ff';
styles.primary.notPlain.notDisabled[hoverFocus].borderColor = '#66b1ff';
styles.primary.notPlain.notDisabled._active.color = 'fff';
styles.primary.notPlain.notDisabled._active.bg = '#3a8ee6';
styles.primary.notPlain.notDisabled._active.borderColor = '#3a8ee6';

styles.primary.notPlain.disabled = { ...basic };
styles.primary.notPlain.disabled[hoverFocus] = {};
styles.primary.notPlain.disabled._active = {};
styles.primary.notPlain.disabled.color = '#fff';
styles.primary.notPlain.disabled.bg = '#a0cfff';
styles.primary.notPlain.disabled.borderColor = '#a0cfff';
styles.primary.notPlain.disabled[hoverFocus].color = '#fff';
styles.primary.notPlain.disabled[hoverFocus].bg = '#a0cfff';
styles.primary.notPlain.disabled[hoverFocus].borderColor = '#a0cfff';
styles.primary.notPlain.disabled._active.color = '#fff';
styles.primary.notPlain.disabled._active.bg = '#a0cfff';
styles.primary.notPlain.disabled._active.borderColor = '#a0cfff';

styles.primary.plain = {};
styles.primary.plain.notDisabled = { ...basic };
styles.primary.plain.notDisabled[hoverFocus] = {};
styles.primary.plain.notDisabled._active = {};
styles.primary.plain.notDisabled.color = '#409eff';
styles.primary.plain.notDisabled.bg = '#ecf5ff';
styles.primary.plain.notDisabled.borderColor = '#b3d8ff';
styles.primary.plain.notDisabled[hoverFocus].color = '#fff';
styles.primary.plain.notDisabled[hoverFocus].bg = '#409eff';
styles.primary.plain.notDisabled[hoverFocus].borderColor = '#409eff';
styles.primary.plain.notDisabled._active.color = '#fff';
styles.primary.plain.notDisabled._active.bg = '#3a8ee6';
styles.primary.plain.notDisabled._active.borderColor = '#3a8ee6';

styles.primary.plain.disabled = { ...basic };
styles.primary.plain.disabled[hoverFocus] = {};
styles.primary.plain.disabled._active = {};
styles.primary.plain.disabled.color = '#8cc5ff';
styles.primary.plain.disabled.bg = '#ecf5ff';
styles.primary.plain.disabled.borderColor = '#d9ecff';
styles.primary.plain.disabled[hoverFocus].color = '#8cc5ff';
styles.primary.plain.disabled[hoverFocus].bg = '#ecf5ff';
styles.primary.plain.disabled[hoverFocus].borderColor = '#d9ecff';
styles.primary.plain.disabled._active.color = '#8cc5ff';
styles.primary.plain.disabled._active.bg = '#ecf5ff';
styles.primary.plain.disabled._active.borderColor = '#d9ecff';

styles.success = {};
styles.success.notPlain = {};
styles.success.notPlain.notDisabled = { ...basic };
styles.success.notPlain.notDisabled[hoverFocus] = {};
styles.success.notPlain.notDisabled._active = {};
styles.success.notPlain.notDisabled.color = '#fff';
styles.success.notPlain.notDisabled.bg = '#67c23a';
styles.success.notPlain.notDisabled.borderColor = '#67c23a';
styles.success.notPlain.notDisabled[hoverFocus].color = '#fff';
styles.success.notPlain.notDisabled[hoverFocus].bg = '#85ce61';
styles.success.notPlain.notDisabled[hoverFocus].borderColor = '#85ce61';
styles.success.notPlain.notDisabled._active.color = '#fff';
styles.success.notPlain.notDisabled._active.bg = '#5daf34';
styles.success.notPlain.notDisabled._active.borderColor = '#5daf34';

styles.success.notPlain.disabled = { ...basic };
styles.success.notPlain.disabled[hoverFocus] = {};
styles.success.notPlain.disabled._active = {};
styles.success.notPlain.disabled.color = '#fff';
styles.success.notPlain.disabled.bg = '#b3e19d';
styles.success.notPlain.disabled.borderColor = '#b3e19d';
styles.success.notPlain.disabled[hoverFocus].color = '#fff';
styles.success.notPlain.disabled[hoverFocus].bg = '#b3e19d';
styles.success.notPlain.disabled[hoverFocus].borderColor = '#b3e19d';
styles.success.notPlain.disabled._active.color = '#fff';
styles.success.notPlain.disabled._active.bg = '#b3e19d';
styles.success.notPlain.disabled._active.borderColor = '#b3e19d';

styles.success.plain = {};
styles.success.plain.notDisabled = { ...basic };
styles.success.plain.notDisabled[hoverFocus] = {};
styles.success.plain.notDisabled._active = {};
styles.success.plain.notDisabled.color = '#67c23a';
styles.success.plain.notDisabled.bg = '#f0f9eb';
styles.success.plain.notDisabled.borderColor = '#c2e7b0';
styles.success.plain.notDisabled[hoverFocus].color = '#fff';
styles.success.plain.notDisabled[hoverFocus].bg = '#67c23a';
styles.success.plain.notDisabled[hoverFocus].borderColor = '#67c23a';
styles.success.plain.notDisabled._active.color = '#fff';
styles.success.plain.notDisabled._active.bg = '#5daf34';
styles.success.plain.notDisabled._active.borderColor = '#5daf34';

styles.success.plain.disabled = { ...basic };
styles.success.plain.disabled[hoverFocus] = {};
styles.success.plain.disabled._active = {};
styles.success.plain.disabled.color = '#a4da89';
styles.success.plain.disabled.bg = '#f0f9eb';
styles.success.plain.disabled.borderColor = '#e1f3d8';
styles.success.plain.disabled[hoverFocus].color = '#a4da89';
styles.success.plain.disabled[hoverFocus].bg = '#f0f9eb';
styles.success.plain.disabled[hoverFocus].borderColor = '#e1f3d8';
styles.success.plain.disabled._active.color = '#a4da89';
styles.success.plain.disabled._active.bg = '#f0f9eb';
styles.success.plain.disabled._active.borderColor = '#e1f3d8';

styles.info = {};
styles.info.notPlain = {};
styles.info.notPlain.notDisabled = { ...basic };
styles.info.notPlain.notDisabled[hoverFocus] = {};
styles.info.notPlain.notDisabled._active = {};
styles.info.notPlain.notDisabled.color = '#fff';
styles.info.notPlain.notDisabled.bg = '#909399';
styles.info.notPlain.notDisabled.borderColor = '#909399';
styles.info.notPlain.notDisabled[hoverFocus].color = '#fff';
styles.info.notPlain.notDisabled[hoverFocus].bg = '#a6a9ad';
styles.info.notPlain.notDisabled[hoverFocus].borderColor = '#a6a9ad';
styles.info.notPlain.notDisabled._active.color = '#fff';
styles.info.notPlain.notDisabled._active.bg = '#82848a';
styles.info.notPlain.notDisabled._active.borderColor = '#82848a';

styles.info.notPlain.disabled = { ...basic };
styles.info.notPlain.disabled[hoverFocus] = {};
styles.info.notPlain.disabled._active = {};
styles.info.notPlain.disabled.color = '#fff';
styles.info.notPlain.disabled.bg = '#c8c9cc';
styles.info.notPlain.disabled.borderColor = '#c8c9cc';
styles.info.notPlain.disabled[hoverFocus].color = '#fff';
styles.info.notPlain.disabled[hoverFocus].bg = '#c8c9cc';
styles.info.notPlain.disabled[hoverFocus].borderColor = '#c8c9cc';
styles.info.notPlain.disabled._active.color = '#fff';
styles.info.notPlain.disabled._active.bg = '#c8c9cc';
styles.info.notPlain.disabled._active.borderColor = '#c8c9cc';

styles.info.plain = {};
styles.info.plain.notDisabled = { ...basic };
styles.info.plain.notDisabled[hoverFocus] = {};
styles.info.plain.notDisabled._active = {};
styles.info.plain.notDisabled.color = '#909399';
styles.info.plain.notDisabled.bg = '#f4f4f5';
styles.info.plain.notDisabled.borderColor = '#d3d4d6';
styles.info.plain.notDisabled[hoverFocus].color = '#fff';
styles.info.plain.notDisabled[hoverFocus].bg = '#909399';
styles.info.plain.notDisabled[hoverFocus].borderColor = '#909399';
styles.info.plain.notDisabled._active.color = '#fff';
styles.info.plain.notDisabled._active.bg = '#82848a';
styles.info.plain.notDisabled._active.borderColor = '#82848a';

styles.info.plain.disabled = { ...basic };
styles.info.plain.disabled[hoverFocus] = {};
styles.info.plain.disabled._active = {};
styles.info.plain.disabled.color = '#bcbec2';
styles.info.plain.disabled.bg = '#f4f4f5';
styles.info.plain.disabled.borderColor = '#e9e9eb';
styles.info.plain.disabled[hoverFocus].color = '#bcbec2';
styles.info.plain.disabled[hoverFocus].bg = '#f4f4f5';
styles.info.plain.disabled[hoverFocus].borderColor = '#e9e9eb';
styles.info.plain.disabled._active.color = '#bcbec2';
styles.info.plain.disabled._active.bg = '#f4f4f5';
styles.info.plain.disabled._active.borderColor = '#e9e9eb';

styles.warning = {};
styles.warning.notPlain = {};
styles.warning.notPlain.notDisabled = { ...basic };
styles.warning.notPlain.notDisabled[hoverFocus] = {};
styles.warning.notPlain.notDisabled._active = {};
styles.warning.notPlain.notDisabled.color = '#fff';
styles.warning.notPlain.notDisabled.bg = '#e6a23c';
styles.warning.notPlain.notDisabled.borderColor = '#e6a23c';
styles.warning.notPlain.notDisabled[hoverFocus].color = '#fff';
styles.warning.notPlain.notDisabled[hoverFocus].bg = '#ebb563';
styles.warning.notPlain.notDisabled[hoverFocus].borderColor = '#ebb563';
styles.warning.notPlain.notDisabled._active.color = '#fff';
styles.warning.notPlain.notDisabled._active.bg = '#cf9236';
styles.warning.notPlain.notDisabled._active.borderColor = '#cf9236';

styles.warning.notPlain.disabled = { ...basic };
styles.warning.notPlain.disabled[hoverFocus] = {};
styles.warning.notPlain.disabled._active = {};
styles.warning.notPlain.disabled.color = '#fff';
styles.warning.notPlain.disabled.bg = '#f3d19e';
styles.warning.notPlain.disabled.borderColor = '#f3d19e';
styles.warning.notPlain.disabled[hoverFocus].color = '#fff';
styles.warning.notPlain.disabled[hoverFocus].bg = '#f3d19e';
styles.warning.notPlain.disabled[hoverFocus].borderColor = '#f3d19e';
styles.warning.notPlain.disabled._active.color = '#fff';
styles.warning.notPlain.disabled._active.bg = '#f3d19e';
styles.warning.notPlain.disabled._active.borderColor = '#f3d19e';

styles.warning.plain = {};
styles.warning.plain.notDisabled = { ...basic };
styles.warning.plain.notDisabled[hoverFocus] = {};
styles.warning.plain.notDisabled._active = {};
styles.warning.plain.notDisabled.color = '#e6a23c';
styles.warning.plain.notDisabled.bg = '#fdf6ec';
styles.warning.plain.notDisabled.borderColor = '#f5dab1';
styles.warning.plain.notDisabled[hoverFocus].color = '#fff';
styles.warning.plain.notDisabled[hoverFocus].bg = '#e6a23c';
styles.warning.plain.notDisabled[hoverFocus].borderColor = '#e6a23c';
styles.warning.plain.notDisabled._active.color = '#fff';
styles.warning.plain.notDisabled._active.bg = '#cf9236';
styles.warning.plain.notDisabled._active.borderColor = '#cf9236';

styles.warning.plain.disabled = { ...basic };
styles.warning.plain.disabled[hoverFocus] = {};
styles.warning.plain.disabled._active = {};
styles.warning.plain.disabled.color = '#f0c78a';
styles.warning.plain.disabled.bg = '#fdf6ec';
styles.warning.plain.disabled.borderColor = '#faecd8';
styles.warning.plain.disabled[hoverFocus].color = '#f0c78a';
styles.warning.plain.disabled[hoverFocus].bg = '#fdf6ec';
styles.warning.plain.disabled[hoverFocus].borderColor = '#faecd8';
styles.warning.plain.disabled._active.color = '#f0c78a';
styles.warning.plain.disabled._active.bg = '#fdf6ec';
styles.warning.plain.disabled._active.borderColor = '#faecd8';

styles.danger = {};
styles.danger.notPlain = {};
styles.danger.notPlain.notDisabled = { ...basic };
styles.danger.notPlain.notDisabled[hoverFocus] = {};
styles.danger.notPlain.notDisabled._active = {};
styles.danger.notPlain.notDisabled.color = '#fff';
styles.danger.notPlain.notDisabled.bg = '#f56c6c';
styles.danger.notPlain.notDisabled.borderColor = '#f56c6c';
styles.danger.notPlain.notDisabled[hoverFocus].color = '#fff';
styles.danger.notPlain.notDisabled[hoverFocus].bg = '#f78989';
styles.danger.notPlain.notDisabled[hoverFocus].borderColor = '#f78989';
styles.danger.notPlain.notDisabled._active.color = '#fff';
styles.danger.notPlain.notDisabled._active.bg = '#dd6161';
styles.danger.notPlain.notDisabled._active.borderColor = '#dd6161';

styles.danger.notPlain.disabled = { ...basic };
styles.danger.notPlain.disabled[hoverFocus] = {};
styles.danger.notPlain.disabled._active = {};
styles.danger.notPlain.disabled.color = '#fff';
styles.danger.notPlain.disabled.bg = '#fab6b6';
styles.danger.notPlain.disabled.borderColor = '#fab6b6';
styles.danger.notPlain.disabled[hoverFocus].color = '#fff';
styles.danger.notPlain.disabled[hoverFocus].bg = '#fab6b6';
styles.danger.notPlain.disabled[hoverFocus].borderColor = '#fab6b6';
styles.danger.notPlain.disabled._active.color = '#fff';
styles.danger.notPlain.disabled._active.bg = '#fab6b6';
styles.danger.notPlain.disabled._active.borderColor = '#fab6b6';

styles.danger.plain = {};
styles.danger.plain.notDisabled = { ...basic };
styles.danger.plain.notDisabled[hoverFocus] = {};
styles.danger.plain.notDisabled._active = {};
styles.danger.plain.notDisabled.color = '#f56c6c';
styles.danger.plain.notDisabled.bg = '#fef0f0';
styles.danger.plain.notDisabled.borderColor = '#fbc4c4';
styles.danger.plain.notDisabled[hoverFocus].color = '#fff';
styles.danger.plain.notDisabled[hoverFocus].bg = '#f56c6c';
styles.danger.plain.notDisabled[hoverFocus].borderColor = '#f56c6c';
styles.danger.plain.notDisabled._active.color = '#fff';
styles.danger.plain.notDisabled._active.bg = '#dd6161';
styles.danger.plain.notDisabled._active.borderColor = '#dd6161';

styles.danger.plain.disabled = { ...basic };
styles.danger.plain.disabled[hoverFocus] = {};
styles.danger.plain.disabled._active = {};
styles.danger.plain.disabled.color = '#f9a7a7';
styles.danger.plain.disabled.bg = '#fef0f0';
styles.danger.plain.disabled.borderColor = '#fde2e2';
styles.danger.plain.disabled[hoverFocus].color = '#f9a7a7';
styles.danger.plain.disabled[hoverFocus].bg = '#fef0f0';
styles.danger.plain.disabled[hoverFocus].borderColor = '#fde2e2';
styles.danger.plain.disabled._active.color = '#f9a7a7';
styles.danger.plain.disabled._active.bg = '#fef0f0';
styles.danger.plain.disabled._active.borderColor = '#fde2e2';

styles.text = {};
styles.text.notDisabled = { ...basic };
styles.text.notDisabled[hoverFocus] = {};
styles.text.notDisabled._active = {};
styles.text.notDisabled.color = '#409eff';
styles.text.notDisabled.bg = 'transparent';
styles.text.notDisabled.borderColor = 'transparent';
styles.text.notDisabled.paddingLeft = 'none';
styles.text.notDisabled.paddingRight = 'none';
styles.text.notDisabled[hoverFocus].color = '#66b1ff';
styles.text.notDisabled[hoverFocus].bg = 'transparent';
styles.text.notDisabled[hoverFocus].borderColor = 'transparent';
styles.text.notDisabled._active.color = '#3a8ee6';
styles.text.notDisabled._active.bg = 'transparent';
styles.text.notDisabled._active.borderColor = 'transparent';

styles.text.disabled = { ...basic };
styles.text.disabled[hoverFocus] = {};
styles.text.disabled._active = {};
styles.text.disabled.color = '#c0c4cc';
styles.text.disabled.bg = 'transparent';
styles.text.disabled.borderColor = 'transparent';
styles.text.disabled[hoverFocus].color = '#c0c4cc';
styles.text.disabled[hoverFocus].bg = 'transparent';
styles.text.disabled[hoverFocus].borderColor = 'transparent';
styles.text.disabled._active.color = '#c0c4cc';
styles.text.disabled._active.bg = 'transparent';
styles.text.disabled._active.borderColor = 'transparent';

export default styles;
