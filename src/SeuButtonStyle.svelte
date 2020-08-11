<style>
  /* default */
  :global(.seu-button) {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-sseuect: none;
    -webkit-user-sseuect: none;
    -ms-user-sseuect: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  :global(.seu-button:focus, .seu-button:hover) {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  :global(.seu-button:active) {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  :global(.seu-button.is-plain:focus, .seu-button.is-plain:hover) {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  :global(.seu-button.is-plain:active) {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  :global(.seu-button.is-active, .seu-button.is-plain:active) {
    background: #fff;
    outline: none;
  }
  :global(.seu-button.is-disabled, .seu-button.is-disabled:focus, .seu-button.is-disabled:hover) {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  /* primary */
  :global(.seu-button--primary) {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  :global(.seu-button--primary:focus, .seu-button--primary:hover) {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  :global(.seu-button--primary.is-active, .seu-button--primary:active) {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  :global(.seu-button--primary:active) {
    outline: none;
  }
  :global(.seu-button--primary.is-plain) {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  :global(.seu-button--primary.is-plain:focus, .seu-button--primary.is-plain:hover) {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  :global(.seu-button--primary.is-plain:active) {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none;
  }

  :global(.seu-button--primary.is-disabled, .seu-button--primary.is-disabled:active, .seu-button--primary.is-disabled:focus, .seu-button--primary.is-disabled:hover) {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
  :global(.seu-button--primary.is-plain.is-disabled, .seu-button--primary.is-plain.is-disabled:active, .seu-button--primary.is-plain.is-disabled:focus, .seu-button--primary.is-plain.is-disabled:hover) {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
  }

  /* success */
  :global(.seu-button--success) {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  :global(.seu-button--success:focus, .seu-button--success:hover) {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  :global(.seu-button--success.is-active, .seu-button--success:active) {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
  :global(.seu-button--success:active) {
    outline: none;
  }
  :global(.seu-button--success.is-plain) {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  :global(.seu-button--success.is-plain:focus, .seu-button--success.is-plain:hover) {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  :global(.seu-button--success.is-plain:active) {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  :global(.seu-button--success.is-plain:active) {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none;
  }
  :global(.seu-button--success.is-disabled, .seu-button--success.is-disabled:active, .seu-button--success.is-disabled:focus, .seu-button--success.is-disabled:hover) {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
  :global(.seu-button--success.is-plain.is-disabled, .seu-button--success.is-plain.is-disabled:active, .seu-button--success.is-plain.is-disabled:focus, .seu-button--success.is-plain.is-disabled:hover) {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }

  /* info */
  :global(.seu-button--info) {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
  :global(.seu-button--info:focus, .seu-button--info:hover) {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  :global(.seu-button--info.is-active, .seu-button--info:active) {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
  :global(.seu-button--info:active) {
    outline: none;
  }
  :global(.seu-button--info.is-plain) {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  :global(.seu-button--info.is-plain:focus, .seu-button--info.is-plain:hover) {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
  :global(.seu-button--info.is-plain:active) {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none;
  }
  :global(.seu-button--info.is-disabled, .seu-button--info.is-disabled:active, .seu-button--info.is-disabled:focus, .seu-button--info.is-disabled:hover) {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
  :global(.seu-button--info.is-plain.is-disabled, .seu-button--info.is-plain.is-disabled:active, .seu-button--info.is-plain.is-disabled:focus, .seu-button--info.is-plain.is-disabled:hover) {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
  }

  /* warning */
  :global(.seu-button--warning) {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  :global(.seu-button--warning:focus, .seu-button--warning:hover) {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  :global(.seu-button--warning.is-active, .seu-button--warning:active) {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
  :global(.seu-button--warning:active) {
    outline: none;
  }
  :global(.seu-button--warning.is-plain) {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  :global(.seu-button--warning.is-plain:focus, .seu-button--warning.is-plain:hover) {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  :global(.seu-button--warning.is-plain:active) {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none;
  }
  :global(.seu-button--warning.is-disabled, .seu-button--warning.is-disabled:active, .seu-button--warning.is-disabled:focus, .seu-button--warning.is-disabled:hover) {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
  :global(.seu-button--warning.is-plain.is-disabled, .seu-button--warning.is-plain.is-disabled:active, .seu-button--warning.is-plain.is-disabled:focus, .seu-button--warning.is-plain.is-disabled:hover) {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
  }

  /* danger */
  :global(.seu-button--danger) {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  :global(.seu-button--danger:focus, .seu-button--danger:hover) {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  :global(.seu-button--danger.is-active, .seu-button--danger:active) {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
  :global(.seu-button--danger:active) {
    outline: none;
  }
  :global(.seu-button--danger.is-plain) {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  :global(.seu-button--danger.is-plain:focus, .seu-button--danger.is-plain:hover) {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  :global(.seu-button--danger.is-plain:active) {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none;
  }
  :global(.seu-button--danger.is-disabled, .seu-button--danger.is-disabled:active, .seu-button--danger.is-disabled:focus, .seu-button--danger.is-disabled:hover) {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
  :global(.seu-button--danger.is-plain.is-disabled, .seu-button--danger.is-plain.is-disabled:active, .seu-button--danger.is-plain.is-disabled:focus, .seu-button--danger.is-plain.is-disabled:hover) {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
  }

  /* text */
  :global(.seu-button--text) {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  :global(.seu-button--text:focus, .seu-button--text:hover) {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
  :global(.seu-button--text.is-disabled, .seu-button--text.is-disabled:focus, .seu-button--text.is-disabled:hover, .seu-button--text:active) {
    border-color: transparent;
  }

  /* other */
  :global(.seu-button.is-round) {
    border-radius: 20px;
    padding: 12px 23px;
  }
  :global(.seu-button.is-circle) {
    border-radius: 50%;
    padding: 12px;
  }
</style>
