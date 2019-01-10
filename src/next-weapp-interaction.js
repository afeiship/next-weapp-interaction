(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxWeappActionsheet = nx.WeappActionsheet || require('next-weapp-actionsheet');
  var NxWeappLoading = nx.WeappLoading || require('next-weapp-loading');
  var NxWeappModal = nx.WeappModal || require('next-weapp-modal');
  var NxWeappToast = nx.WeappToast || require('next-weapp-toast');

  var NxWeappInteraction = nx.declare('nx.WeappInteraction', {
    statics: {
      instance: null,
      getInstance: function() {
        if (!this.instance) {
          this.instance = new this();
        }
        return this.instance;
      }
    },
    methods: {
      actions(inOptions) {
        return NxWeappActionsheet.present(inOptions);
      },
      loading(inOptions, inValue) {
        if (inValue) {
          return NxWeappLoading.present(inOptions);
        }
        return NxWeappLoading.dismiss(inOptions);
      },
      modal(inOptions) {
        return NxWeappModal.present(inOptions);
      },
      alert(inOptions) {
        return NxWeappModal.alert(inOptions);
      },
      confirm(inOptions) {
        return NxWeappModal.confirm(inOptions);
      },
      toast(inOptions, inValue) {
        if (inValue) {
          return NxWeappToast.present(inOptions);
        }
        return NxWeappToast.dismiss(inOptions);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappInteraction;
  }
})();
