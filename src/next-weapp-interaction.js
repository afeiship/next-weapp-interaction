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
      actions: function(inOptions) {
        return NxWeappActionsheet.present(inOptions);
      },
      alert: function(inOptions) {
        return NxWeappModal.alert(inOptions);
      },
      confirm: function(inOptions) {
        return NxWeappModal.confirm(inOptions);
      },
      modal: function(inValue, inOptions) {
        if (inValue) {
          return NxWeappModal.present(inOptions);
        }
        return NxWeappModal.dismiss();
      },
      loading: function(inValue, inOptions) {
        if (inValue) {
          return NxWeappLoading.present(inOptions);
        }
        return NxWeappLoading.dismiss(inOptions);
      },
      toast: function(inValue, inOptions) {
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
