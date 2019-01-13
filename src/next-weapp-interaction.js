(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxWeappActionsheet = nx.WeappActionsheet || require('next-weapp-actionsheet');
  var NxWeappLoading = nx.WeappLoading || require('next-weapp-loading');
  var NxWeappModal = nx.WeappModal || require('next-weapp-modal');
  var NxWeappToast = nx.WeappToast || require('next-weapp-toast');
  var nxStubSingleton = nx.stubSingleton || require('next-stub-singleton');
  var NxComponent = {
    loading: NxWeappLoading,
    modal: NxWeappModal,
    toast: NxWeappToast
  };

  var NxWeappInteraction = nx.declare('nx.WeappInteraction', {
    statics: nxStubSingleton(),
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
      'modal,loading,toast': function(inName) {
        return function(inValue, inOptions) {
          var component = NxComponent[inName];
          if (inValue) {
            return component.present(inOptions);
          }
          return component.dismiss();
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappInteraction;
  }
})();
